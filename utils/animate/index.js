const { timeRatio } = require('../timeRatio')
const { blend } = require('../tween')

let animationTracker = []

const updateAnimation = (leds, ledIndex, currentTime) => {
  const led = leds[ledIndex]
  const currentAnimationIndex = animationTracker[ledIndex].animationIndex
  const animations = led.animations
  const nextAnimationIndex =
    currentAnimationIndex + 1 < animations.length
      ? currentAnimationIndex + 1
      : 0

  animationTracker[ledIndex] = {
    animationIndex: nextAnimationIndex,
    startTime: currentTime
  }
}

const animateLoop = (pixels, leds, currentTime) => {
  const second = currentTime % 1000

  for (let ledIndex = 0; ledIndex < leds.length; ledIndex++) {
    const led = leds[ledIndex]

    // Animation position
    const currentAnimationTracker = animationTracker[ledIndex]
    const currentAnimationIndex = currentAnimationTracker.animationIndex
    const startTime = currentAnimationTracker.startTime

    const animations = led.animations

    const nextAnimationIndex =
      currentAnimationIndex + 1 < animations.length
        ? currentAnimationIndex + 1
        : 0
    const currentAnimation = animations[currentAnimationIndex]
    const nextAnimation = animations[nextAnimationIndex]

    // Blinking
    const isBlinking = led.isBlinking
    const blinkSpeed = isBlinking && 1000 / led.blinkRate
    const isBlinkOn = isBlinking && Math.floor(second / blinkSpeed) % 2

    let color = 0x000000

    // Update LEDS
    if ((isBlinkOn && isBlinking) || !isBlinking) {
      if (animations.length === 1) {
        color = currentAnimation.color
      } else {
        const amount = timeRatio(
          startTime,
          currentTime,
          currentAnimation.length,
          currentAnimation.ease
        )

        color = blend(currentAnimation.color, nextAnimation.color, amount)
      }
    }
    pixels[ledIndex] = color

    if (color == nextAnimation.color) {
      updateAnimation(leds, ledIndex, currentTime)
    }
  }

  return pixels
}

const animateSetup = (leds, startTime) => {
  animationTracker = []

  // Calculate Offsets
  for (let ledIndex = 0; ledIndex < leds.length; ledIndex++) {
    const led = leds[ledIndex]
    const animations = led.animations

    let offset = led.offset
    let animationIndex = 0

    while (offset >= 0 && animationIndex < animations.length) {
      if (offset - animations[animationIndex].length < 0) {
        animationTracker.push({
          animationIndex,
          startTime: startTime + offset
        })
        break
      } else {
        offset = offset - animations[animationIndex].length
      }

      animationIndex++
    }
  }
}

module.exports = {
  animateLoop,
  animateSetup,
  animationTracker
}
