import * as t from '.';

async function dev() {
  await t.init();
  const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const list2 = Array(10000000).fill(0).map(() => Math.random() * 1000);

  const old_time = Date.now();
  const seq = t.sequence(() => {
    return t.sma_q(list2, 3);
  });
  const result = seq.Run();
  console.log(Date.now() - old_time, result.length);
}

dev();
