import { run, start, submit, Input, InputMap, InputsMap } from './meta';

/**
 * Vector Absolute Value
 */
export
function abs(real: ArrayLike<number>, align: boolean | number = false) {
  return run(0, [real], [], align) as Float64Array;
}

/**
 * Vector Arccosine
 */
export
function acos(real: ArrayLike<number>, align: boolean | number = false) {
  return run(1, [real], [], align) as Float64Array;
}

/**
 * Accumulation/Distribution Line
 */
export
function ad(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, volume: ArrayLike<number>, align: boolean | number = false) {
  return run(2, [high, low, close, volume], [], align) as Float64Array;
}

/**
 * Vector Addition
 */
export
function add(real1: ArrayLike<number>, real2: ArrayLike<number>, align: boolean | number = false) {
  return run(3, [real1, real2], [], align) as Float64Array;
}

/**
 * Accumulation/Distribution Oscillator
 */
export
function adosc(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, volume: ArrayLike<number>, options: { short_period: number, long_period: number }, align: boolean | number = false) {
  return run(4, [high, low, close, volume], [options.short_period, options.long_period], align) as Float64Array;
}

/**
 * Average Directional Movement Index
 */
export
function adx(high: ArrayLike<number>, low: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(5, [high, low], [period], align) as Float64Array;
}

/**
 * Average Directional Movement Rating
 */
export
function adxr(high: ArrayLike<number>, low: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(6, [high, low], [period], align) as Float64Array;
}

/**
 * Awesome Oscillator
 */
export
function ao(high: ArrayLike<number>, low: ArrayLike<number>, align: boolean | number = false) {
  return run(7, [high, low], [], align) as Float64Array;
}

/**
 * Absolute Price Oscillator
 */
export
function apo(real: ArrayLike<number>, options: { short_period: number, long_period: number }, align: boolean | number = false) {
  return run(8, [real], [options.short_period, options.long_period], align) as Float64Array;
}

/**
 * Aroon
 */
export
function aroon(high: ArrayLike<number>, low: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(9, [high, low], [period], align) as { aroon_down: Float64Array, aroon_up: Float64Array };
}

/**
 * Aroon Oscillator
 */
export
function aroonosc(high: ArrayLike<number>, low: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(10, [high, low], [period], align) as Float64Array;
}

/**
 * Vector Arcsine
 */
export
function asin(real: ArrayLike<number>, align: boolean | number = false) {
  return run(11, [real], [], align) as Float64Array;
}

/**
 * Vector Arctangent
 */
export
function atan(real: ArrayLike<number>, align: boolean | number = false) {
  return run(12, [real], [], align) as Float64Array;
}

/**
 * Average True Range
 */
export
function atr(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(13, [high, low, close], [period], align) as Float64Array;
}

/**
 * Average Price
 */
export
function avgprice(open: ArrayLike<number>, high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, align: boolean | number = false) {
  return run(14, [open, high, low, close], [], align) as Float64Array;
}

/**
 * Bollinger Bands
 */
export
function bbands(real: ArrayLike<number>, options: { period: number, stddev: number }, align: boolean | number = false) {
  return run(15, [real], [options.period, options.stddev], align) as { bbands_lower: Float64Array, bbands_middle: Float64Array, bbands_upper: Float64Array };
}

/**
 * Balance of Power
 */
export
function bop(open: ArrayLike<number>, high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, align: boolean | number = false) {
  return run(16, [open, high, low, close], [], align) as Float64Array;
}

/**
 * Commodity Channel Index
 */
export
function cci(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(17, [high, low, close], [period], align) as Float64Array;
}

/**
 * Vector Ceiling
 */
export
function ceil(real: ArrayLike<number>, align: boolean | number = false) {
  return run(18, [real], [], align) as Float64Array;
}

/**
 * Chande Momentum Oscillator
 */
export
function cmo(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(19, [real], [period], align) as Float64Array;
}

/**
 * Vector Cosine
 */
export
function cos(real: ArrayLike<number>, align: boolean | number = false) {
  return run(20, [real], [], align) as Float64Array;
}

/**
 * Vector Hyperbolic Cosine
 */
export
function cosh(real: ArrayLike<number>, align: boolean | number = false) {
  return run(21, [real], [], align) as Float64Array;
}

/**
 * Crossany
 */
export
function crossany(real1: ArrayLike<number>, real2: ArrayLike<number>, align: boolean | number = false) {
  return run(22, [real1, real2], [], align) as Float64Array;
}

/**
 * Crossover
 */
export
function crossover(real1: ArrayLike<number>, real2: ArrayLike<number>, align: boolean | number = false) {
  return run(23, [real1, real2], [], align) as Float64Array;
}

/**
 * Chaikins Volatility
 */
export
function cvi(high: ArrayLike<number>, low: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(24, [high, low], [period], align) as Float64Array;
}

/**
 * Linear Decay
 */
export
function decay(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(25, [real], [period], align) as Float64Array;
}

/**
 * Double Exponential Moving Average
 */
export
function dema(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(26, [real], [period], align) as Float64Array;
}

/**
 * Directional Indicator
 */
export
function di(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(27, [high, low, close], [period], align) as { plus_di: Float64Array, minus_di: Float64Array };
}

/**
 * Vector Division
 */
export
function div(real1: ArrayLike<number>, real2: ArrayLike<number>, align: boolean | number = false) {
  return run(28, [real1, real2], [], align) as Float64Array;
}

/**
 * Directional Movement
 */
export
function dm(high: ArrayLike<number>, low: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(29, [high, low], [period], align) as { plus_dm: Float64Array, minus_dm: Float64Array };
}

/**
 * Detrended Price Oscillator
 */
export
function dpo(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(30, [real], [period], align) as Float64Array;
}

/**
 * Directional Movement Index
 */
export
function dx(high: ArrayLike<number>, low: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(31, [high, low], [period], align) as Float64Array;
}

/**
 * Exponential Decay
 */
export
function edecay(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(32, [real], [period], align) as Float64Array;
}

/**
 * Exponential Moving Average
 */
export
function ema(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(33, [real], [period], align) as Float64Array;
}

/**
 * Ease of Movement
 */
export
function emv(high: ArrayLike<number>, low: ArrayLike<number>, volume: ArrayLike<number>, align: boolean | number = false) {
  return run(34, [high, low, volume], [], align) as Float64Array;
}

/**
 * Vector Exponential
 */
export
function exp(real: ArrayLike<number>, align: boolean | number = false) {
  return run(35, [real], [], align) as Float64Array;
}

/**
 * Fisher Transform
 */
export
function fisher(high: ArrayLike<number>, low: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(36, [high, low], [period], align) as { fisher: Float64Array, fisher_signal: Float64Array };
}

/**
 * Vector Floor
 */
export
function floor(real: ArrayLike<number>, align: boolean | number = false) {
  return run(37, [real], [], align) as Float64Array;
}

/**
 * Forecast Oscillator
 */
export
function fosc(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(38, [real], [period], align) as Float64Array;
}

/**
 * Hull Moving Average
 */
export
function hma(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(39, [real], [period], align) as Float64Array;
}

/**
 * Kaufman Adaptive Moving Average
 */
export
function kama(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(40, [real], [period], align) as Float64Array;
}

/**
 * Klinger Volume Oscillator
 */
export
function kvo(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, volume: ArrayLike<number>, options: { short_period: number, long_period: number }, align: boolean | number = false) {
  return run(41, [high, low, close, volume], [options.short_period, options.long_period], align) as Float64Array;
}

/**
 * Lag
 */
export
function lag(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(42, [real], [period], align) as Float64Array;
}

/**
 * Linear Regression
 */
export
function linreg(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(43, [real], [period], align) as Float64Array;
}

/**
 * Linear Regression Intercept
 */
export
function linregintercept(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(44, [real], [period], align) as Float64Array;
}

/**
 * Linear Regression Slope
 */
export
function linregslope(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(45, [real], [period], align) as Float64Array;
}

/**
 * Vector Natural Log
 */
export
function ln(real: ArrayLike<number>, align: boolean | number = false) {
  return run(46, [real], [], align) as Float64Array;
}

/**
 * Vector Base-10 Log
 */
export
function log10(real: ArrayLike<number>, align: boolean | number = false) {
  return run(47, [real], [], align) as Float64Array;
}

/**
 * Moving Average Convergence/Divergence
 */
export
function macd(real: ArrayLike<number>, options: { short_period: number, long_period: number, signal_period: number }, align: boolean | number = false) {
  return run(48, [real], [options.short_period, options.long_period, options.signal_period], align) as { macd: Float64Array, macd_signal: Float64Array, macd_histogram: Float64Array };
}

/**
 * Market Facilitation Index
 */
export
function marketfi(high: ArrayLike<number>, low: ArrayLike<number>, volume: ArrayLike<number>, align: boolean | number = false) {
  return run(49, [high, low, volume], [], align) as Float64Array;
}

/**
 * Mass Index
 */
export
function mass(high: ArrayLike<number>, low: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(50, [high, low], [period], align) as Float64Array;
}

/**
 * Maximum In Period
 */
export
function max(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(51, [real], [period], align) as Float64Array;
}

/**
 * Mean Deviation Over Period
 */
export
function md(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(52, [real], [period], align) as Float64Array;
}

/**
 * Median Price
 */
export
function medprice(high: ArrayLike<number>, low: ArrayLike<number>, align: boolean | number = false) {
  return run(53, [high, low], [], align) as Float64Array;
}

/**
 * Money Flow Index
 */
export
function mfi(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, volume: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(54, [high, low, close, volume], [period], align) as Float64Array;
}

/**
 * Minimum In Period
 */
export
function min(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(55, [real], [period], align) as Float64Array;
}

/**
 * Momentum
 */
export
function mom(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(56, [real], [period], align) as Float64Array;
}

/**
 * Mesa Sine Wave
 */
export
function msw(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(57, [real], [period], align) as { msw_sine: Float64Array, msw_lead: Float64Array };
}

/**
 * Vector Multiplication
 */
export
function mul(real1: ArrayLike<number>, real2: ArrayLike<number>, align: boolean | number = false) {
  return run(58, [real1, real2], [], align) as Float64Array;
}

/**
 * Normalized Average True Range
 */
export
function natr(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(59, [high, low, close], [period], align) as Float64Array;
}

/**
 * Negative Volume Index
 */
export
function nvi(close: ArrayLike<number>, volume: ArrayLike<number>, align: boolean | number = false) {
  return run(60, [close, volume], [], align) as Float64Array;
}

/**
 * On Balance Volume
 */
export
function obv(close: ArrayLike<number>, volume: ArrayLike<number>, align: boolean | number = false) {
  return run(61, [close, volume], [], align) as Float64Array;
}

/**
 * Percentage Price Oscillator
 */
export
function ppo(real: ArrayLike<number>, options: { short_period: number, long_period: number }, align: boolean | number = false) {
  return run(62, [real], [options.short_period, options.long_period], align) as Float64Array;
}

/**
 * Parabolic SAR
 */
export
function psar(high: ArrayLike<number>, low: ArrayLike<number>, options: { acceleration_factor_step: number, acceleration_factor_maximum: number }, align: boolean | number = false) {
  return run(63, [high, low], [options.acceleration_factor_step, options.acceleration_factor_maximum], align) as Float64Array;
}

/**
 * Positive Volume Index
 */
export
function pvi(close: ArrayLike<number>, volume: ArrayLike<number>, align: boolean | number = false) {
  return run(64, [close, volume], [], align) as Float64Array;
}

/**
 * Qstick
 */
export
function qstick(open: ArrayLike<number>, close: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(65, [open, close], [period], align) as Float64Array;
}

/**
 * Rate of Change
 */
export
function roc(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(66, [real], [period], align) as Float64Array;
}

/**
 * Rate of Change Ratio
 */
export
function rocr(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(67, [real], [period], align) as Float64Array;
}

/**
 * Vector Round
 */
export
function round(real: ArrayLike<number>, align: boolean | number = false) {
  return run(68, [real], [], align) as Float64Array;
}

/**
 * Relative Strength Index
 */
export
function rsi(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(69, [real], [period], align) as Float64Array;
}

/**
 * Vector Sine
 */
export
function sin(real: ArrayLike<number>, align: boolean | number = false) {
  return run(70, [real], [], align) as Float64Array;
}

/**
 * Vector Hyperbolic Sine
 */
export
function sinh(real: ArrayLike<number>, align: boolean | number = false) {
  return run(71, [real], [], align) as Float64Array;
}

/**
 * Simple Moving Average
 */
export
function sma(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(72, [real], [period], align) as Float64Array;
}

/**
 * Vector Square Root
 */
export
function sqrt(real: ArrayLike<number>, align: boolean | number = false) {
  return run(73, [real], [], align) as Float64Array;
}

/**
 * Standard Deviation Over Period
 */
export
function stddev(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(74, [real], [period], align) as Float64Array;
}

/**
 * Standard Error Over Period
 */
export
function stderr(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(75, [real], [period], align) as Float64Array;
}

/**
 * Stochastic Oscillator
 */
export
function stoch(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, options: { k_period: number, k_slowing_period: number, d_period: number }, align: boolean | number = false) {
  return run(76, [high, low, close], [options.k_period, options.k_slowing_period, options.d_period], align) as { stoch_k: Float64Array, stoch_d: Float64Array };
}

/**
 * Stochastic RSI
 */
export
function stochrsi(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(77, [real], [period], align) as Float64Array;
}

/**
 * Vector Subtraction
 */
export
function sub(real1: ArrayLike<number>, real2: ArrayLike<number>, align: boolean | number = false) {
  return run(78, [real1, real2], [], align) as Float64Array;
}

/**
 * Sum Over Period
 */
export
function sum(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(79, [real], [period], align) as Float64Array;
}

/**
 * Vector Tangent
 */
export
function tan(real: ArrayLike<number>, align: boolean | number = false) {
  return run(80, [real], [], align) as Float64Array;
}

/**
 * Vector Hyperbolic Tangent
 */
export
function tanh(real: ArrayLike<number>, align: boolean | number = false) {
  return run(81, [real], [], align) as Float64Array;
}

/**
 * Triple Exponential Moving Average
 */
export
function tema(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(82, [real], [period], align) as Float64Array;
}

/**
 * Vector Degree Conversion
 */
export
function todeg(real: ArrayLike<number>, align: boolean | number = false) {
  return run(83, [real], [], align) as Float64Array;
}

/**
 * Vector Radian Conversion
 */
export
function torad(real: ArrayLike<number>, align: boolean | number = false) {
  return run(84, [real], [], align) as Float64Array;
}

/**
 * True Range
 */
export
function tr(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, align: boolean | number = false) {
  return run(85, [high, low, close], [], align) as Float64Array;
}

/**
 * Triangular Moving Average
 */
export
function trima(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(86, [real], [period], align) as Float64Array;
}

/**
 * Trix
 */
export
function trix(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(87, [real], [period], align) as Float64Array;
}

/**
 * Vector Truncate
 */
export
function trunc(real: ArrayLike<number>, align: boolean | number = false) {
  return run(88, [real], [], align) as Float64Array;
}

/**
 * Time Series Forecast
 */
export
function tsf(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(89, [real], [period], align) as Float64Array;
}

/**
 * Typical Price
 */
export
function typprice(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, align: boolean | number = false) {
  return run(90, [high, low, close], [], align) as Float64Array;
}

/**
 * Ultimate Oscillator
 */
export
function ultosc(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, options: { short_period: number, medium_period: number, long_period: number }, align: boolean | number = false) {
  return run(91, [high, low, close], [options.short_period, options.medium_period, options.long_period], align) as Float64Array;
}

/**
 * Variance Over Period
 */
export
function _var(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(92, [real], [period], align) as Float64Array;
}

/**
 * Vertical Horizontal Filter
 */
export
function vhf(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(93, [real], [period], align) as Float64Array;
}

/**
 * Variable Index Dynamic Average
 */
export
function vidya(real: ArrayLike<number>, options: { short_period: number, long_period: number, alpha: number }, align: boolean | number = false) {
  return run(94, [real], [options.short_period, options.long_period, options.alpha], align) as Float64Array;
}

/**
 * Annualized Historical Volatility
 */
export
function volatility(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(95, [real], [period], align) as Float64Array;
}

/**
 * Volume Oscillator
 */
export
function vosc(volume: ArrayLike<number>, options: { short_period: number, long_period: number }, align: boolean | number = false) {
  return run(96, [volume], [options.short_period, options.long_period], align) as Float64Array;
}

/**
 * Volume Weighted Moving Average
 */
export
function vwma(close: ArrayLike<number>, volume: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(97, [close, volume], [period], align) as Float64Array;
}

/**
 * Williams Accumulation/Distribution
 */
export
function wad(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, align: boolean | number = false) {
  return run(98, [high, low, close], [], align) as Float64Array;
}

/**
 * Weighted Close Price
 */
export
function wcprice(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, align: boolean | number = false) {
  return run(99, [high, low, close], [], align) as Float64Array;
}

/**
 * Wilders Smoothing
 */
export
function wilders(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(100, [real], [period], align) as Float64Array;
}

/**
 * Williams %R
 */
export
function willr(high: ArrayLike<number>, low: ArrayLike<number>, close: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(101, [high, low, close], [period], align) as Float64Array;
}

/**
 * Weighted Moving Average
 */
export
function wma(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(102, [real], [period], align) as Float64Array;
}

/**
 * Zero-Lag Exponential Moving Average
 */
export
function zlema(real: ArrayLike<number>, period: number, align: boolean | number = false) {
  return run(103, [real], [period], align) as Float64Array;
}

/**
 * Cross Signals ROI
 */
export
function crossroi(prices: ArrayLike<number>, signals: ArrayLike<number>, fee: number, align: boolean | number = false) {
  return run(104, [prices, signals], [fee], align) as Float64Array;
}

/**
 * Submit Vector Absolute Value
 */
export
function abs_q(real: Input) {
  return submit(0, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { abs: InputMap },
  };
}

/**
 * Submit Vector Arccosine
 */
export
function acos_q(real: Input) {
  return submit(1, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { acos: InputMap },
  };
}

/**
 * Submit Accumulation/Distribution Line
 */
export
function ad_q(high: Input, low: Input, close: Input, volume: Input) {
  return submit(2, [high, low, close, volume], []) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap, volume: InputMap },
    outputs: { ad: InputMap },
  };
}

/**
 * Submit Vector Addition
 */
export
function add_q(real1: Input, real2: Input) {
  return submit(3, [real1, real2], []) as {
    id: number,
    indic_index: number,
    inputs: { real1: InputMap, real2: InputMap },
    outputs: { add: InputMap },
  };
}

/**
 * Submit Accumulation/Distribution Oscillator
 */
export
function adosc_q(high: Input, low: Input, close: Input, volume: Input, options: { short_period: number, long_period: number }) {
  return submit(4, [high, low, close, volume], [options.short_period, options.long_period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap, volume: InputMap },
    outputs: { adosc: InputMap },
  };
}

/**
 * Submit Average Directional Movement Index
 */
export
function adx_q(high: Input, low: Input, period: number) {
  return submit(5, [high, low], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap },
    outputs: { adx: InputMap },
  };
}

/**
 * Submit Average Directional Movement Rating
 */
export
function adxr_q(high: Input, low: Input, period: number) {
  return submit(6, [high, low], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap },
    outputs: { adxr: InputMap },
  };
}

/**
 * Submit Awesome Oscillator
 */
export
function ao_q(high: Input, low: Input) {
  return submit(7, [high, low], []) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap },
    outputs: { ao: InputMap },
  };
}

/**
 * Submit Absolute Price Oscillator
 */
export
function apo_q(real: Input, options: { short_period: number, long_period: number }) {
  return submit(8, [real], [options.short_period, options.long_period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { apo: InputMap },
  };
}

/**
 * Submit Aroon
 */
export
function aroon_q(high: Input, low: Input, period: number) {
  return submit(9, [high, low], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap },
    outputs: { aroon_down: InputMap, aroon_up: InputMap },
  };
}

/**
 * Submit Aroon Oscillator
 */
export
function aroonosc_q(high: Input, low: Input, period: number) {
  return submit(10, [high, low], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap },
    outputs: { aroonosc: InputMap },
  };
}

/**
 * Submit Vector Arcsine
 */
export
function asin_q(real: Input) {
  return submit(11, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { asin: InputMap },
  };
}

/**
 * Submit Vector Arctangent
 */
export
function atan_q(real: Input) {
  return submit(12, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { atan: InputMap },
  };
}

/**
 * Submit Average True Range
 */
export
function atr_q(high: Input, low: Input, close: Input, period: number) {
  return submit(13, [high, low, close], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap },
    outputs: { atr: InputMap },
  };
}

/**
 * Submit Average Price
 */
export
function avgprice_q(open: Input, high: Input, low: Input, close: Input) {
  return submit(14, [open, high, low, close], []) as {
    id: number,
    indic_index: number,
    inputs: { open: InputMap, high: InputMap, low: InputMap, close: InputMap },
    outputs: { avgprice: InputMap },
  };
}

/**
 * Submit Bollinger Bands
 */
export
function bbands_q(real: Input, options: { period: number, stddev: number }) {
  return submit(15, [real], [options.period, options.stddev]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { bbands_lower: InputMap, bbands_middle: InputMap, bbands_upper: InputMap },
  };
}

/**
 * Submit Balance of Power
 */
export
function bop_q(open: Input, high: Input, low: Input, close: Input) {
  return submit(16, [open, high, low, close], []) as {
    id: number,
    indic_index: number,
    inputs: { open: InputMap, high: InputMap, low: InputMap, close: InputMap },
    outputs: { bop: InputMap },
  };
}

/**
 * Submit Commodity Channel Index
 */
export
function cci_q(high: Input, low: Input, close: Input, period: number) {
  return submit(17, [high, low, close], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap },
    outputs: { cci: InputMap },
  };
}

/**
 * Submit Vector Ceiling
 */
export
function ceil_q(real: Input) {
  return submit(18, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { ceil: InputMap },
  };
}

/**
 * Submit Chande Momentum Oscillator
 */
export
function cmo_q(real: Input, period: number) {
  return submit(19, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { cmo: InputMap },
  };
}

/**
 * Submit Vector Cosine
 */
export
function cos_q(real: Input) {
  return submit(20, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { cos: InputMap },
  };
}

/**
 * Submit Vector Hyperbolic Cosine
 */
export
function cosh_q(real: Input) {
  return submit(21, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { cosh: InputMap },
  };
}

/**
 * Submit Crossany
 */
export
function crossany_q(real1: Input, real2: Input) {
  return submit(22, [real1, real2], []) as {
    id: number,
    indic_index: number,
    inputs: { real1: InputMap, real2: InputMap },
    outputs: { crossany: InputMap },
  };
}

/**
 * Submit Crossover
 */
export
function crossover_q(real1: Input, real2: Input) {
  return submit(23, [real1, real2], []) as {
    id: number,
    indic_index: number,
    inputs: { real1: InputMap, real2: InputMap },
    outputs: { crossover: InputMap },
  };
}

/**
 * Submit Chaikins Volatility
 */
export
function cvi_q(high: Input, low: Input, period: number) {
  return submit(24, [high, low], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap },
    outputs: { cvi: InputMap },
  };
}

/**
 * Submit Linear Decay
 */
export
function decay_q(real: Input, period: number) {
  return submit(25, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { decay: InputMap },
  };
}

/**
 * Submit Double Exponential Moving Average
 */
export
function dema_q(real: Input, period: number) {
  return submit(26, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { dema: InputMap },
  };
}

/**
 * Submit Directional Indicator
 */
export
function di_q(high: Input, low: Input, close: Input, period: number) {
  return submit(27, [high, low, close], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap },
    outputs: { plus_di: InputMap, minus_di: InputMap },
  };
}

/**
 * Submit Vector Division
 */
export
function div_q(real1: Input, real2: Input) {
  return submit(28, [real1, real2], []) as {
    id: number,
    indic_index: number,
    inputs: { real1: InputMap, real2: InputMap },
    outputs: { div: InputMap },
  };
}

/**
 * Submit Directional Movement
 */
export
function dm_q(high: Input, low: Input, period: number) {
  return submit(29, [high, low], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap },
    outputs: { plus_dm: InputMap, minus_dm: InputMap },
  };
}

/**
 * Submit Detrended Price Oscillator
 */
export
function dpo_q(real: Input, period: number) {
  return submit(30, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { dpo: InputMap },
  };
}

/**
 * Submit Directional Movement Index
 */
export
function dx_q(high: Input, low: Input, period: number) {
  return submit(31, [high, low], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap },
    outputs: { dx: InputMap },
  };
}

/**
 * Submit Exponential Decay
 */
export
function edecay_q(real: Input, period: number) {
  return submit(32, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { edecay: InputMap },
  };
}

/**
 * Submit Exponential Moving Average
 */
export
function ema_q(real: Input, period: number) {
  return submit(33, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { ema: InputMap },
  };
}

/**
 * Submit Ease of Movement
 */
export
function emv_q(high: Input, low: Input, volume: Input) {
  return submit(34, [high, low, volume], []) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, volume: InputMap },
    outputs: { emv: InputMap },
  };
}

/**
 * Submit Vector Exponential
 */
export
function exp_q(real: Input) {
  return submit(35, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { exp: InputMap },
  };
}

/**
 * Submit Fisher Transform
 */
export
function fisher_q(high: Input, low: Input, period: number) {
  return submit(36, [high, low], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap },
    outputs: { fisher: InputMap, fisher_signal: InputMap },
  };
}

/**
 * Submit Vector Floor
 */
export
function floor_q(real: Input) {
  return submit(37, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { floor: InputMap },
  };
}

/**
 * Submit Forecast Oscillator
 */
export
function fosc_q(real: Input, period: number) {
  return submit(38, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { fosc: InputMap },
  };
}

/**
 * Submit Hull Moving Average
 */
export
function hma_q(real: Input, period: number) {
  return submit(39, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { hma: InputMap },
  };
}

/**
 * Submit Kaufman Adaptive Moving Average
 */
export
function kama_q(real: Input, period: number) {
  return submit(40, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { kama: InputMap },
  };
}

/**
 * Submit Klinger Volume Oscillator
 */
export
function kvo_q(high: Input, low: Input, close: Input, volume: Input, options: { short_period: number, long_period: number }) {
  return submit(41, [high, low, close, volume], [options.short_period, options.long_period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap, volume: InputMap },
    outputs: { kvo: InputMap },
  };
}

/**
 * Submit Lag
 */
export
function lag_q(real: Input, period: number) {
  return submit(42, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { lag: InputMap },
  };
}

/**
 * Submit Linear Regression
 */
export
function linreg_q(real: Input, period: number) {
  return submit(43, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { linreg: InputMap },
  };
}

/**
 * Submit Linear Regression Intercept
 */
export
function linregintercept_q(real: Input, period: number) {
  return submit(44, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { linregintercept: InputMap },
  };
}

/**
 * Submit Linear Regression Slope
 */
export
function linregslope_q(real: Input, period: number) {
  return submit(45, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { linregslope: InputMap },
  };
}

/**
 * Submit Vector Natural Log
 */
export
function ln_q(real: Input) {
  return submit(46, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { ln: InputMap },
  };
}

/**
 * Submit Vector Base-10 Log
 */
export
function log10_q(real: Input) {
  return submit(47, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { log10: InputMap },
  };
}

/**
 * Submit Moving Average Convergence/Divergence
 */
export
function macd_q(real: Input, options: { short_period: number, long_period: number, signal_period: number }) {
  return submit(48, [real], [options.short_period, options.long_period, options.signal_period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { macd: InputMap, macd_signal: InputMap, macd_histogram: InputMap },
  };
}

/**
 * Submit Market Facilitation Index
 */
export
function marketfi_q(high: Input, low: Input, volume: Input) {
  return submit(49, [high, low, volume], []) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, volume: InputMap },
    outputs: { marketfi: InputMap },
  };
}

/**
 * Submit Mass Index
 */
export
function mass_q(high: Input, low: Input, period: number) {
  return submit(50, [high, low], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap },
    outputs: { mass: InputMap },
  };
}

/**
 * Submit Maximum In Period
 */
export
function max_q(real: Input, period: number) {
  return submit(51, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { max: InputMap },
  };
}

/**
 * Submit Mean Deviation Over Period
 */
export
function md_q(real: Input, period: number) {
  return submit(52, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { md: InputMap },
  };
}

/**
 * Submit Median Price
 */
export
function medprice_q(high: Input, low: Input) {
  return submit(53, [high, low], []) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap },
    outputs: { medprice: InputMap },
  };
}

/**
 * Submit Money Flow Index
 */
export
function mfi_q(high: Input, low: Input, close: Input, volume: Input, period: number) {
  return submit(54, [high, low, close, volume], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap, volume: InputMap },
    outputs: { mfi: InputMap },
  };
}

/**
 * Submit Minimum In Period
 */
export
function min_q(real: Input, period: number) {
  return submit(55, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { min: InputMap },
  };
}

/**
 * Submit Momentum
 */
export
function mom_q(real: Input, period: number) {
  return submit(56, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { mom: InputMap },
  };
}

/**
 * Submit Mesa Sine Wave
 */
export
function msw_q(real: Input, period: number) {
  return submit(57, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { msw_sine: InputMap, msw_lead: InputMap },
  };
}

/**
 * Submit Vector Multiplication
 */
export
function mul_q(real1: Input, real2: Input) {
  return submit(58, [real1, real2], []) as {
    id: number,
    indic_index: number,
    inputs: { real1: InputMap, real2: InputMap },
    outputs: { mul: InputMap },
  };
}

/**
 * Submit Normalized Average True Range
 */
export
function natr_q(high: Input, low: Input, close: Input, period: number) {
  return submit(59, [high, low, close], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap },
    outputs: { natr: InputMap },
  };
}

/**
 * Submit Negative Volume Index
 */
export
function nvi_q(close: Input, volume: Input) {
  return submit(60, [close, volume], []) as {
    id: number,
    indic_index: number,
    inputs: { close: InputMap, volume: InputMap },
    outputs: { nvi: InputMap },
  };
}

/**
 * Submit On Balance Volume
 */
export
function obv_q(close: Input, volume: Input) {
  return submit(61, [close, volume], []) as {
    id: number,
    indic_index: number,
    inputs: { close: InputMap, volume: InputMap },
    outputs: { obv: InputMap },
  };
}

/**
 * Submit Percentage Price Oscillator
 */
export
function ppo_q(real: Input, options: { short_period: number, long_period: number }) {
  return submit(62, [real], [options.short_period, options.long_period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { ppo: InputMap },
  };
}

/**
 * Submit Parabolic SAR
 */
export
function psar_q(high: Input, low: Input, options: { acceleration_factor_step: number, acceleration_factor_maximum: number }) {
  return submit(63, [high, low], [options.acceleration_factor_step, options.acceleration_factor_maximum]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap },
    outputs: { psar: InputMap },
  };
}

/**
 * Submit Positive Volume Index
 */
export
function pvi_q(close: Input, volume: Input) {
  return submit(64, [close, volume], []) as {
    id: number,
    indic_index: number,
    inputs: { close: InputMap, volume: InputMap },
    outputs: { pvi: InputMap },
  };
}

/**
 * Submit Qstick
 */
export
function qstick_q(open: Input, close: Input, period: number) {
  return submit(65, [open, close], [period]) as {
    id: number,
    indic_index: number,
    inputs: { open: InputMap, close: InputMap },
    outputs: { qstick: InputMap },
  };
}

/**
 * Submit Rate of Change
 */
export
function roc_q(real: Input, period: number) {
  return submit(66, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { roc: InputMap },
  };
}

/**
 * Submit Rate of Change Ratio
 */
export
function rocr_q(real: Input, period: number) {
  return submit(67, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { rocr: InputMap },
  };
}

/**
 * Submit Vector Round
 */
export
function round_q(real: Input) {
  return submit(68, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { round: InputMap },
  };
}

/**
 * Submit Relative Strength Index
 */
export
function rsi_q(real: Input, period: number) {
  return submit(69, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { rsi: InputMap },
  };
}

/**
 * Submit Vector Sine
 */
export
function sin_q(real: Input) {
  return submit(70, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { sin: InputMap },
  };
}

/**
 * Submit Vector Hyperbolic Sine
 */
export
function sinh_q(real: Input) {
  return submit(71, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { sinh: InputMap },
  };
}

/**
 * Submit Simple Moving Average
 */
export
function sma_q(real: Input, period: number) {
  return submit(72, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { sma: InputMap },
  };
}

/**
 * Submit Vector Square Root
 */
export
function sqrt_q(real: Input) {
  return submit(73, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { sqrt: InputMap },
  };
}

/**
 * Submit Standard Deviation Over Period
 */
export
function stddev_q(real: Input, period: number) {
  return submit(74, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { stddev: InputMap },
  };
}

/**
 * Submit Standard Error Over Period
 */
export
function stderr_q(real: Input, period: number) {
  return submit(75, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { stderr: InputMap },
  };
}

/**
 * Submit Stochastic Oscillator
 */
export
function stoch_q(high: Input, low: Input, close: Input, options: { k_period: number, k_slowing_period: number, d_period: number }) {
  return submit(76, [high, low, close], [options.k_period, options.k_slowing_period, options.d_period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap },
    outputs: { stoch_k: InputMap, stoch_d: InputMap },
  };
}

/**
 * Submit Stochastic RSI
 */
export
function stochrsi_q(real: Input, period: number) {
  return submit(77, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { stochrsi: InputMap },
  };
}

/**
 * Submit Vector Subtraction
 */
export
function sub_q(real1: Input, real2: Input) {
  return submit(78, [real1, real2], []) as {
    id: number,
    indic_index: number,
    inputs: { real1: InputMap, real2: InputMap },
    outputs: { sub: InputMap },
  };
}

/**
 * Submit Sum Over Period
 */
export
function sum_q(real: Input, period: number) {
  return submit(79, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { sum: InputMap },
  };
}

/**
 * Submit Vector Tangent
 */
export
function tan_q(real: Input) {
  return submit(80, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { tan: InputMap },
  };
}

/**
 * Submit Vector Hyperbolic Tangent
 */
export
function tanh_q(real: Input) {
  return submit(81, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { tanh: InputMap },
  };
}

/**
 * Submit Triple Exponential Moving Average
 */
export
function tema_q(real: Input, period: number) {
  return submit(82, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { tema: InputMap },
  };
}

/**
 * Submit Vector Degree Conversion
 */
export
function todeg_q(real: Input) {
  return submit(83, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { degrees: InputMap },
  };
}

/**
 * Submit Vector Radian Conversion
 */
export
function torad_q(real: Input) {
  return submit(84, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { radians: InputMap },
  };
}

/**
 * Submit True Range
 */
export
function tr_q(high: Input, low: Input, close: Input) {
  return submit(85, [high, low, close], []) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap },
    outputs: { tr: InputMap },
  };
}

/**
 * Submit Triangular Moving Average
 */
export
function trima_q(real: Input, period: number) {
  return submit(86, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { trima: InputMap },
  };
}

/**
 * Submit Trix
 */
export
function trix_q(real: Input, period: number) {
  return submit(87, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { trix: InputMap },
  };
}

/**
 * Submit Vector Truncate
 */
export
function trunc_q(real: Input) {
  return submit(88, [real], []) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { trunc: InputMap },
  };
}

/**
 * Submit Time Series Forecast
 */
export
function tsf_q(real: Input, period: number) {
  return submit(89, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { tsf: InputMap },
  };
}

/**
 * Submit Typical Price
 */
export
function typprice_q(high: Input, low: Input, close: Input) {
  return submit(90, [high, low, close], []) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap },
    outputs: { typprice: InputMap },
  };
}

/**
 * Submit Ultimate Oscillator
 */
export
function ultosc_q(high: Input, low: Input, close: Input, options: { short_period: number, medium_period: number, long_period: number }) {
  return submit(91, [high, low, close], [options.short_period, options.medium_period, options.long_period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap },
    outputs: { ultosc: InputMap },
  };
}

/**
 * Submit Variance Over Period
 */
export
function _var_q(real: Input, period: number) {
  return submit(92, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { var: InputMap },
  };
}

/**
 * Submit Vertical Horizontal Filter
 */
export
function vhf_q(real: Input, period: number) {
  return submit(93, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { vhf: InputMap },
  };
}

/**
 * Submit Variable Index Dynamic Average
 */
export
function vidya_q(real: Input, options: { short_period: number, long_period: number, alpha: number }) {
  return submit(94, [real], [options.short_period, options.long_period, options.alpha]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { vidya: InputMap },
  };
}

/**
 * Submit Annualized Historical Volatility
 */
export
function volatility_q(real: Input, period: number) {
  return submit(95, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { volatility: InputMap },
  };
}

/**
 * Submit Volume Oscillator
 */
export
function vosc_q(volume: Input, options: { short_period: number, long_period: number }) {
  return submit(96, [volume], [options.short_period, options.long_period]) as {
    id: number,
    indic_index: number,
    inputs: { volume: InputMap },
    outputs: { vosc: InputMap },
  };
}

/**
 * Submit Volume Weighted Moving Average
 */
export
function vwma_q(close: Input, volume: Input, period: number) {
  return submit(97, [close, volume], [period]) as {
    id: number,
    indic_index: number,
    inputs: { close: InputMap, volume: InputMap },
    outputs: { vwma: InputMap },
  };
}

/**
 * Submit Williams Accumulation/Distribution
 */
export
function wad_q(high: Input, low: Input, close: Input) {
  return submit(98, [high, low, close], []) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap },
    outputs: { wad: InputMap },
  };
}

/**
 * Submit Weighted Close Price
 */
export
function wcprice_q(high: Input, low: Input, close: Input) {
  return submit(99, [high, low, close], []) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap },
    outputs: { wcprice: InputMap },
  };
}

/**
 * Submit Wilders Smoothing
 */
export
function wilders_q(real: Input, period: number) {
  return submit(100, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { wilders: InputMap },
  };
}

/**
 * Submit Williams %R
 */
export
function willr_q(high: Input, low: Input, close: Input, period: number) {
  return submit(101, [high, low, close], [period]) as {
    id: number,
    indic_index: number,
    inputs: { high: InputMap, low: InputMap, close: InputMap },
    outputs: { willr: InputMap },
  };
}

/**
 * Submit Weighted Moving Average
 */
export
function wma_q(real: Input, period: number) {
  return submit(102, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { wma: InputMap },
  };
}

/**
 * Submit Zero-Lag Exponential Moving Average
 */
export
function zlema_q(real: Input, period: number) {
  return submit(103, [real], [period]) as {
    id: number,
    indic_index: number,
    inputs: { real: InputMap },
    outputs: { zlema: InputMap },
  };
}

/**
 * Submit Cross Signals ROI
 */
export
function crossroi_q(prices: Input, signals: Input, fee: number) {
  return submit(104, [prices, signals], [fee]) as {
    id: number,
    indic_index: number,
    inputs: { prices: InputMap, signals: InputMap },
    outputs: { roi: InputMap },
  };
}

/**
 * Get Vector Absolute Value Start Index
 */
export
function abs_start() {
  return start(0, []);
}

/**
 * Get Vector Arccosine Start Index
 */
export
function acos_start() {
  return start(1, []);
}

/**
 * Get Accumulation/Distribution Line Start Index
 */
export
function ad_start() {
  return start(2, []);
}

/**
 * Get Vector Addition Start Index
 */
export
function add_start() {
  return start(3, []);
}

/**
 * Get Accumulation/Distribution Oscillator Start Index
 */
export
function adosc_start(options: { short_period: number, long_period: number }) {
  return start(4, [options.short_period, options.long_period]);
}

/**
 * Get Average Directional Movement Index Start Index
 */
export
function adx_start(period: number) {
  return start(5, [period]);
}

/**
 * Get Average Directional Movement Rating Start Index
 */
export
function adxr_start(period: number) {
  return start(6, [period]);
}

/**
 * Get Awesome Oscillator Start Index
 */
export
function ao_start() {
  return start(7, []);
}

/**
 * Get Absolute Price Oscillator Start Index
 */
export
function apo_start(options: { short_period: number, long_period: number }) {
  return start(8, [options.short_period, options.long_period]);
}

/**
 * Get Aroon Start Index
 */
export
function aroon_start(period: number) {
  return start(9, [period]);
}

/**
 * Get Aroon Oscillator Start Index
 */
export
function aroonosc_start(period: number) {
  return start(10, [period]);
}

/**
 * Get Vector Arcsine Start Index
 */
export
function asin_start() {
  return start(11, []);
}

/**
 * Get Vector Arctangent Start Index
 */
export
function atan_start() {
  return start(12, []);
}

/**
 * Get Average True Range Start Index
 */
export
function atr_start(period: number) {
  return start(13, [period]);
}

/**
 * Get Average Price Start Index
 */
export
function avgprice_start() {
  return start(14, []);
}

/**
 * Get Bollinger Bands Start Index
 */
export
function bbands_start(options: { period: number, stddev: number }) {
  return start(15, [options.period, options.stddev]);
}

/**
 * Get Balance of Power Start Index
 */
export
function bop_start() {
  return start(16, []);
}

/**
 * Get Commodity Channel Index Start Index
 */
export
function cci_start(period: number) {
  return start(17, [period]);
}

/**
 * Get Vector Ceiling Start Index
 */
export
function ceil_start() {
  return start(18, []);
}

/**
 * Get Chande Momentum Oscillator Start Index
 */
export
function cmo_start(period: number) {
  return start(19, [period]);
}

/**
 * Get Vector Cosine Start Index
 */
export
function cos_start() {
  return start(20, []);
}

/**
 * Get Vector Hyperbolic Cosine Start Index
 */
export
function cosh_start() {
  return start(21, []);
}

/**
 * Get Crossany Start Index
 */
export
function crossany_start() {
  return start(22, []);
}

/**
 * Get Crossover Start Index
 */
export
function crossover_start() {
  return start(23, []);
}

/**
 * Get Chaikins Volatility Start Index
 */
export
function cvi_start(period: number) {
  return start(24, [period]);
}

/**
 * Get Linear Decay Start Index
 */
export
function decay_start(period: number) {
  return start(25, [period]);
}

/**
 * Get Double Exponential Moving Average Start Index
 */
export
function dema_start(period: number) {
  return start(26, [period]);
}

/**
 * Get Directional Indicator Start Index
 */
export
function di_start(period: number) {
  return start(27, [period]);
}

/**
 * Get Vector Division Start Index
 */
export
function div_start() {
  return start(28, []);
}

/**
 * Get Directional Movement Start Index
 */
export
function dm_start(period: number) {
  return start(29, [period]);
}

/**
 * Get Detrended Price Oscillator Start Index
 */
export
function dpo_start(period: number) {
  return start(30, [period]);
}

/**
 * Get Directional Movement Index Start Index
 */
export
function dx_start(period: number) {
  return start(31, [period]);
}

/**
 * Get Exponential Decay Start Index
 */
export
function edecay_start(period: number) {
  return start(32, [period]);
}

/**
 * Get Exponential Moving Average Start Index
 */
export
function ema_start(period: number) {
  return start(33, [period]);
}

/**
 * Get Ease of Movement Start Index
 */
export
function emv_start() {
  return start(34, []);
}

/**
 * Get Vector Exponential Start Index
 */
export
function exp_start() {
  return start(35, []);
}

/**
 * Get Fisher Transform Start Index
 */
export
function fisher_start(period: number) {
  return start(36, [period]);
}

/**
 * Get Vector Floor Start Index
 */
export
function floor_start() {
  return start(37, []);
}

/**
 * Get Forecast Oscillator Start Index
 */
export
function fosc_start(period: number) {
  return start(38, [period]);
}

/**
 * Get Hull Moving Average Start Index
 */
export
function hma_start(period: number) {
  return start(39, [period]);
}

/**
 * Get Kaufman Adaptive Moving Average Start Index
 */
export
function kama_start(period: number) {
  return start(40, [period]);
}

/**
 * Get Klinger Volume Oscillator Start Index
 */
export
function kvo_start(options: { short_period: number, long_period: number }) {
  return start(41, [options.short_period, options.long_period]);
}

/**
 * Get Lag Start Index
 */
export
function lag_start(period: number) {
  return start(42, [period]);
}

/**
 * Get Linear Regression Start Index
 */
export
function linreg_start(period: number) {
  return start(43, [period]);
}

/**
 * Get Linear Regression Intercept Start Index
 */
export
function linregintercept_start(period: number) {
  return start(44, [period]);
}

/**
 * Get Linear Regression Slope Start Index
 */
export
function linregslope_start(period: number) {
  return start(45, [period]);
}

/**
 * Get Vector Natural Log Start Index
 */
export
function ln_start() {
  return start(46, []);
}

/**
 * Get Vector Base-10 Log Start Index
 */
export
function log10_start() {
  return start(47, []);
}

/**
 * Get Moving Average Convergence/Divergence Start Index
 */
export
function macd_start(options: { short_period: number, long_period: number, signal_period: number }) {
  return start(48, [options.short_period, options.long_period, options.signal_period]);
}

/**
 * Get Market Facilitation Index Start Index
 */
export
function marketfi_start() {
  return start(49, []);
}

/**
 * Get Mass Index Start Index
 */
export
function mass_start(period: number) {
  return start(50, [period]);
}

/**
 * Get Maximum In Period Start Index
 */
export
function max_start(period: number) {
  return start(51, [period]);
}

/**
 * Get Mean Deviation Over Period Start Index
 */
export
function md_start(period: number) {
  return start(52, [period]);
}

/**
 * Get Median Price Start Index
 */
export
function medprice_start() {
  return start(53, []);
}

/**
 * Get Money Flow Index Start Index
 */
export
function mfi_start(period: number) {
  return start(54, [period]);
}

/**
 * Get Minimum In Period Start Index
 */
export
function min_start(period: number) {
  return start(55, [period]);
}

/**
 * Get Momentum Start Index
 */
export
function mom_start(period: number) {
  return start(56, [period]);
}

/**
 * Get Mesa Sine Wave Start Index
 */
export
function msw_start(period: number) {
  return start(57, [period]);
}

/**
 * Get Vector Multiplication Start Index
 */
export
function mul_start() {
  return start(58, []);
}

/**
 * Get Normalized Average True Range Start Index
 */
export
function natr_start(period: number) {
  return start(59, [period]);
}

/**
 * Get Negative Volume Index Start Index
 */
export
function nvi_start() {
  return start(60, []);
}

/**
 * Get On Balance Volume Start Index
 */
export
function obv_start() {
  return start(61, []);
}

/**
 * Get Percentage Price Oscillator Start Index
 */
export
function ppo_start(options: { short_period: number, long_period: number }) {
  return start(62, [options.short_period, options.long_period]);
}

/**
 * Get Parabolic SAR Start Index
 */
export
function psar_start(options: { acceleration_factor_step: number, acceleration_factor_maximum: number }) {
  return start(63, [options.acceleration_factor_step, options.acceleration_factor_maximum]);
}

/**
 * Get Positive Volume Index Start Index
 */
export
function pvi_start() {
  return start(64, []);
}

/**
 * Get Qstick Start Index
 */
export
function qstick_start(period: number) {
  return start(65, [period]);
}

/**
 * Get Rate of Change Start Index
 */
export
function roc_start(period: number) {
  return start(66, [period]);
}

/**
 * Get Rate of Change Ratio Start Index
 */
export
function rocr_start(period: number) {
  return start(67, [period]);
}

/**
 * Get Vector Round Start Index
 */
export
function round_start() {
  return start(68, []);
}

/**
 * Get Relative Strength Index Start Index
 */
export
function rsi_start(period: number) {
  return start(69, [period]);
}

/**
 * Get Vector Sine Start Index
 */
export
function sin_start() {
  return start(70, []);
}

/**
 * Get Vector Hyperbolic Sine Start Index
 */
export
function sinh_start() {
  return start(71, []);
}

/**
 * Get Simple Moving Average Start Index
 */
export
function sma_start(period: number) {
  return start(72, [period]);
}

/**
 * Get Vector Square Root Start Index
 */
export
function sqrt_start() {
  return start(73, []);
}

/**
 * Get Standard Deviation Over Period Start Index
 */
export
function stddev_start(period: number) {
  return start(74, [period]);
}

/**
 * Get Standard Error Over Period Start Index
 */
export
function stderr_start(period: number) {
  return start(75, [period]);
}

/**
 * Get Stochastic Oscillator Start Index
 */
export
function stoch_start(options: { k_period: number, k_slowing_period: number, d_period: number }) {
  return start(76, [options.k_period, options.k_slowing_period, options.d_period]);
}

/**
 * Get Stochastic RSI Start Index
 */
export
function stochrsi_start(period: number) {
  return start(77, [period]);
}

/**
 * Get Vector Subtraction Start Index
 */
export
function sub_start() {
  return start(78, []);
}

/**
 * Get Sum Over Period Start Index
 */
export
function sum_start(period: number) {
  return start(79, [period]);
}

/**
 * Get Vector Tangent Start Index
 */
export
function tan_start() {
  return start(80, []);
}

/**
 * Get Vector Hyperbolic Tangent Start Index
 */
export
function tanh_start() {
  return start(81, []);
}

/**
 * Get Triple Exponential Moving Average Start Index
 */
export
function tema_start(period: number) {
  return start(82, [period]);
}

/**
 * Get Vector Degree Conversion Start Index
 */
export
function todeg_start() {
  return start(83, []);
}

/**
 * Get Vector Radian Conversion Start Index
 */
export
function torad_start() {
  return start(84, []);
}

/**
 * Get True Range Start Index
 */
export
function tr_start() {
  return start(85, []);
}

/**
 * Get Triangular Moving Average Start Index
 */
export
function trima_start(period: number) {
  return start(86, [period]);
}

/**
 * Get Trix Start Index
 */
export
function trix_start(period: number) {
  return start(87, [period]);
}

/**
 * Get Vector Truncate Start Index
 */
export
function trunc_start() {
  return start(88, []);
}

/**
 * Get Time Series Forecast Start Index
 */
export
function tsf_start(period: number) {
  return start(89, [period]);
}

/**
 * Get Typical Price Start Index
 */
export
function typprice_start() {
  return start(90, []);
}

/**
 * Get Ultimate Oscillator Start Index
 */
export
function ultosc_start(options: { short_period: number, medium_period: number, long_period: number }) {
  return start(91, [options.short_period, options.medium_period, options.long_period]);
}

/**
 * Get Variance Over Period Start Index
 */
export
function _var_start(period: number) {
  return start(92, [period]);
}

/**
 * Get Vertical Horizontal Filter Start Index
 */
export
function vhf_start(period: number) {
  return start(93, [period]);
}

/**
 * Get Variable Index Dynamic Average Start Index
 */
export
function vidya_start(options: { short_period: number, long_period: number, alpha: number }) {
  return start(94, [options.short_period, options.long_period, options.alpha]);
}

/**
 * Get Annualized Historical Volatility Start Index
 */
export
function volatility_start(period: number) {
  return start(95, [period]);
}

/**
 * Get Volume Oscillator Start Index
 */
export
function vosc_start(options: { short_period: number, long_period: number }) {
  return start(96, [options.short_period, options.long_period]);
}

/**
 * Get Volume Weighted Moving Average Start Index
 */
export
function vwma_start(period: number) {
  return start(97, [period]);
}

/**
 * Get Williams Accumulation/Distribution Start Index
 */
export
function wad_start() {
  return start(98, []);
}

/**
 * Get Weighted Close Price Start Index
 */
export
function wcprice_start() {
  return start(99, []);
}

/**
 * Get Wilders Smoothing Start Index
 */
export
function wilders_start(period: number) {
  return start(100, [period]);
}

/**
 * Get Williams %R Start Index
 */
export
function willr_start(period: number) {
  return start(101, [period]);
}

/**
 * Get Weighted Moving Average Start Index
 */
export
function wma_start(period: number) {
  return start(102, [period]);
}

/**
 * Get Zero-Lag Exponential Moving Average Start Index
 */
export
function zlema_start(period: number) {
  return start(103, [period]);
}

/**
 * Get Cross Signals ROI Start Index
 */
export
function crossroi_start(fee: number) {
  return start(104, [fee]);
}

export * from './meta';
