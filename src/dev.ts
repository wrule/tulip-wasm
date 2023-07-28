import { hello } from '.';
import { start, run, _align } from './single';
import { init } from './tulipx_promise';

async function dev() {
  await init();
  console.log(start(72, [10]));
  console.log(
    run(72, [[1, 2, 3, 4, 5]], [3], 2)
  );
}

dev();
