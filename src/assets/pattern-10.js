/*
 * Description:
 * Inner & Outer: Full rainbow.
 */

const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 10')

  const animation = [
    {
      color: 0xff5b5b,
      length: 2000,
      ease: 'easeOutCubic'
    },
    {
      color: 0xff9f41,
      length: 2000,
      ease: 'easeOutCubic'
    },
    {
      color: 0xfdfd3d,
      length: 2000,
      ease: 'easeOutCubic'
    },
    {
      color: 0x5aff5a,
      length: 2000,
      ease: 'easeOutCubic'
    },
    {
      color: 0x6868ff,
      length: 2000,
      ease: 'easeOutCubic'
    },
    {
      color: 0x663399,
      length: 2000,
      ease: 'easeOutCubic'
    },
    {
      color: 0xed94ed,
      length: 2000,
      ease: 'easeOutCubic'
    }
  ]

  const ledAnimations = [
    {
      animations: animation,
      isBlinking: false,
      blinkRate: 0,
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
