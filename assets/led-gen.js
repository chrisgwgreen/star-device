let leds = []

for (let index = 0; index < 150; index++) {
  if (index % 2) {
    leds.push({
      isBlinking: true,
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

module.exports = {
  leds
}
