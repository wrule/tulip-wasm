import { Indicator } from './indicator';

export
const IsBrowser =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined';

export
const IsNode =
  typeof process !== 'undefined' &&
  process.versions != null &&
  process.versions.node != null;

export
const IsWebWorker =
  typeof self === 'object' &&
  self.constructor &&
  self.constructor.name === 'DedicatedWorkerGlobalScope';

export
const Global = (() => {
  let env: any = null;
  if (IsBrowser) env = window;
  if (IsNode) env = global;
  if (IsWebWorker) env = self;
  if (!env) throw 'unknown runtime';
  return env;
})();

export
function IsArrayLike(input: any) {
  return input.length != null;
}

export
function RunResult(indic: Indicator, outputs: Float64Array[]) {
  if (indic.outputs < 2) return outputs[0];
  return Object.fromEntries(
    indic.output_names.map((name, index) => [name, outputs[index]])
  );
}
