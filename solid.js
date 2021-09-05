const ws281x = require('rpi-ws281x')

class Solid {
  constructor () {
    this.config = {
      leds: 50,
      dma: 10,
      brightness: 100,
      gpio: 18,
      stripType: 'rgb'
    }

    ws281x.configure(this.config)
  }

  run () {
    const pixels = new Uint32Array(this.config.leds)

    for (let i = 0; i < this.config.leds; i++) pixels[i] = 0xff0000

    ws281x.render(pixels)
  }
}

const solid = new Solid()
solid.run()
