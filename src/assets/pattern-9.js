/**
 * pattern-9- Solid white inner with twinkle. Rainbow outer
 */
const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 9')

  const animation = [
    {
      color: 0x000000
    }
  ]

  const twinkle1Animation = {
    color: 0xffffff,
    delay: 1000,
    speed: 4000
  }

  const twinkle2Animation = {
    color: 0xffffff,
    delay: 1000,
    speed: 4000,
    offset: 500
  }

  const ledAnimations = [
    {
      animations: animation,
      isBlinking: true,
      blinkRate: 4,
      bulbIndexes: [
        getLegIndexes('north-right'),
        getLegIndexes('north-left'),
        getLegIndexes('east-top'),
        getLegIndexes('east-bottom'),
        getLegIndexes('south-right'),
        getLegIndexes('south-left'),
        getLegIndexes('west-bottom'),
        getLegIndexes('west-top'),
        getLegIndexes('northeast-top'),
        getLegIndexes('northeast-bottom'),
        getLegIndexes('southeast-top'),
        getLegIndexes('southeast-bottom'),
        getLegIndexes('southwest-top'),
        getLegIndexes('southwest-bottom'),
        getLegIndexes('northwest-top'),
        getLegIndexes('northwest-bottom')
      ]
    }
  ]

  const twinkleAnimations = [
    {
      animation: twinkle1Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle2Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    }
  ]

  return animateTranslate(ledAnimations, twinkleAnimations)
}

module.exports = {
  getAnimation
}
