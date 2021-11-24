const moment = require('moment')

const format = 'hh:mm'

const now = moment()
const morningStart = moment('05:00', format)
const morningend = moment('09:00', format)
const eveningStart = moment('15:00', format)
const eveningEnd = moment()
  .add(1, 'days')
  .set({ hour: 1, minute: 0, second: 0, millisecond: 0 })

if (
  now.isBetween(morningStart, morningend) ||
  now.isBetween(eveningStart, eveningEnd)
) {
  console.log('is between')
}
