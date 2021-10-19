require('dotenv').config()

const ws281x = require('rpi-ws281x')
const leds = require('./led-gen')

const { initializeApp } = require('firebase/app')
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite')
const { getDatabase, ref, onValue } = require('firebase/database')
const { getAuth } = require('firebase/auth')

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY || '',
  authDomain: process.env.REACT_APP_AUTHDOMAIN || '',
  databaseURL: process.env.REACT_APP_DB || '',
  projectId: process.env.REACT_APP_PID || '',
  storageBucket: process.env.REACT_APP_SB || '',
  messagingSenderId: process.env.REACT_APP_SID || '',
  appId: process.env.REACT_APP_APPID || ''
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const db2 = getDatabase()
const auth2 = getAuth()

const starCountRef = ref(db2, 'defaultStar')

const convertor = color => {
  return color.replace('#', '0x')
}

onValue(starCountRef, snapshot => {
  const leds = snapshot.val()

  console.log(leds)

  // const pixels = new Uint32Array(config.leds)

  // for (const led in leds) {
  //   const blub = leds[led]

  //   pixels[led] = convertor(blub.color)
  // }

  // ws281x && ws281x.render(pixels)
})

/*
 * Easing
 */
const easing = {
  linear: t => t,
  easeOutBounce: t => {
    const n1 = 7.5625
    const d1 = 2.75

    if (t < 1 / d1) {
      return n1 * t * t
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375
    }
  },
  easeInOutExpo: t =>
    t === 0
      ? 0
      : t === 1
      ? 1
      : t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2
}

/*
 * Animating
 */

const config = {
  leds: 150,
  dma: 10,
  brightness: 200,
  gpio: 18,
  stripType: 'rgb'
}

ws281x.configure(config)

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

const animate = (color1, color2, startTime, animateLength, easeFunc) => {
  let amount = easing[easeFunc](
    (1 / animateLength) * (performance.now() - startTime)
  )

  // Normalize color
  amount = amount > 1 ? 1 : amount

  const ar = color1 >> 16
  const ag = (color1 >> 8) & 0xff
  const ab = color1 & 0xff

  const br = color2 >> 16
  const bg = (color2 >> 8) & 0xff
  const bb = color2 & 0xff

  const rr = ar + (br - ar) * amount
  const rg = ag + (bg - ag) * amount
  const rb = ab + (bb - ab) * amount

  return (rr << 16) | (rg << 8) | (rb | 0)
}

const loop = () => {
  const pixels = new Uint32Array(config.leds)

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
