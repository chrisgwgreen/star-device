require('dotenv').config()

const ws281x = require('rpi-ws281x')
const { leds } = require('./assets/led-gen')
const { animate } = require('./utils/tween')
const { ws281xConfig } = require('./config')
const { onValue } = require('firebase/database')
const { starCountRef } = require('./services/firebase')

onValue(starCountRef, snapshot => {
  const leds = snapshot.val()
  console.log(leds)
})

ws281x.configure(ws281xConfig)

const updateAnimation = ledIndex => {
  const led = leds[ledIndex]

  const animations = led.animations
  const currentAnimationIndex = led.animationIndex
  const nextAnimationIndex =
    currentAnimationIndex + 1 < animations.length
      ? currentAnimationIndex + 1
      : 0

  led.animationIndex = nextAnimationIndex
  led.startTime = performance.now()
}

const loop = () => {
  const pixels = new Uint32Array(ws281xConfig.leds)

  for (let ledIndex = 0; ledIndex < leds.length; ledIndex++) {
    const led = leds[ledIndex]

    const animations = led.animations
    const currentAnimationIndex = led.animationIndex
    const startTime = led.startTime
    const nextAnimationIndex =
      currentAnimationIndex + 1 < animations.length
        ? currentAnimationIndex + 1
        : 0
    const currentAnimation = animations[currentAnimationIndex]
    const nextAnimation = animations[nextAnimationIndex]

    const color = animate(
      currentAnimation.color,
      nextAnimation.color,
      startTime,
      currentAnimation.length,
      currentAnimation.ease
    )

    pixels[ledIndex] = color

    if (color == nextAnimation.color) {
      updateAnimation(ledIndex)
    }
  }

  ws281x.render(pixels)
}

const start = () => {
  const startTime = performance.now()

  for (var ledIndex = 0; ledIndex < leds.length; ledIndex++) {
    const led = leds[ledIndex]

    // consider moving these out to a lightweight array or finding a better approach....
    led.animationIndex = 0
    led.startTime = startTime
  }

  // Repeat...
  setInterval(loop, 20)
}

start()
