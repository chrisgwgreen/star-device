const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 15')

  const animation = [
    {
      color: 0xffffff
    }
  ]

  const ledAnimations = [
    {
      animations: animation,
      isBlinking: true,
      blinkRate: 2,
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
