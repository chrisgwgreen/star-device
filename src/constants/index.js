const ledLength = 150

const ledBrightness = 100

const ws281xConfig = {
  leds: ledLength,
  dma: 10,
  brightness: ledBrightness,
  gpio: 18,
  stripType: 'rgb'
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DB,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID
}

const legs = [
  { bulbs: 9, type: 'inner', name: 'north-right' },
  { bulbs: 8, type: 'outer', name: 'northeast-top' },
  { bulbs: 8, type: 'outer', name: 'northeast-bottom' },
  { bulbs: 9, type: 'inner', name: 'east-top' },
  { bulbs: 9, type: 'inner', name: 'east-bottom' },
  { bulbs: 8, type: 'outer', name: 'southeast-top' },
  { bulbs: 8, type: 'outer', name: 'southeast-bottom' },
  { bulbs: 16, type: 'inner', name: 'south-right' },
  { bulbs: 16, type: 'inner', name: 'south-left' },
  { bulbs: 8, type: 'outer', name: 'southwest-bottom' },
  { bulbs: 8, type: 'outer', name: 'southwest-top' },
  { bulbs: 9, type: 'inner', name: 'west-bottom' },
  { bulbs: 9, type: 'inner', name: 'west-top' },
  { bulbs: 8, type: 'outer', name: 'northwest-bottom' },
  { bulbs: 8, type: 'outer', name: 'northwest-top' },
  { bulbs: 9, type: 'inner', name: 'north-left' }
]

const morningStartTime = 5
const morningEndTime = 9
const eveningStartTime = 15
const eveningEndTime = 1

const nextAnimationCron = `*/5 * * * * *`
const morningStartCron = `0 ${morningStartTime} * * *`
const morningEndCron = `0 ${morningEndTime} * * *`
const eveningStartCron = `0 ${eveningStartTime} * * *`
const eveningEndCron = `0 ${eveningEndTime} * * *`

module.exports = {
  ledLength,
  ledBrightness,
  legs,
  firebaseConfig,
  ws281xConfig,

  nextAnimationCron,
  morningStartCron,
  morningEndCron,
  eveningStartCron,
  eveningEndCron,
  morningStartTime,
  morningEndTime,
  eveningStartTime,
  eveningEndTime,
}
