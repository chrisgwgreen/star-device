require('dotenv').config()

const ws281x = require('rpi-ws281x')
const { ws281xConfig } = require('./config')
// const { leds, twinkles } = require('./assets/rainbow')
const { firebaseSetup } = require('./src/services/firebase')
const { twinkleLoop, twinkleSetup } = require('./src/utils/twinkle')
const {
  animateLoop,
  animateSetup
  // animationTracker
} = require('./src/utils/animate')
// const { fadeLoop } = require('./utils/fade')

ws281x.configure(ws281xConfig)

let leds = []
let twinkles = []

const loop = () => {
  let pixels = new Uint32Array(ws281xConfig.leds)
  const currentTime = new Date().getTime()

  // pixels = fadeLoop()

  // fadeLoop(pixels, leds, animationTracker, currentTime)

  pixels = animateLoop(pixels, leds, currentTime)
  pixels = twinkleLoop(pixels, twinkles, currentTime)

  ws281x.render(pixels)

  setTimeout(loop, 30)
}

const setup = (nextLeds, nextTwinkles) => {
  const startTime = new Date().getTime()

  leds = nextLeds
  twinkles = nextTwinkles

  animateSetup(leds, startTime)
  twinkleSetup(twinkles, startTime)

  // fadeLoop(pixels, leds, animationTracker, currentTime)

  // Animate
  loop()
}

// setup()

firebaseSetup(setup)
