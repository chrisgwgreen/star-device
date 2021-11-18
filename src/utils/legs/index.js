const { legs } = require('../../constants')

const getLegIndexes = name => {
  const indexes = {
    startIndex: 0,
    endIndex: 0
  }

  for (let legIndex = 0; legIndex < legs.length; legIndex++) {
    const leg = legs[legIndex]

    if (leg.name === name) {
      indexes.endIndex = indexes.startIndex + leg.bulbs - 1
      break
    } else {
      indexes.startIndex = indexes.startIndex + leg.bulbs
    }
  }

  return indexes
}

module.exports = {
  getLegIndexes
}
