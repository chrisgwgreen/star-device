const ws281x = require('rpi-ws281x')
const { ws281xConfig } = require('../../constants')
const { twinkleLoop, twinkleSetup } = require('../../utils/twinkle')
const { animateLoop, animateSetup } = require('../../utils/animate')

ws281x.configure(ws281xConfig)

let leds = []
let twinkles = []
let loopInterval

const loop = () => {
  let pixels = new Uint32Array(ws281xConfig.leds)
  const currentTime = new Date().getTime()

  pixels = animateLoop(pixels, leds, currentTime)
  pixels = twinkleLoop(pixels, twinkles, currentTime)

  ws281x.render(pixels)
}

const setAnimation = getAnimation => {
  clearInterval(loopInterval)

  const startTime = new Date().getTime()
  const { leds: animationLeds, twinkles: animationTwinkles } = getAnimation()

  leds = animationLeds
  twinkles = animationTwinkles

  animateSetup(leds, startTime)
  twinkleSetup(twinkles, startTime)

  loopInterval = setInterval(loop, 30)
}

module.exports = {
  setAnimation
}
