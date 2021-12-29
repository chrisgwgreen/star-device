require('dotenv').config()

const { CronJob } = require('cron')
const { getAnimation } = require('./src/services/pattern-selector')
const { setAnimation, endAnimation } = require('./src/services/led')
const { setupFirebase } = require('./src/services/firebase')
const moment = require('moment')
const {
  nextAnimationCron,
  morningStartCron,
  morningEndCron,
  eveningStartCron,
  eveningEndCron,
  morningStartHour,
  morningEndHour,
  eveningStartHour,
  eveningEndHour
} = require('./src/constants')

const startAnimation = () => setAnimation(getAnimation)
const stopAnimation = () => {
  endAnimation()
  nextAnimation.stop()
}

const nextAnimation = new CronJob({
  cronTime: nextAnimationCron,
  onTick: () => {
    console.log('Next animation')
    startAnimation()
  },
  runOnInit: true
})

const morningStart = new CronJob({
  cronTime: morningStartCron,
  onTick: () => nextAnimation.start(),
  runOnInit: true
})

const morningEnd = new CronJob({
  cronTime: morningEndCron,
  onTick: () => stopAnimation()
})

const eveningStart = new CronJob({
  cronTime: eveningStartCron,
  onTick: () => nextAnimation.start()
})

const eveningEnd = new CronJob({
  cronTime: eveningEndCron,
  onTick: () => stopAnimation()
})

// Start cron jobs...
morningStart.start()
morningEnd.start()
eveningStart.start()
eveningEnd.start()

// Start if initialised within times...
const format = 'hh:mm'
const now = moment()
const morningStartDate = moment(`0${morningStartHour}:00`, format)
const morningEndDate = moment(`0${morningEndHour}:00`, format)
const eveningStartDate = moment(`${eveningStartHour}:00`, format)
const eveningEndDate = moment()
  .add(1, 'days')
  .set({ hour: eveningEndHour, minute: 0, second: 0, millisecond: 0 })

if (
  now.isBetween(morningStartDate, morningEndDate) ||
  now.isBetween(eveningStartDate, eveningEndDate)
) {
  console.log('Begin animation...')
  nextAnimation.start()
}

setupFirebase()
