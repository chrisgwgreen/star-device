/**
 * pattern-1 - Inner star vs outer star
 */

const { getLegIndexes } = require('../utils/legs')
const { LED_LENGTH } = require('../utils/constants')

const innerAnimation = [
  {
    color: 0xffffff,
    length: 500,
    ease: 'linear'
  },
  {
    color: 0x000000,
    length: 500,
    ease: 'linear'
  }
]

const outerAnimation = [
  {
    color: 0xd30d0d,
    length: 500,
    ease: 'linear'
  },
  {
    color: 0xff0000,
    length: 500,
    ease: 'linear'
  },
  {
    color: 0xaacc00,
    length: 500,
    ease: 'linear'
  },
  {
    color: 0x55a630,
    length: 500,
    ease: 'linear'
  },
  {
    color: 0xffdd00,
    length: 500,
    ease: 'linear'
  }
]

const twinkleAninmation = {
  color: 0xffffff,
  delay: 2000,
  speed: 5000
}

const ledAnimations = [
  {
    animations: innerAnimation,
    isBlinking: false,
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
    isBlinking: true,
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
      getLegIndexes('east-top'),
      getLegIndexes('south-right'),
      getLegIndexes('west-bottom'),
      getLegIndexes('north-left')
    ]
  },
  {
    animation: twinkleAninmation,
    isForward: false,
    twinkleIndexes: [
      getLegIndexes('north-right'),
      getLegIndexes('east-bottom'),
      getLegIndexes('south-left'),
      getLegIndexes('west-top')
    ]
  }
]

const getAnimation = () => {
  let leds = new Array(LED_LENGTH)
  let twinkles = []

  // TODO check end/start index correct

  // Setup led animations
  ledAnimations.forEach(
    ({ animations, isBlinking, blinkRate, bulbIndexes }) => {
      bulbIndexes.forEach(({ startIndex, endIndex }) => {
        leds.fill(
          {
            // offset: index * 10,
            isBlinking,
            blinkRate,
            animations
          },
          startIndex,
          endIndex + 1
        )
      })
    }
  )

  // Setup twinkle animations
  twinkleAnimations.forEach(({ animation, isForward, twinkleIndexes }) => {
    twinkleIndexes.forEach(({ startIndex, endIndex }) => {
      const direction = isForward
        ? {
            startIndex: startIndex,
            endIndex: endIndex
          }
        : {
            startIndex: endIndex,
            endIndex: startIndex
          }

      twinkles.push({
        ...animation,
        ...direction
      })
    })
  })

  return { leds, twinkles }
}

module.exports = {
  getAnimation
}
