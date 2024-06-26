let leds = []
let twinkles = []

for (let index = 0; index < 150; index++) {
  if (index % 2) {
    leds.push({
      isBlinking: true,
      blinkRate: 4,
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
  } else {
    leds.push({
      isBlinking: false,
      blinkRate: 4,
      offset: 0,
      animations: [
        {
          color: 0x00ff2a,
          length: 2000,
          ease: 'linear'
        },
        {
          color: 0xff0040,
          length: 2000,
          ease: 'linear'
        }
      ]
    })
  }
}

twinkles.push({
  color: 0xffffff,
  delay: 3000,
  speed: 10000,
  startIndex: 0,
  endIndex: 150
})

module.exports = {
  leds,
  twinkles
}
