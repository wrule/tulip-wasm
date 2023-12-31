import { TulipX, documents } from './meta';
import { Global, IsArrayLike, IsUnion, RunResult } from './utils';

export
interface InputMap {
  target_index: number;
  is_inputs: number;
  data_index: number;
}

export
interface InputsMap {
  [name: string]: InputMap;
}

export
type Input = ArrayLike<number> | InputMap;

interface Task {
  id: number;
  indic_index: number;
  inputs: InputsMap,
  outputs: InputsMap,
}

type SequenceResult<T extends InputsMap> = IsUnion<keyof T> extends true ?
  { [name in keyof T]: Float64Array } :
  Float64Array;

type ParamsMap = { [name: string]: { [name: string]: number } };

class Sequence<T extends Task = Task> {
  private size!: number;
  private tasks: Task[] = [];
  private tasks_map = new Map<string | symbol, Task>();
  private readonly tulipx: TulipX = Global.tulip_wasm;

  private inputs_map(
    names: string[],
    target_index: number,
    is_inputs: number,
  ): InputsMap {
    return Object.fromEntries(names.map((name, index) => [name, {
      target_index, is_inputs, data_index: index,
    }]));
  }

  public _push(
    indic_index: number,
    inputs: Input[],
    options: ArrayLike<number>,
    name: string | symbol,
  ) {
    if (this.tasks_map.has(name)) throw 'name already exists';
    if (this.size == null)
      this.size = (inputs.find((input) => IsArrayLike(input)) as ArrayLike<number>)?.length;
    if (this.size == null) throw 'entry task must have a size';
    const id = this.tulipx._push(indic_index, this.size, 0);
    inputs.forEach((input, index) => {
      if (IsArrayLike(input))
        this.tulipx._set_array(this.tulipx._inputs(id, index), input as ArrayLike<number>);
      else {
        const map = input as InputMap;
        this.tulipx._inputs_map(id, index, 1, map.target_index, map.is_inputs, map.data_index);
      }
    });
    this.tulipx._set_array(this.tulipx._options(id), options);
    const task: Task = {
      id, indic_index,
      inputs: this.inputs_map(documents[indic_index].input_names, id, 1),
      outputs: this.inputs_map(documents[indic_index].output_names, id, 0),
    };
    this.tasks.push(task);
    this.tasks_map.set(name, task);
    return task;
  }

  public Update(params_map: ParamsMap) {
    Object.entries(params_map).forEach(([name, params]) => {
      const task = this.tasks_map.get(name);
      if (task == null) throw 'task does not exist';
      const options = documents[task.indic_index].option_names.map((name) => params[name]);
      this.tulipx._set_array(this.tulipx._options(task.id), options);
    });
  }

  public Run() {
    if (this.tasks.length < 1) throw 'tasks is empty';
    const first = this.tasks[0];
    const last = this.tasks[this.tasks.length - 1];
    this.tulipx._run_batch(first.id, last.id);
    const indic = documents[last.indic_index];
    const outputs_size = indic.outputs;
    const outputs = Array(outputs_size).fill(0)
      .map((_, index) => this.tulipx._get_array(
        this.tulipx._outputs(last.id, index),
        this.size,
      ));
    const outputs_offset = this.tulipx._outputs_offset(last.id);
    outputs.forEach((output) => output.fill(NaN, 0, outputs_offset));
    return RunResult(indic, outputs) as SequenceResult<T['outputs']>;
  }

  public Free() {
    if (this.tasks.length < 1) throw 'tasks is empty';
    const first = this.tasks[0];
    const last = this.tasks[this.tasks.length - 1];
    this.tulipx._erase_batch(first.id, last.id, 0);
    this.tasks = [];
    this.tasks_map.clear();
  }
}

export
function submit(
  indic_index: number,
  inputs: Input[],
  options: ArrayLike<number>,
  name: string | symbol = Symbol(),
) {
  const seq: Sequence = Global.tulip_sequence;
  return seq._push(indic_index, inputs, options, name);
}

export
function sequence<T extends Task>(func: () => T) {
  const seq = new Sequence<T>();
  Global.tulip_sequence = seq;
  func();
  Global.tulip_sequence = null;
  return seq;
}
