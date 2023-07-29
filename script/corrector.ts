import fs from 'fs';
import { Indicator } from '../src/indicator';

const tasks = {
  'add': (indic: Indicator) => indic.input_names = ['real1', 'real2'],
  'sub': (indic: Indicator) => indic.input_names = ['real1', 'real2'],
  'mul': (indic: Indicator) => indic.input_names = ['real1', 'real2'],
  'div': (indic: Indicator) => indic.input_names = ['real1', 'real2'],
  'crossany': (indic: Indicator) => indic.input_names = ['real1', 'real2'],
  'crossover': (indic: Indicator) => indic.input_names = ['real1', 'real2'],
  'var': (indic: Indicator) => indic.name = '_var',
};

function main() {
  const filepath = process.argv[2];
  const indicators: Indicator[] = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  Object.entries(tasks).forEach(([name, func]) => {
    const indic = indicators.find((indic) => indic.name === name);
    if (indic) {
      func(indic);
      console.log('correct', indic.name);
    }
  });
  fs.writeFileSync(filepath, JSON.stringify(indicators, null, 2), 'utf8');
}

main();
