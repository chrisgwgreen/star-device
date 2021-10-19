require('dotenv').config()

let ws281x

try {
  ws281x = require.resolve('rpi-ws281x')
} catch (e) {
  console.error('ws281x not found')
}

/*
 * Easing
 */
const easing = {
  linear: (t) => t,
  easeInQuad: (t) => Math.pow(t, 2),
  easeOutQuad: (t) => 1 - easeInQuad(1 - t),
  easeInOutQuad: (t) =>
    t < 0.5 ? easeInQuad(t * 2) / 2 : easeOutQuad(t * 2 - 1) / 2 + 0.5,
  easeInCubic: (t) => Math.pow(t, 3),
  easeOutCubic: (t) => 1 - easeInCubic(1 - t),
  easeInOutCubic: (t) =>
    t < 0.5 ? easeInCubic(t * 2) / 2 : easeOutCubic(t * 2 - 1) / 2 + 0.5,
  easeInQuart: (t) => Math.pow(t, 4),
  easeOutQuart: (t) => 1 - easeInQuart(1 - t),
  easeInOutQuart: (t) =>
    t < 0.5 ? easeInQuart(t * 2) / 2 : easeOutQuart(t * 2 - 1) / 2 + 0.5,
  easeInQuint: (t) => Math.pow(t, 5),
  easeOutQuint: (t) => 1 - easeInQuint(1 - t),
  easeInOutQuint: (t) =>
    t < 0.5 ? easeInQuint(t * 2) / 2 : easeOutQuint(t * 2 - 1) / 2 + 0.5,
  easeInSine: (t) => 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2),
  easeOutSine: (t) => Math.sin((Math.PI / 2) * t),
  easeInOutSine: (t) => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2,
  easeInOutCirc: (t) =>
    t < 0.5
      ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
      : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,
  easeOutBounce: (t) => {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  },
  easeInOutExpo: (t) =>
    t === 0
      ? 0
      : t === 1
        ? 1
        : t < 0.5
          ? Math.pow(2, 20 * t - 10) / 2
          : (2 - Math.pow(2, -20 * t + 10)) / 2,
};

/*
 * Leds
 */
const leds = [
  {
    animationIndex: 0,
    animations: [
      {
        color: 0xff0000,
        length: 2000,
        ease: 'linear'
      },
      {
        color: 0xffff00,
        length: 2000,
        ease: 'linear'
      },
      {
        color: 0x00ff00,
        length: 2000,
        ease: 'linear'
      },
      {
        color: 0x00ffff,
        length: 2000,
        ease: 'linear'
      },
      {
        color: 0x0000ff,
        length: 2000,
        ease: 'linear'
      },
      {
        color: 0xff00ff,
        length: 2000,
        ease: 'linear'
      }
    ],
  }, 
]

/*
 * Walk
 */
class Walk {
  constructor () {
    this.config = {
      leds: 10,
      dma: 10,
      brightness: 200,
      gpio: 18,
      stripType: 'rgb'
    }

    this.offset = 0

    ws281x && ws281x.configure(this.config)
  }

  loop () {
    const pixels = new Uint32Array(this.config.leds)

    pixels[this.offset] = 0x2bc280

    this.offset = (this.offset + 1) % this.config.leds

    ws281x && ws281x.render(pixels)
  }

  run () {
    setInterval(this.loop.bind(this), 50)
  }
}

const walk = new Walk()
walk.run()
