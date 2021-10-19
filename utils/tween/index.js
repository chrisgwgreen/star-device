const { easing } = require('../easing')

const animate = (color1, color2, startTime, animateLength, easeFunc) => {
  let amount = easing[easeFunc](
    (1 / animateLength) * (performance.now() - startTime)
  )

  // Normalize color
  amount = amount > 1 ? 1 : amount

  const ar = color1 >> 16
  const ag = (color1 >> 8) & 0xff
  const ab = color1 & 0xff

  const br = color2 >> 16
  const bg = (color2 >> 8) & 0xff
  const bb = color2 & 0xff

  const rr = ar + (br - ar) * amount
  const rg = ag + (bg - ag) * amount
  const rb = ab + (bb - ab) * amount

  return (rr << 16) | (rg << 8) | (rb | 0)
}

module.exports = {
  animate
}
