/**
 * pattern-1 - Inner star vs outer star
 */

const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 1')

  const innerAnimation = [
    {
      color: 0xffffff,
      length: 10000,
      ease: 'linear'
    },
    {
      color: 0x555555,
      length: 200,
      ease: 'linear'
    }
  ]

  const outerAnimation = [
    {
      color: 0xd30d0d,
      length: 5000,
      ease: 'linear'
    },
    {
      color: 0xff0000,
      length: 5000,
      ease: 'linear'
    },
    {
      color: 0xaacc00,
      length: 5000,
      ease: 'linear'
    },
    {
      color: 0x55a630,
      length: 5000,
      ease: 'linear'
    },
    {
      color: 0xffdd00,
      length: 5000,
      ease: 'linear'
    }
  ]

  const twinkleAnimation = {
    color: 0xffffff,
    delay: 5000,
    speed: 400
  }

  const ledAnimations = [
    {
      animations: innerAnimation,
      isBlinking: false,
      blinkRate: 4,
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
    },
    {
      animations: outerAnimation,
      isBlinking: false,
      blinkRate: 4,
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
