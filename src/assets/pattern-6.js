const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 6')

  const animation = [
    {
      color: 0xff0000,
      length: 500,
      ease: 'linear'
    },
    {
      color: 0xffff00,
      length: 500,
      ease: 'linear'
    },
    {
      color: 0x00ff00,
      length: 500,
      ease: 'linear'
    },
    {
      color: 0x00ffff,
      length: 500,
      ease: 'linear'
    },
    {
      color: 0x0000ff,
      length: 500,
      ease: 'linear'
    },
    {
      color: 0xff00ff,
      length: 500,
      ease: 'linear'
    }
  ]
  // const animation = [
  //   {
  //     color: 0x000000
  //   }
  // ]

  const twinkle1Animation = {
    color: 0xffffff,
    delay: 2000,
    speed: 2000
  }

  const twinkle2Animation = {
    color: 0xa90000,
    delay: 500,
    speed: 4000
  }

  const twinkle3Animation = {
    color: 0xffffff,
    delay: 1000,
    speed: 6000
  }

  const ledAnimations = [
    {
      animations: animation,
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

  const twinkleAnimations = [
    {
      animation: twinkle1Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle1Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    },
    {
      animation: twinkle1Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle1Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    },
    {
      animation: twinkle2Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle2Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    },
    {
      animation: twinkle2Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle2Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    },
    {
      animation: twinkle3Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle3Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    },
    {
      animation: twinkle3Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle3Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    }
  ]

  return animateTranslate(ledAnimations, twinkleAnimations)
}

module.exports = {
  getAnimation
}
