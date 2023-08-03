import { Global } from './utils';
import { Indicator } from './indicator';
import { TulipX } from './tulipx_promise';
import indicators from './indicators.json';

export
const documents: Indicator[] = indicators;

export * from './single';
export * from './sequence';
export * from './indicator';
export * from './tulipx_promise';
