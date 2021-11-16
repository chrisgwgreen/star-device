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
