/*
 * Description:
 * Inner & outer: Gold and White transitions
 
 */

const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 5')

  const twinkleAnimation = {
    color: 0xffffff,
    delay: 2000,
    speed: 1000
  }

  const innerAnimation = [
    {
      color: 0xffffff,
      length: 4000,
      ease: 'easeOutQuint'
    },
    {
      color: 0xffd700,
      length: 4000,
      ease: 'easeOutQuint'
    }
  ]

  const outerAnimation = [
    {
      color: 0xffd700,
      length: 4000,
      ease: 'easeOutQuint'
    },
    {
      color: 0xffffff,
      length: 4000,
      ease: 'easeOutQuint'
    }
  ]

  const ledAnimations = [
    {
      animations: innerAnimation,

      bulbIndexes: [
        getLegIndexes('northeast-top'),
        getLegIndexes('northeast-bottom'),
        getLegIndexes('southeast-top'),
        getLegIndexes('southeast-bottom'),
        getLegIndexes('southwest-top'),
        getLegIndexes('southwest-bottom'),
        getLegIndexes('northwest-top'),
        getLegIndexes('northwest-bottom')
      ]
    },
    {
      animations: outerAnimation,

      bulbIndexes: [
        getLegIndexes('north-right'),
        getLegIndexes('north-left'),
        getLegIndexes('east-top'),
        getLegIndexes('east-bottom'),
        getLegIndexes('south-right'),
        getLegIndexes('south-left'),
        getLegIndexes('west-bottom'),
        getLegIndexes('west-top')
      ]
    }
  ]

  const twinkleAnimations = [
    {
      animation: twinkleAnimation,
      isForward: true,
      twinkleIndexes: [
        getLegIndexes('northeast-top'),
        getLegIndexes('southeast-top'),
        getLegIndexes('southwest-bottom'),
        getLegIndexes('northwest-bottom')
      ]
    },
    {
      animation: twinkleAnimation,
      isForward: false,
      twinkleIndexes: [
        getLegIndexes('northeast-bottom'),
        getLegIndexes('southeast-bottom'),
        getLegIndexes('southwest-top'),
        getLegIndexes('northwest-top')
      ]
    }
  ]

  return animateTranslate(ledAnimations, twinkleAnimations)
}

module.exports = {
  getAnimation
}
