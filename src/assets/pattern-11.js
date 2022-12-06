/*
 * Description:
 * Inner & Outer: Frozen palette
 */

const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 11')

  const animation = [
    {
      color: 0x8b0a50,
      length: 500,
      ease: 'linear'
    },
    {
      color: 0x7ec0ee,
      length: 1000,
      ease: 'linear'
    },
    {
      color: 0xbfefff,
      length: 1000,
      ease: 'linear'
    },
    {
      color: 0xf8f8ff,
      length: 1000,
      ease: 'linear'
    },
    {
      color: 0xb452cd,
      length: 500,
      ease: 'linear'
    }
  ]

  const ledAnimations = [
    {
      animations: animation,
      isBlinking: false,
      blinkRate: 0,
      offsetBlub: 100,
      offsetAnimation: 100,
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

  const twinkleAnimations = []

  return animateTranslate(ledAnimations, twinkleAnimations)
}

module.exports = {
  getAnimation
}
