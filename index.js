require('dotenv').config()

const { CronJob } = require('cron')
const { getAnimation } = require('./src/services/pattern-selector')
const { setAnimation } = require('./src/services/led')
const { setupFirebase } = require('./src/services/firebase')
const { DateTime } = require('luxon')
const {
  nextAnimationCron,
  morningStartCron,
  morningEndCron,
  eveningStartCron,
  eveningEndCron,
  morningStartTime,
  morningEndTime,
  eveningStartTime,
  eveningEndTime
} = require('./src/constants')

const startAnimation = () => setAnimation(getAnimation)

const nextAnimation = new CronJob({
  cronTime: nextAnimationCron,
  onTick: () => startAnimation,
  runOnInit: true
})

const morningStart = new CronJob({
  cronTime: morningStartCron,
  onTick: () => nextAnimation.start()
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

// Start cron jobs...
morningStart.start()
morningEnd.start()
eveningStart.start()
eveningEnd.start()

startAnimation()

const now = DateTime.now()

// const future = now.set({
//   hour: 21
// })

// // Test if plugged in between working hours...
// const now = new Date().getHours()
// if (
//   (now >= morningStartTime && now <= morningEndTime) ||
//   (now >= eveningStartTime && now <= eveningEndTime)
// ) {
//   nextAnimation.start()
//   startAnimation()
// }

setupFirebase()
