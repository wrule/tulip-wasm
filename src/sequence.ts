
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

export
interface Task {
  id: number;
  indic_index: number;
  inputs: InputsMap,
  outputs: InputsMap,
}
