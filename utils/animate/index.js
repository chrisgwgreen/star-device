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

  for (let ledIndex = 0; ledIndex < leds.length; ledIndex++) {
    // const led = leds[ledIndex]

    // const offset = led.offset //TODO continue

    animationTracker.push({
      animationIndex: 0,
      startTime: startTime
    })
  }
}

module.exports = {
  animateLoop,
  animateSetup
}
