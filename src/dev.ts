import { hello } from '.';
import { start } from './single';
import { init } from './tulipx_promise';

async function dev() {
  await init();
  console.log(start(72, [10]));
}

dev();
