import { Global } from './utils';
import { documents } from './meta';
import { TulipX } from './tulipx_promise';

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
  const outputs = Array(indic.outputs).fill(0)
    .map((_, index) => tulipx._get_array(tulipx._outputs(task, index), size));
  const outputs_offset = tulipx._outputs_offset(task);
  outputs.forEach((output) => output.fill(NaN, 0, outputs_offset));
  tulipx._pop();
  if (align !== true) _align(outputs, align === false ? size - outputs_offset : align);
  return outputs;
}

export
function _align(outputs: Float64Array[], length: number) {
  outputs.forEach((output, index) => {
    const diff = length - output.length;
    if (diff > 0) {
      const head = new Float64Array(Array(diff).fill(NaN));
      const array = new Float64Array(head.length + output.length);
      array.set(head, 0);
      array.set(output, head.length);
      outputs[index] = array;
    }
    if (diff < 0) outputs[index] = output.subarray(-diff, output.length);
  });
}
