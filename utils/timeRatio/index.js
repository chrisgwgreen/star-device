const { easing } = require('../easing')

const timeRatio = (startTime, currentTime, animateLength, easeFunc) => {
  const amount = easing[easeFunc](
    (1 / animateLength) * (currentTime - startTime)
  )

  return amount > 1 ? 1 : amount // Normalize fade amount
}

module.exports = {
  timeRatio
}
