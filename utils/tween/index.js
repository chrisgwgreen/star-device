const { easing } = require('../easing')

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

const shadeColor = (color, percent) => {
  var R = parseInt(color.substring(1, 3), 16)
  var G = parseInt(color.substring(3, 5), 16)
  var B = parseInt(color.substring(5, 7), 16)

  R = parseInt((R * (100 + percent)) / 100)
  G = parseInt((G * (100 + percent)) / 100)
  B = parseInt((B * (100 + percent)) / 100)

  R = R < 255 ? R : 255
  G = G < 255 ? G : 255
  B = B < 255 ? B : 255

  var RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16)
  var GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16)
  var BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16)

  return '#' + RR + GG + BB
}

module.exports = {
  animate,
  shadeColor
}
