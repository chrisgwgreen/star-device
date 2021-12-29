const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 12')

  const animationOff = [
    {
      color: 0x000000,
      length: 2000
    }
  ]

  const animation = [
    {
      color: 0xff0000,
      length: 6000,
      ease: 'easeOutCubic'
    },
    {
      color: 0x9400d3,
      length: 6000,
      ease: 'easeOutCubic'
    }
  ]

  const ledAnimations = [
    {
      animations: animation,
      isBlinking: false,
      blinkRate: 0,
      offsetBlub: 500,
      bulbIndexes: [
        getLegIndexes('north-right'),
        getLegIndexes('east-bottom'),
        getLegIndexes('south-right'),
        getLegIndexes('west-top')
      ]
    },
    {
      animations: animation.reverse(),
      isBlinking: false,
      blinkRate: 0,
      offsetBlub: 500,
      bulbIndexes: [
        getLegIndexes('north-left'),
        getLegIndexes('east-top'),
        getLegIndexes('south-left'),
        getLegIndexes('west-bottom')
      ]
    },
    {
      animations: animationOff,
      isBlinking: false,
      blinkRate: 0,
      offsetBlub: 0,
      bulbIndexes: [
        getLegIndexes('northwest-bottom'),
        getLegIndexes('northeast-bottom'),
        getLegIndexes('southwest-bottom'),
        getLegIndexes('southeast-bottom'),
        getLegIndexes('northwest-top'),
        getLegIndexes('northeast-top'),
        getLegIndexes('southwest-top'),
        getLegIndexes('southeast-top')
      ]
    }
  ]

  return animateTranslate(ledAnimations, [])
}

module.exports = {
  getAnimation
}
