import { run, _align, init, submit, sequence } from '.';

async function dev() {
  await init();
  const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const list2 = Array(100000).fill(0).map(() => Math.random() * 1000);

  const old_time = Date.now();
  const seq = sequence(() => {
    const a = submit(72, [list2], [2]);
    const b = submit(72, [a.outputs.sma], [2]);
    return submit(72, [b.outputs.sma], [2]);
  });
  const result = seq.Run();
  console.log(Date.now() - old_time, result.length);

  // const old_time = Date.now();
  // const result = run(72, [list2], [10]);
  // console.log(Date.now() - old_time);
}

dev();
