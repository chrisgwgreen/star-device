const ws281x = require('rpi-ws281x')
import {
  PiStats
} from './stats'

class Walk {
  constructor () {
    this.config = {
      leds: 50,
      dma: 10,
      brightness: 100,
      gpio: 18,
      stripType: 'rgb'
    }

    this.offset = 0

    ws281x.configure(this.config)
  }

  loop () {
    const pixels = new Uint32Array(this.config.leds)

    pixels[this.offset] = 0x2bc280

    this.offset = (this.offset + 1) % this.config.leds

    ws281x.render(pixels)
  }

  run () {
    setInterval(this.loop.bind(this), 100)
  }
}

const walk = new Walk()
walk.run()

console.log(PiStats)