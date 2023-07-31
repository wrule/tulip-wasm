import * as t from '.';

let count = 0;

const registry = new FinalizationRegistry((value) => {
  console.timeEnd('gc');
  console.log('count', count);
  console.log('垃圾回收了', value);
});

function func() {
  const mem = { name: '你好，世界' };
  registry.register(mem, 123);
}

async function dev() {
  const wasm = await t.init();
  func();
  console.time('gc');
  let list: number[] = [];
  setInterval(() => {
    wasm._mm(1e5);
    // list.push(...Array(1e4).fill(0).map(() => Math.random()));
    count++;
  }, 100);
  return;
  const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const list2 = Array(100000).fill(0).map(() => Math.random() * 1000);

  const old_time = Date.now();
  const seq = t.sequence(() => {
    const rsi = t.rsi_q(list2, 45);
    const sma1 = t.sma_q(rsi.outputs.rsi, 21);
    const sma2 = t.sma_q(rsi.outputs.rsi, 36);
    const diff = t.sub_q(sma1.outputs.sma, sma2.outputs.sma);
    const k = t.sma_q(diff.outputs.sub, 40);
    const d = t.sma_q(k.outputs.sma, 34);

    return t.stoch_q(rsi.outputs.rsi, rsi.outputs.rsi, rsi.outputs.rsi, {
      k_period: 45,
      k_slowing_period: 13,
      d_period: 32,
    });
  });
  const result = seq.Run();
  console.log(Date.now() - old_time, result.stoch_k.length);
}

dev();
