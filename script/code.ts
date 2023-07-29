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

  private names(list: string[], type: 'number' | 'number[]' | 'options' | 'outputs' | '' = 'number') {
    return list.map((name, index) => {
      if (type === 'number') return `${name}: number`;
      if (type === 'number[]') return `${name}: number[]`;
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

  public Code() {
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
  }], align);
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
import { run, start } from './meta';

${documents.map((ind) => new Code(ind).Code()).join('\n\n')}

${documents.map((ind) => new Code(ind).CodeStart()).join('\n\n')}

export * from './meta';
  `.trim() + '\n';
  fs.writeFileSync('src/methods.ts', full_code, 'utf8');
}

main();
