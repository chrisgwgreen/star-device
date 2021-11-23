/**
 * pattern-1 - Inner star vs outer star
 */

const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const innerAnimation = [
  {
    color: 0xffffff
  }
]

const outerAnimation = [
  {
    color: 0x000000
  }
]

const twinkleAninmation = {
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
    animation: twinkleAninmation,
    isForward: true,
    twinkleIndexes: [
      getLegIndexes('northeast-top'),
      getLegIndexes('southeast-top'),
      getLegIndexes('southwest-bottom'),
      getLegIndexes('northwest-bottom')
    ]
  },
  {
    animation: twinkleAninmation,
    isForward: false,
    twinkleIndexes: [
      getLegIndexes('northeast-bottom'),
      getLegIndexes('southeast-bottom'),
      getLegIndexes('southwest-top'),
      getLegIndexes('northwest-top')
    ]
  }
]

const getAnimation = () => animateTranslate(ledAnimations, twinkleAnimations)

module.exports = {
  getAnimation
}
