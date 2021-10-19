let leds = []

for (let index = 0; index < 150; index++) {
  leds.push({
    animationIndex: 0,
    startTime: 0,
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

leds[75] = {
  animationIndex: 0,
  startTime: 0,
  animations: [
    {
      color: 0x000000,
      length: 1000,
      ease: 'easeOutBounce'
    },
    {
      color: 0xffffff,
      length: 3000,
      ease: 'linear'
    }
  ]
}

module.exports = {
  leds
}
