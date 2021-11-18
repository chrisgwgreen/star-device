require('dotenv').config()

const { CronJob } = require('cron')
const { getAnimation } = require('./src/services/pattern-selector')
const { setAnimation } = require('./src/services/led')
const {
  nextAnimationCron,
  morningStartCron,
  morningEndCron,
  eveningStartCron,
  eveningEndCron
} = require('./src/constants')

const nextAnimation = new CronJob({
  cronTime: nextAnimationCron,
  onTick: () => {
    console.log('You will see this message every second')
    setAnimation(getAnimation)
  }
})

const morningStart = new CronJob({
  cronTime: morningStartCron,
  onTick: () => nextAnimation.start(),
  runOnInit: true
})

const morningEnd = new CronJob({
  cronTime: morningEndCron,
  onTick: () => nextAnimation.stop()
})

const eveningStart = new CronJob({
  cronTime: eveningStartCron,
  onTick: () => nextAnimation.start()
})

const eveningEnd = new CronJob({
  cronTime: eveningEndCron,
  onTick: () => nextAnimation.stop()
})

morningStart.start()
morningEnd.start()
eveningStart.start()
eveningEnd.start()
