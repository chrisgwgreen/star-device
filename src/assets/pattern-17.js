const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 17')

  const animation = [
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

  const ledAnimations = [
    {
      animations: animation,
      isBlinking: false,
      blinkRate: 0,
      offsetBlub: 100,
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