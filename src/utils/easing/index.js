const linear = t => t
const easeInQuad = t => Math.pow(t, 2)
const easeOutQuad = t => 1 - easeInQuad(1 - t)
const easeInOutQuad = t =>
  t < 0.5 ? easeInQuad(t * 2) / 2 : easeOutQuad(t * 2 - 1) / 2 + 0.5
const easeInCubic = t => Math.pow(t, 3)
const easeOutCubic = t => 1 - easeInCubic(1 - t)
const easeInOutCubic = t =>
  t < 0.5 ? easeInCubic(t * 2) / 2 : easeOutCubic(t * 2 - 1) / 2 + 0.5
const easeInQuart = t => Math.pow(t, 4)
const easeOutQuart = t => 1 - easeInQuart(1 - t)
const easeInOutQuart = t =>
  t < 0.5 ? easeInQuart(t * 2) / 2 : easeOutQuart(t * 2 - 1) / 2 + 0.5
const easeInQuint = t => Math.pow(t, 5)
const easeOutQuint = t => 1 - easeInQuint(1 - t)
const easeInOutQuint = t =>
  t < 0.5 ? easeInQuint(t * 2) / 2 : easeOutQuint(t * 2 - 1) / 2 + 0.5
const easeInSine = t => 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2)
const easeOutSine = t => Math.sin((Math.PI / 2) * t)
const easeInOutSine = t => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2
const easeInOutCirc = t =>
  t < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2
const easeOutBounce = t => {
  const n1 = 7.5625
  const d1 = 2.75

  if (t < 1 / d1) {
    return n1 * t * t
  } else if (t < 2 / d1) {
    return n1 * (t -= 1.5 / d1) * t + 0.75
  } else if (t < 2.5 / d1) {
    return n1 * (t -= 2.25 / d1) * t + 0.9375
  } else {
    return n1 * (t -= 2.625 / d1) * t + 0.984375
  }
}
const easeInOutExpo = t =>
  t === 0
    ? 0
    : t === 1
    ? 1
    : t < 0.5
    ? Math.pow(2, 20 * t - 10) / 2
    : (2 - Math.pow(2, -20 * t + 10)) / 2

module.exports = {
  easing: {
    linear,
    easeInQuad,
    easeOutQuad,
    easeInOutQuad,
    easeInCubic,
    easeOutCubic,
    easeInOutCubic,
    easeInQuart,
    easeOutQuart,
    easeInOutQuart,
    easeInQuint,
    easeOutQuint,
    easeInOutQuint,
    easeInSine,
    easeOutSine,
    easeInOutSine,
    easeInOutCirc,
    easeOutBounce,
    easeInOutExpo
  }
}
