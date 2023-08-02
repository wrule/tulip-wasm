import * as t from '.';

async function dev() {
  await t.init();
  const close = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const seq = t.sequence(() => {
    const sma1 = t.sma_q(close, 0, 'sma1');
    const sma2 = t.sma_q(sma1.inputs.real, 0, 'sma2');
    return t.crossroi_q(sma1.outputs.sma, sma2.outputs.sma, sma1.inputs.real, 0.001);
  });
  seq.Update({
    sma1: { period: 2 },
    sma2: { period: 4 },
  });
  const roi = seq.Run();
  console.log(roi);

  // const list = Array(10000000).fill(0).map(() => Math.random() * 1000);
  // console.time('sma');
  // const a = t.sma(list, 10);
  // console.timeEnd('sma');
}

dev();
