const { shadeColor } = require('../tween')

let twinkleTracker = []

const twinkleLoop = (pixels, twinkles, currentTime) => {
  for (let twinkleIndex = 0; twinkleIndex < twinkles.length; twinkleIndex++) {
    const twinkle = twinkles[twinkleIndex]
    const twinkleTrack = twinkleTracker[twinkleIndex]
    const direction = twinkle.startIndex < twinkle.endIndex ? 1 : -1

    if (currentTime - twinkleTrack.startTime < twinkle.delay) break

    const currentTwinkleIndex = Math.floor(
      (Math.abs(twinkle.endIndex - twinkle.startIndex) / twinkle.speed) *
        direction *
        (currentTime - twinkle.delay - twinkleTrack.startTime) +
        (direction ? twinkle.startIndex : twinkle.endIndex)
    )

    pixels[currentTwinkleIndex] = twinkle.color

    // trailing leds...
    if (currentTwinkleIndex - 1 * direction >= 0)
      pixels[currentTwinkleIndex - 1 * direction] = shadeColor(
        twinkle.color,
        -30
      )
    if (currentTwinkleIndex - 2 * direction >= 0)
      pixels[currentTwinkleIndex - 2 * direction] = shadeColor(
        twinkle.color,
        -50
      )

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
    twinkleTracker.push({
      startTime: startTime
    })
  }
}

module.exports = {
  twinkleLoop,
  twinkleSetup
}
