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
  const outputs = run_alone_sync(${this.indic.index}, [${
    this.names(this.indic.input_names, '')
  }], [${
    this.names(this.indic.option_names, this.options ? 'options' : '')
  }], ${this.indic.outputs}, align);
  return ${this.outputs ?
    `{ ${this.names(this.indic.output_names, 'outputs')} }` :
    'outputs[0]'
  };
}
    `.trim();
  }

  public CodeStart() {
    return `
/**
 * ${this.indic.full_name}
 */
export
function ${this.indic.name}_start(${this.optionsCode}) {
  return run_get_start(${this.indic.index}, [${
    this.names(this.indic.option_names, this.options ? 'options' : '')
  }]);
}
    `.trim();
  }
}

function main() {
  const full_code = `
export * from './meta';
import { tulip_promise, run_alone_promise, run_alone_sync, run_get_start } from './meta';

${documents.map((ind) => new Code(ind).Code()).join('\n\n')}

${documents.map((ind) => new Code(ind).CodeStart()).join('\n\n')}
  `.trim() + '\n';
  fs.writeFileSync('src/indicators.ts', full_code, 'utf8');
}

main();
