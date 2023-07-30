import * as t from '.';

async function dev() {
  await t.init();
  const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const list2 = Array(100000).fill(0).map(() => Math.random() * 1000);

  const old_time = Date.now();
  const seq = t.sequence(() => {
    const rsi = t.rsi_q(list2, 45);
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
