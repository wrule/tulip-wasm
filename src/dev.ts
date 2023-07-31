import * as t from '.';

async function dev() {
  await t.init();
  const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const list2 = Array(10000000).fill(0).map(() => Math.random() * 1000);

  while (true) {
    console.time('op');
    const result = t.sma(list2, 10);
    console.timeEnd('op');
  }
}

dev();
