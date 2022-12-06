require('dotenv').config()

const { CronJob } = require('cron')
const { getAnimation } = require('./src/services/pattern-selector')
const { setAnimation } = require('./src/services/led')
const { nextAnimationCron } = require('./src/constants')

// const startAnimation = () => setAnimation(getAnimation)

const nextAnimation = new CronJob({
  cronTime: nextAnimationCron,
  onTick: () => {
    console.log('Next animation')
    // startAnimation()
    setAnimation(getAnimation)
  },
  runOnInit: true
})

console.log('Begin animation...')
nextAnimation.start()
