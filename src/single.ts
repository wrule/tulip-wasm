import { Global } from './utils';
import { TulipX } from './tulipx_promise';

export
function start(indic_index: number, options: ArrayLike<number>) {
  const tulipx: TulipX = Global.tulipx_wasm;
  const task = tulipx._push(indic_index, 0, 1);
  tulipx._set_array(tulipx._options(task), options);
  tulipx._run(task);
  const outputs_offset = tulipx._outputs_offset(task);
  tulipx._pop();
  return outputs_offset;
}
