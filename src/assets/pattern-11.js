const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 11')

  const animation = [
    {
      color: 0xff0000,
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
      isBlinking: true,
      blinkRate: 10,
      offsetBlub: 10,
      bulbIndexes: [
        getLegIndexes('north-right'),
        getLegIndexes('east-top'),
        getLegIndexes('east-bottom'),
        getLegIndexes('south-right'),
        getLegIndexes('southwest-top'),
        getLegIndexes('southwest-bottom'),
        getLegIndexes('northwest-top'),
        getLegIndexes('northwest-bottom'),
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
