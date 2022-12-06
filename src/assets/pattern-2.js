/*
 * Description:
 * Inner: White Solid with full white tinkles
 * Outer: Frozen show blue colours
 */

const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 2')

  const innerAnimation = [
    {
      color: 0xffffff
    }
  ]

  const outerAnimation = [
    {
      color: 0x6f00f9,
      length: 500,
      ease: 'linear'
    },
    {
      color: 0x610cff,
      length: 500,
      ease: 'linear'
    },
    {
      color: 0x0000ff,
      length: 500,
      ease: 'linear'
    },
    {
      color: 0x2365ff,
      length: 500,
      ease: 'linear'
    },
    {
      color: 0x00d1ff,
      length: 500,
      ease: 'linear'
    }
  ]

  const twinkleAnimation = {
    color: 0xfcfefd,
    delay: 2000,
    speed: 600
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
      blinkRate: 1,
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
        getLegIndexes('east-top'),
        getLegIndexes('south-right'),
        getLegIndexes('west-bottom'),
        getLegIndexes('north-left')
      ]
    },
    {
      animation: twinkleAnimation,
      isForward: false,
      twinkleIndexes: [
        getLegIndexes('north-right'),
        getLegIndexes('east-bottom'),
        getLegIndexes('south-left'),
        getLegIndexes('west-top')
      ]
    }
  ]

  return animateTranslate(ledAnimations, twinkleAnimations)
}

module.exports = {
  getAnimation
}
