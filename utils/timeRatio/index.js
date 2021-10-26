const { easing } = require('../easing')

const timeRatio = (startTime, currentTime, animationLength, easeFunc) => {
  const amount = easing[easeFunc](
    (1 / animationLength) * (currentTime - startTime)
  )

  return amount >= 1 ? 1 : amount <= 0 ? 0 : amount
}

module.exports = {
  timeRatio
}
