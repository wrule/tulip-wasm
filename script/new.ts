import fs from 'fs';
import child_process from 'child_process';

function replace(filepath: string, search: any, replace: string) {
  fs.writeFileSync(
    filepath,
    fs.readFileSync(filepath, 'utf8').replace(search, replace),
    'utf8',
  );
}

if (!fs.readFileSync('package.json', 'utf8').includes('nodept')) {
  console.log('project has been created');
  process.exit(0);
}
const name = process.argv[process.argv.length - 1];
console.log(name);
replace('package.json', /nodept/g, name);
replace('package.json', /"version": "(\d+|\.)+"/, '"version": "0.1.0"');
replace('package-lock.json', /nodept/g, name);
replace('README.md', /nodept/g, name);
child_process.execSync('npm install');
child_process.execSync(`rm -rf .git && git init && git add . && git commit -m 'init'`);
