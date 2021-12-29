const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 5')

  const animation = [
    {
      color: 0x008080,
      length: 500,
      ease: 'easeOutQuint'
    },
    {
      color: 0xffc0cb,
      length: 500,
      ease: 'easeOutQuint'
    },
    {
      color: 0x89cff0,
      length: 500,
      ease: 'easeOutQuint'
    }
  ]

  const ledAnimations = [
    {
      animations: animation,
      isBlinking: true,
      blinkRate: 2,
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
      animations: animation.reverse(),
      isBlinking: false,
      blinkRate: 0,
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

  const twinkleAnimations = []

  return animateTranslate(ledAnimations, twinkleAnimations)
}

module.exports = {
  getAnimation
}
