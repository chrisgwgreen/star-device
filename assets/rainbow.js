let leds = []
let twinkles = []

for (let index = 0; index < 150; index++) {
  leds.push({
    isBlinking: false,
    blinkRate: 8,
    offset: index * 10,
    animations: [
      {
        color: 0xff0000,
        length: 500,
        ease: 'linear'
      },
      {
        color: 0xffff00,
        length: 500,
        ease: 'linear'
      },
      {
        color: 0x00ff00,
        length: 500,
        ease: 'linear'
      },
      {
        color: 0x00ffff,
        length: 500,
        ease: 'linear'
      },
      {
        color: 0x0000ff,
        length: 500,
        ease: 'linear'
      },
      {
        color: 0xff00ff,
        length: 500,
        ease: 'linear'
      }
    ]
  })
}

twinkles.push({
  color: 0xffffff,
  delay: 3000,
  speed: 5000,
  startIndex: 0,
  endIndex: 150
})

module.exports = {
  leds,
  twinkles
}
