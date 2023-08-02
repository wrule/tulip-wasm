import * as t from '.';
const data = require('../ETH_USDT-30m.json');

async function dev() {
  await t.init();
  const close = data.map((item: any) => item[4]);
  const seq = t.sequence(() => {
    const rsi = t.rsi_q(close, 0, 'rsi');
    const stoch = t.stoch_q(rsi.outputs.rsi, rsi.outputs.rsi, rsi.outputs.rsi, {
      k_slowing_period: 0,
      k_period: 0,
      d_period: 0,
    }, 'stoch');
    return t.crossroi_q(stoch.outputs.stoch_k, stoch.outputs.stoch_d, rsi.inputs.real, 0.001);
  });
  console.time('bt');
  seq.Update({
    rsi: { period: 13 },
    stoch: { k_period: 45, d_period: 45, k_slowing_period: 32 },
  });
  const roi = seq.Run();
  console.timeEnd('bt');
  console.log(roi[roi.length - 1]);

  // const list = Array(10000000).fill(0).map(() => Math.random() * 1000);
  // console.time('sma');
  // const a = t.sma(list, 10);
  // console.timeEnd('sma');
}

dev();
