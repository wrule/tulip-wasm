import * as t from '.';

async function dev() {
  await t.init();
  const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const list2 = Array(10000000).fill(0).map(() => Math.random() * 1000);
  const a = t.crossaction(
    [10, 9, 8,  7,  6, 10, 10, 11, 12, 10 ],
    [ 1, 3, 9, 10, 11, 11, 11, 10, 10, 11 ],
  );
  console.log(a);
  return;
  while (true) {
    console.time('op');
    const result = t.sma(list2, 10);
    console.timeEnd('op');
  }
}

dev();
