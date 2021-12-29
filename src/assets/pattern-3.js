const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 3')

  const innerAnimation = [
    {
      color: 0xffffff
    }
  ]

  const outerAnimation = [
    {
      color: 0x888888,
      length: 2000,
      ease: 'easeOutBounce'
    },
    {
      color: 0x0000000,
      length: 2000,
      ease: 'easeOutBounce'
    }
  ]

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

  const twinkleAnimations = []

  return animateTranslate(ledAnimations, twinkleAnimations)
}

module.exports = {
  getAnimation
}
