import { Global } from './utils';
import get_tulipx from './tulipx';

export
interface TulipX {
  _push(indic_index: number, size: number, start_task: number): number;
  _pop(): void;
  _inputs(task_index: number, data_index: number): number;
  _options(task_index: number): number;
  _outputs(task_index: number, data_index: number): number;
  _inputs_map(
    task_index: number, input_index: number,
    enabled: number, target_index: number, is_inputs: number, data_index: number,
  ): void;
  _outputs_offset(task_index: number): number;
  _run(task_index: number): void;
  _run_batch(start_index: number, end_index: number): void;
  _erase_batch(start_index: number, end_index: number, only_erase: number): void;
  HEAPF64: Float64Array;
  _set_array(address: number, array: ArrayLike<number>): void;
  _get_array(address: number, size: number): Float64Array;
  _mm(size: number): number;
}

async function tulipx_factory() {
  const tulipx: TulipX = await get_tulipx();
  const bytes = tulipx.HEAPF64.BYTES_PER_ELEMENT;
  tulipx._set_array = (address: number, array: ArrayLike<number>) =>
    tulipx.HEAPF64.set(array, address / bytes);
  tulipx._get_array = (address: number, size: number) =>
    tulipx.HEAPF64.subarray(address / bytes, address / bytes + size);
  return tulipx;
}

const tulipx_promise = tulipx_factory();
let initializing = false;

export
async function init() {
  if (Global.tulip_wasm) return Global.tulip_wasm as TulipX;
  const log = !initializing;
  initializing = true;
  log && console.log('initialize tulip-wasm...');
  Global.tulip_wasm = await tulipx_promise;
  log && console.log('initialization successful');
  return Global.tulip_wasm as TulipX;
}

init();
