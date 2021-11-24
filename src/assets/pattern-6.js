/**
 * pattern-6 - rainbow
 */

const getAnimation = () => {
  console.log('Pattern 6')

  let leds = []
  let twinkles = []

  for (let index = 0; index < 150; index++) {
    leds.push({
      isBlinking: false,
      blinkRate: 4,
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

  twinkles.push({
    color: 0xffffff,
    delay: 3000,
    speed: 5000,
    startIndex: 150,
    endIndex: 0
  })

  twinkles.push({
    color: 0xffffff,
    delay: 4000,
    speed: 5000,
    startIndex: 0,
    endIndex: 150
  })

  twinkles.push({
    color: 0xffffff,
    delay: 4000,
    speed: 5000,
    startIndex: 150,
    endIndex: 0
  })

  return {
    leds,
    twinkles
  }
}

module.exports = {
  getAnimation
}
