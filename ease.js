require('dotenv').config()

const ws281x = require('rpi-ws281x')

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
    ]
  },
  {
    animationIndex: 0,
    animations: [
      {
        color: 0xff00ff,
        length: 2000,
        ease: 'linear'
      },
      {
        color: 0x00ff00,
        length: 2000,
        ease: 'linear'
      }
    ]
  }
]

/*
 * Walk
 */
class Walk {
  constructor() {
    this.config = {
      leds: 10,
      dma: 10,
      brightness: 200,
      gpio: 18,
      stripType: 'rgb'
    }

    this.offset = 0

    ws281x.configure(this.config)
  }

  loop() {
    const pixels = new Uint32Array(this.config.leds)

    for (let ledIndex = 0; ledIndex < leds.length; ledIndex++) {
      const element = leds[ledIndex]

      pixels[ledIndex] = element.animations[0].color
    }

    ws281x.render(pixels)
  }

  run() {
    const startTime = performance.now()

    console.log(startTime)

    for (var ledIndex = 0; ledIndex < leds.length; ledIndex++) {
      const led = leds[ledIndex]

      // consider moving these out to a lightweight array or finding a better approach....
      led.animationIndex = 0
      led.startTime = startTime
    }

    // Repeat...
    setInterval(this.loop.bind(this), 50)
  }
}

const walk = new Walk()
walk.run()
