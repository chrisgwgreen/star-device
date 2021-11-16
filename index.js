require('dotenv').config()

const ws281x = require('rpi-ws281x')
const { ws281xConfig } = require('./config')
const { getAnimation } = require('./assets/rainbow')
const { twinkleLoop, twinkleSetup } = require('./utils/twinkle')
const {
  animateLoop,
  animateSetup
  // animationTracker
} = require('./utils/animate') // const { fadeLoop } = require('./utils/fade')

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

const start = () => {
  const startTime = new Date().getTime()

  const { leds: patternLeds, twinkles: patternTwinkles } = getAnimation()

  leds = animationLeds
  twinkles = patternTwinkles

  animateSetup(leds, startTime)
  twinkleSetup(twinkles, startTime)

  // Animate
  loop()
}

start()
