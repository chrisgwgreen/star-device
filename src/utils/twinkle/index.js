const { shadeColor } = require('../tween')

let twinkleTracker = []

Number.prototype.between = function (a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b])
  return this > min && this < max
}

const twinkleLoop = (pixels, twinkles, currentTime) => {
  for (let twinkleIndex = 0; twinkleIndex < twinkles.length; twinkleIndex++) {
    const twinkle = twinkles[twinkleIndex]
    const twinkleTrack = twinkleTracker[twinkleIndex]

    const direction = twinkle.startIndex < twinkle.endIndex ? 1 : -1

    let currentTwinkleIndex =
      (Math.abs(twinkle.endIndex - twinkle.startIndex) / twinkle.speed) *
        direction *
        (currentTime - twinkle.delay - twinkleTrack.startTime) +
      (direction ? twinkle.startIndex : twinkle.endIndex)

    currentTwinkleIndex =
      direction > 0
        ? Math.floor(currentTwinkleIndex)
        : Math.ceil(currentTwinkleIndex)

    pixels[currentTwinkleIndex] = twinkle.color

    // trailing leds...
    let nextTwinkleIndex = currentTwinkleIndex - 1 * direction
    if (
      nextTwinkleIndex >= 0 &&
      nextTwinkleIndex.between(twinkle.endIndex, twinkle.startIndex)
    ) {
      pixels[nextTwinkleIndex] = shadeColor(twinkle.color, -40)
    }

    nextTwinkleIndex = currentTwinkleIndex - 2 * direction
    if (
      nextTwinkleIndex >= 0 &&
      nextTwinkleIndex.between(twinkle.endIndex, twinkle.startIndex)
    ) {
      pixels[nextTwinkleIndex] = shadeColor(twinkle.color, -60)
    }

    // Reset twinkle...
    if (
      direction > 0
        ? currentTwinkleIndex >= twinkle.endIndex
        : currentTwinkleIndex <= twinkle.endIndex
    )
      twinkleTracker[twinkleIndex].startTime = currentTime
  }

  return pixels
}

const twinkleSetup = (twinkles, startTime) => {
  twinkleTracker = []

  for (let twinkleIndex = 0; twinkleIndex < twinkles.length; twinkleIndex++) {
    const { offset = 0 } = twinkles[twinkleIndex]

    twinkleTracker.push({
      startTime: startTime + offset
    })
  }
}

module.exports = {
  twinkleLoop,
  twinkleSetup
}
