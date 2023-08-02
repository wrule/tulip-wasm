import * as t from '.';
const data = require('../ETH_USDT-30m.json');

async function dev() {
  await t.init();
  const close = data.map((item: any) => item[4]);
  const seq = t.sequence(() => {
    const rsi = t.rsi_q(close, 13, 'rsi');
    const stoch = t.stoch_q(rsi.outputs.rsi, rsi.outputs.rsi, rsi.outputs.rsi, {
      k_slowing_period: 32,
      k_period: 45,
      d_period: 45,
    }, 'stoch');
    return t.crossroi_q(stoch.outputs.stoch_k, stoch.outputs.stoch_d, rsi.inputs.real, 0.001);
  });
  console.time('bt');
  seq.Update({
    rsi: { period: 13 },
    stoch: { k_period: 45, d_period: 45, k_slowing_period: 32 },
  });
  const roi = seq.Run();
  // let max = -Infinity;
  // for (let i = 0; i < 100000; ++i) {
  //   seq.Update({
  //     rsi: { period: Math.floor(Math.random() * 100) },
  //     stoch: { k_period: Math.floor(Math.random() * 100), d_period: Math.floor(Math.random() * 100), k_slowing_period: Math.floor(Math.random() * 100) },
  //   });
  //   const roi = seq.Run();
  //   if (roi[roi.length - 1] > max) {
  //     max = roi[roi.length - 1];
  //     console.log(max);
  //   }
  // }
  console.timeEnd('bt');
  console.log(roi[roi.length - 1]);

  // const list = Array(10000000).fill(0).map(() => Math.random() * 1000);
  // console.time('sma');
  // const a = t.sma(list, 10);
  // console.timeEnd('sma');
}

dev();
