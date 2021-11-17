let leds = []
let twinkles = []

for (let index = 0; index < 75; index++) {
  leds.push({
    offset: 0,
    animations: [
      {
        color: 0xff9500,
        length: 2000,
        ease: 'linear'
      },
      {
        color: 0x008cff,
        length: 2000,
        ease: 'linear'
      }
    ]
  })
}

for (let index = 74; index < 150; index++) {
  leds.push({
    offset: 2000,
    animations: [
      {
        color: 0x008cff,
        length: 2000,
        ease: 'linear'
      },
      {
        color: 0xff9500,
        length: 2000,
        ease: 'linear'
      }
    ]
  })
}

twinkles.push({
  color: 0xffffff,
  delay: 3000,
  speed: 1000,
  startIndex: 150,
  endIndex: 0
})

module.exports = {
  leds,
  twinkles
}
