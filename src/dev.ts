import { run, _align, init } from '.';

async function dev() {
  await init();
  const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const list2 = Array(10000000).fill(0).map(() => Math.random() * 1000);
  const old_time = Date.now();
  const result = run(72, [list2], [10]);
  console.log(Date.now() - old_time);
}

dev();
