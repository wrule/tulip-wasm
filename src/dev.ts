import * as t from '.';

async function dev() {
  await t.init();
  const list = Array(10000000).fill(0).map(() => Math.random() * 1000);
  console.time('sma');
  const a = t.sma(list, 10);
  console.timeEnd('sma');
}

dev();
