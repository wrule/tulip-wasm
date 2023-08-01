import * as t from '.';

async function dev() {
  await t.init();
  const list1 = new Float64Array([1, 2, 3, 4, 5]);
  const list2 = new Float64Array([9, 1, 3, 3, 2]);
  console.log(t._copy([list1, list2], 10));

  // const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const list2 = Array(10000000).fill(0).map(() => Math.random() * 1000);
  // const a = t.crossaction(
  //   [1, 2, 3],
  //   [2, 1, 4],
  // );
  // console.log(a);
  return;
  while (true) {
    console.time('op');
    const result = t.sma(list2, 10);
    console.timeEnd('op');
  }
}

dev();
