const blend = (colorOne, colorTwo, amount) => {
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
  let colorR = color >> 16
  let colorG = (color >> 8) & 0xff
  let colorB = color & 0xff

  colorR = parseInt((colorR * (100 + percent)) / 100)
  colorG = parseInt((colorG * (100 + percent)) / 100)
  colorB = parseInt((colorB * (100 + percent)) / 100)

  colorR = colorR < 255 ? colorR : 255
  colorG = colorG < 255 ? colorG : 255
  colorB = colorB < 255 ? colorB : 255

  return (colorR << 16) | (colorG << 8) | (colorB | 0)
}

module.exports = {
  blend,
  shadeColor
}
