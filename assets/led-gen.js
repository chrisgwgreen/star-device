let leds = []

for (let index = 0; index < 150; index += 2) {
  leds.push({
    animationIndex: 0,
    startTime: 0,
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

for (let index = 1; index < 150; index += 2) {
  leds.push({
    animationIndex: 0,
    startTime: 0,
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

module.exports = {
  leds
}
