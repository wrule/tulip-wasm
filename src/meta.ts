import { Global } from './utils';
import { Indicator } from './indicator';
import { TulipX } from './tulipx_promise';
import indicators from './indicators.json';

export
const documents: Indicator[] = indicators;

export
const gc_registry = new FinalizationRegistry((ids: number[]) => {
  const tulipx: TulipX = Global.tulip_wasm;
  console.log('gc', ids);
  tulipx._erase_batch(ids[0], ids[ids.length - 1], 0);
});

export * from './single';
export * from './sequence';
export * from './indicator';
export * from './tulipx_promise';
