/*
 * Description:
 * Inner & Outer: Nice twinkling all over pattern
 */

const { getLegIndexes } = require('../utils/legs')
const { animateTranslate } = require('../utils/animate')

const getAnimation = () => {
  console.log('Pattern 8')

  const animation = [
    {
      color: 0x000000
    }
  ]

  const twinkle1Animation = {
    color: 0xffffff,
    delay: Math.random() * 1000,
    speed: Math.random() * 3000 + 1000
  }

  const twinkle2Animation = {
    color: 0xffffff,
    delay: Math.random() * 1000,
    speed: Math.random() * 3000 + 2000,
    offset: 500
  }
  const twinkle3Animation = {
    color: 0xffffff,
    delay: Math.random() * 1000,
    speed: Math.random() * 3000 + 3000
  }

  const twinkle4Animation = {
    color: 0xffffff,
    delay: Math.random() * 1000,
    speed: Math.random() * 3000 + 4000,
    offset: 500
  }

  const twinkle5Animation = {
    color: 0xffffff,
    delay: Math.random() * 1000,
    speed: Math.random() * 3000 + 5000,
    offset: 700
  }

  const twinkle6Animation = {
    color: 0xffffff,
    delay: Math.random() * 500,
    speed: Math.random() * 3000 + 6000,
    offset: 900
  }

  const twinkle7Animation = {
    color: 0xffffff,
    delay: Math.random() * 800,
    speed: Math.random() * 3000 + 7000,
    offset: 1000
  }

  const ledAnimations = [
    {
      animations: animation,
      isBlinking: true,
      blinkRate: 4,
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
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle4Animation,
      isForward: false,
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
      animation: twinkle4Animation,
      isForward: true,
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
      animation: twinkle4Animation,
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
      animation: twinkle4Animation,
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
      animation: twinkle4Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    },
    {
      animation: twinkle5Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle5Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    },
    {
      animation: twinkle5Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle5Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    },
    {
      animation: twinkle5Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle5Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    },
    {
      animation: twinkle6Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle6Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    },
    {
      animation: twinkle7Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 0,
          endIndex: 74
        }
      ]
    },
    {
      animation: twinkle7Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 75,
          endIndex: 149
        }
      ]
    },
    {
      animation: twinkle6Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 74,
          endIndex: 0
        }
      ]
    },
    {
      animation: twinkle6Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 149,
          endIndex: 75
        }
      ]
    },
    {
      animation: twinkle7Animation,
      isForward: false,
      twinkleIndexes: [
        {
          startIndex: 74,
          endIndex: 0
        }
      ]
    },
    {
      animation: twinkle7Animation,
      isForward: true,
      twinkleIndexes: [
        {
          startIndex: 149,
          endIndex: 75
        }
      ]
    }
  ]

  return animateTranslate(ledAnimations, twinkleAnimations)
}

module.exports = {
  getAnimation
}
