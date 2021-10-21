const { easing } = require('../easing')
// const { performance } = require('perf_hooks')

const animate = (
  colorOne,
  colorTwo,
  startTime,
  currentTime,
  animateLength,
  easeFunc
) => {
  let amount = easing[easeFunc]((1 / animateLength) * (currentTime - startTime))

  amount = amount > 1 ? 1 : amount // Normalize fade amount

  const colorOneR = colorOne >> 16
  const colorOneG = (colorOne >> 8) & 0xff
  const colorOneB = colorOne & 0xff

  const colorTwoR = colorTwo >> 16
  const colorTwoG = (colorTwo >> 8) & 0xff
  const colorTwoB = colorTwo & 0xff

  const colorTweenR = colorOneR + (colorTwoR - colorOneR) * amount
  const colorTweenG = colorOneG + (colorTwoG - colorOneG) * amount
  const colorTweenB = colorOneB + (colorTwoB - colorOneB) * amount

  return (colorTweenR << 16) | (colorTweenG << 8) | (colorTweenB | 0)
}

module.exports = {
  animate
}
