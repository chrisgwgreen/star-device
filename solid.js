const ws281x = require('rpi-ws281x')

class Solid {
  constructor() {
    this.config = {
      leds: 150,
      dma: 10,
      brightness: 200,
      gpio: 18,
      stripType: 'rgb'
    }

    ws281x.configure(this.config)
  }

  run() {
    const pixels = new Uint32Array(this.config.leds)

    for (let i = 0; i < this.config.leds; i++) pixels[i] = 0xffffff

    ws281x.render(pixels)
  }
}

const solid = new Solid()
solid.run()
