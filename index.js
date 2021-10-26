require('dotenv').config()

const ws281x = require('rpi-ws281x')
const { ws281xConfig } = require('./config')
const { leds, twinkles } = require('./assets/twinkle')
const { animate } = require('./utils/tween')
const { onValue } = require('firebase/database')
const { starCountRef } = require('./services/firebase')

onValue(starCountRef, snapshot => {
  const fbLeds = snapshot.val()
  console.log(fbLeds)
})

ws281x.configure(ws281xConfig)

let animationTracker = []
let twinkleTracker = []

const updateAnimation = (ledIndex, currentTime) => {
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

const loop = () => {
  const pixels = new Uint32Array(ws281xConfig.leds)
  const currentTime = new Date().getTime()

  // Blink
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
    if ((isBlinkOn && isBlinking) || !isBlinking)
      color =
        animations.length === 1
          ? currentAnimation.color
          : animate(
              currentAnimation.color,
              nextAnimation.color,
              startTime,
              currentTime,
              currentAnimation.length,
              currentAnimation.ease
            )

    pixels[ledIndex] = color

    if (color == nextAnimation.color) {
      updateAnimation(ledIndex, currentTime)
    }
  }

  // Apply twinkles
  for (let twinkleIndex = 0; twinkleIndex < twinkles.length; twinkleIndex++) {
    const twinkle = twinkles[twinkleIndex]
    const x = twinkleTracker[twinkleIndex]

    const currentTwinkleIndex = Math.floor(
      ((twinkle.endIndex - twinkle.startIndex) / twinkle.speed) *
        (currentTime - x.startTime) +
        twinkle.startIndex
    )

    if (currentTwinkleIndex >= twinkle.endIndex) {
      twinkleTracker[twinkleIndex].startTime = currentTime
    }

    pixels[currentTwinkleIndex] = twinkle.color
    if (currentTwinkleIndex - 1 >= 0)
      pixels[currentTwinkleIndex - 1] = twinkle.color
    if (currentTwinkleIndex - 2 >= 0)
      pixels[currentTwinkleIndex - 2] = twinkle.color
  }

  ws281x.render(pixels)
}

const start = () => {
  const startTime = new Date().getTime()

  animationTracker = []

  for (let ledIndex = 0; ledIndex < leds.length; ledIndex++) {
    // const led = leds[ledIndex]

    // const offset = led.offset //TODO continue

    animationTracker.push({
      animationIndex: 0,
      startTime: startTime
    })
  }

  twinkleTracker = []

  for (let twinkleIndex = 0; twinkleIndex < twinkles.length; twinkleIndex++) {
    twinkleTracker.push({
      ledIndex: 0,
      startTime: startTime
    })
  }

  setInterval(loop, 30)
}

start()
