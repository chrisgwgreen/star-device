/*
 * Description:
 * Inner & Outer: Beautiful rainbow pattern with a racing twinkle
 */

const getAnimation = () => {
  console.log('Pattern 4')

  let leds = []
  let twinkles = []

  for (let index = 0; index < 150; index++) {
    leds.push({
      isBlinking: false,
      blinkRate: 4,
      offset: index * 10,
      animations: [
        {
          color: 0xff6060,
          length: 500,
          ease: 'linear'
        },
        {
          color: 0xfcfc79,
          length: 500,
          ease: 'linear'
        },
        {
          color: 0x8bff8b,
          length: 500,
          ease: 'linear'
        },
        {
          color: 0x00ffff,
          length: 500,
          ease: 'linear'
        },
        {
          color: 0x88bbff,
          length: 500,
          ease: 'linear'
        },
        {
          color: 0xff94ff,
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
