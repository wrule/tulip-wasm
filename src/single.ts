import { documents } from './meta';
import { TulipX } from './tulipx_promise';
import { Global, RunResult } from './utils';

export
function start(indic_index: number, options: ArrayLike<number>) {
  const tulipx: TulipX = Global.tulip_wasm;
  const task = tulipx._push(indic_index, 0, 1);
  tulipx._set_array(tulipx._options(task), options);
  tulipx._run(task);
  const outputs_offset = tulipx._outputs_offset(task);
  tulipx._pop();
  return outputs_offset;
}

export
function run(
  indic_index: number,
  inputs: ArrayLike<number>[],
  options: ArrayLike<number>,
  align: boolean | number = false,
) {
  const tulipx: TulipX = Global.tulip_wasm;
  const size = inputs[0].length;
  const task = tulipx._push(indic_index, size, 0);
  inputs.forEach((input, index) => tulipx._set_array(tulipx._inputs(task, index), input));
  tulipx._set_array(tulipx._options(task), options);
  tulipx._run(task);
  const indic = documents[indic_index];
  let outputs = Array(indic.outputs).fill(0)
    .map((_, index) => tulipx._get_array(tulipx._outputs(task, index), size));
  const outputs_offset = tulipx._outputs_offset(task);
  outputs.forEach((output) => output.fill(NaN, 0, outputs_offset));
  if (align !== true) outputs = _copy(outputs, align === false ? size - outputs_offset : align);
  tulipx._pop();
  return RunResult(indic, outputs);
}

export
function _copy(outputs: Float64Array[], length: number, fill = NaN) {
  return outputs.map((output) => {
    const diff = length - output.length;
    if (diff > 0) {
      const head = new Float64Array(Array(diff).fill(fill));
      const array = new Float64Array(head.length + output.length);
      array.set(head, 0);
      array.set(output, head.length);
      return array;
    }
    if (diff < 0) return output.subarray(-diff, output.length);
    return output;
  });
}
