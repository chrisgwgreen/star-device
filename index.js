require('dotenv').config()

const ws281x = require('rpi-ws281x')
const { ws281xConfig } = require('./config')
const { leds } = require('./assets/led-gen')
const { animate } = require('./utils/tween')
const { onValue } = require('firebase/database')
const { starCountRef } = require('./services/firebase')
// const { performance } = require('perf_hooks')

onValue(starCountRef, snapshot => {
  const leds = snapshot.val()
  console.log(leds)
})

ws281x.configure(ws281xConfig)

let animationTracker = []

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
  const currentTime = new Date().getTime() //performance.now()

  for (let ledIndex = 0; ledIndex < leds.length; ledIndex++) {
    const led = leds[ledIndex]
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

    const color = animate(
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

  ws281x.render(pixels)
}

const start = () => {
  const startTime = new Date().getTime() //performance.now()

  animationTracker = new Array(leds.length).fill({
    animationIndex: 0,
    startTime: startTime
  })

  // Repeat...
  setInterval(loop, 30)
}

start()
