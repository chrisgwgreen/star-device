/**
 * pattern-3- Solid white inner with twinkle. Rainbow outer
 */
const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  const animation = [
    {
      color: 0x000000
    }
  ]

  const twinkleAnimation = {
    color: 0xffffff,
    delay: 1000,
    speed: 5000
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
      animation: twinkleAnimation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 75
        }
      ]
    },
    {
      animation: twinkleAnimation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 150,
          endIndex: 76
        }
      ]
    }
  ]

  return animateTranslate(ledAnimations, twinkleAnimations)
}

module.exports = {
  getAnimation
}
