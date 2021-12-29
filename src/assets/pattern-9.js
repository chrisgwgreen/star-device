const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 9')

  const animation = [
    {
      color: 0xff0000,
      length: 2000,
      ease: 'easeOutCubic'
    },
    {
      color: 0xff7f00,
      length: 2000,
      ease: 'easeOutCubic'
    },
    {
      color: 0xffff00,
      length: 2000,
      ease: 'easeOutCubic'
    },
    {
      color: 0x00ff00,
      length: 2000,
      ease: 'easeOutCubic'
    },
    {
      color: 0x0000ff,
      length: 2000,
      ease: 'easeOutCubic'
    },
    {
      color: 0x4b0082,
      length: 2000,
      ease: 'easeOutCubic'
    },
    {
      color: 0x9400d3,
      length: 2000,
      ease: 'easeOutCubic'
    }
  ]

  const ledAnimations = [
    {
      animations: animation,
      isBlinking: false,
      blinkRate: 0,
      offsetAnimation: 7000,
      bulbIndexes: [
        getLegIndexes('north-right'),
        getLegIndexes('east-top'),
        getLegIndexes('east-bottom'),
        getLegIndexes('south-right'),
        getLegIndexes('southwest-top'),
        getLegIndexes('southwest-bottom'),
        getLegIndexes('northwest-top'),
        getLegIndexes('northwest-bottom')
      ]
    },
    {
      animations: animation,
      isBlinking: false,
      blinkRate: 0,
      bulbIndexes: [
        getLegIndexes('north-left'),
        getLegIndexes('south-left'),
        getLegIndexes('west-bottom'),
        getLegIndexes('west-top'),
        getLegIndexes('northeast-top'),
        getLegIndexes('northeast-bottom'),
        getLegIndexes('southeast-top'),
        getLegIndexes('southeast-bottom')
      ]
    }
  ]

  return animateTranslate(ledAnimations, [])
}

module.exports = {
  getAnimation
}