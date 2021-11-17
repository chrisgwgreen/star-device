/**
 * pattern-3- Solid white inner with twinkle. Rainbow outer
 */
const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const innerAnimation = [
  {
    color: 0x000000
  }
]

const outerAnimation = [
  {
    color: 0x000000
  }
]

const twinkleAninmation = {
  color: 0xffffff,
  delay: 1000,
  speed: 3000
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
    animation: twinkleAninmation,
    isForward: true,
    twinkleIndexes: [getLegIndexes('south-right')]
  },
  {
    animation: twinkleAninmation,
    isForward: false,
    twinkleIndexes: [getLegIndexes('south-left')]
  }
]

const getAnimation = () => animateTranslate(ledAnimations, twinkleAnimations)

module.exports = {
  getAnimation
}
