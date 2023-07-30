import fs from 'fs';
import { Indicator, documents } from '../src/meta';

export
class Code {
  public constructor(private readonly indic: Indicator) { }

  private get options() {
    return this.indic.options > 1;
  }

  private get outputs() {
    return this.indic.outputs > 1;
  }

  private names(list: string[], type: 'number' | 'number[]' | 'Float64Array' | 'Input' | 'options' | 'outputs' | '' = 'number') {
    return list.map((name, index) => {
      if (type === 'number') return `${name}: number`;
      if (type === 'number[]') return `${name}: ArrayLike<number>`;
      if (type === 'Float64Array') return `${name}: Float64Array`;
      if (type === 'Input') return `${name}: Input`;
      if (type === 'options') return `options.${name}`;
      if (type === 'outputs') return `${name}: outputs[${index}]`;
      return name;
    }).join(', ');
  }

  private get optionsCode() {
    return this.options ?
      `options: { ${this.names(this.indic.option_names)} }` :
      this.names(this.indic.option_names);
  }

  private get argsCode() {
    const inputs = this.names(this.indic.input_names, 'number[]');
    const align = 'align: boolean | number = false';
    return [inputs, this.optionsCode, align].filter((item) => item).join(', ');
  }

  private get argsCodeSubmit() {
    const inputs = this.names(this.indic.input_names, 'Input');
    return [inputs, this.optionsCode].filter((item) => item).join(', ');
  }

  public CodeRun() {
    return `
/**
 * ${this.indic.full_name}
 */
export
function ${this.indic.name}(${this.argsCode}) {
  return run(${this.indic.index}, [${
    this.names(this.indic.input_names, '')
  }], [${
    this.names(this.indic.option_names, this.options ? 'options' : '')
  }], align) as ${
    this.outputs ?
      `{ ${this.names(this.indic.output_names, 'Float64Array')} }` :
      'Float64Array'
  };
}
    `.trim();
  }

  public CodeSubmit() {
    return `
/**
 * ${this.indic.full_name}
 */
export
function ${this.indic.name}_q(${this.argsCodeSubmit}) {
  return submit(${this.indic.index}, [${
    this.names(this.indic.input_names, '')
  }], [${
    this.names(this.indic.option_names, this.options ? 'options' : '')
  }]) as {
    id: number,
    indic_index: number,
    inputs: InputsMap,
    outputs: InputsMap,
  };
}
    `.trim();
  }

  public CodeStart() {
    return `
/**
 * Get ${this.indic.full_name} Start Index
 */
export
function ${this.indic.name}_start(${this.optionsCode}) {
  return start(${this.indic.index}, [${
    this.names(this.indic.option_names, this.options ? 'options' : '')
  }]);
}
    `.trim();
  }
}

function main() {
  const full_code = `
import { run, start, submit, Input, InputMap, InputsMap } from './meta';

${documents.map((ind) => new Code(ind).CodeRun()).join('\n\n')}

${documents.map((ind) => new Code(ind).CodeSubmit()).join('\n\n')}

${documents.map((ind) => new Code(ind).CodeStart()).join('\n\n')}

export * from './meta';
  `.trim() + '\n';
  fs.writeFileSync('src/methods.ts', full_code, 'utf8');
}

main();
