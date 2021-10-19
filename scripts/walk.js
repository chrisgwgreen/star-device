const ws281x = require('rpi-ws281x')

const { runStats } = require('../utils/stats')

class Walk {
  constructor() {
    this.config = {
      leds: 150,
      dma: 10,
      brightness: 255,
      gpio: 18,
      stripType: 'rgb'
    }

    this.offset = 0

    ws281x.configure(this.config)
  }

  loop() {
    const pixels = new Uint32Array(this.config.leds)

    pixels[this.offset] = 0xffffff
    pixels[150 - this.offset] = 0xffffff

    this.offset = (this.offset + 1) % this.config.leds

    ws281x.render(pixels)
  }

  run() {
    runStats()
    setInterval(this.loop.bind(this), 50)
  }
}

const walk = new Walk()
walk.run()
