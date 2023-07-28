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
  const tulipx: TulipX = Global.tulipx_wasm;
  const size = inputs[0].length;
  const task = tulipx._push(indic_index, size, 0);
  inputs.forEach((input, index) => tulipx._set_array(tulipx._inputs(task, index), input));
  tulipx._set_array(tulipx._options(task), options);
  tulipx._run(task);
  const outputs = Array(documents[indic_index].outputs).fill(0)
    .map((_, index) => tulipx._get_array(tulipx._outputs(task, index), size));
  const outputs_offset = tulipx._outputs_offset(task);
  outputs.forEach((output) => output.fill(NaN, 0, outputs_offset));
  tulipx._pop();
  if (align !== true) _align(outputs, align === false ? size - outputs_offset : align);
  return outputs;
}