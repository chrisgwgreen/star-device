const fs = require('fs')

const PiStats = (() => {
  var memInfo = {}
  var currentCPUInfo = { total: 0, active: 0 }
  var lastCPUInfo = { total: 0, active: 0 }

  const getValFromLine = line => {
    var match = line.match(/[0-9]+/gi)
    if (match !== null) return parseInt(match[0])
    else return null
  }

  const getMemoryInfo = cb => {
    fs.readFile('/proc/meminfo', 'utf8', (err, data) => {
      if (err) {
        cb(err)
        return
      }
      const lines = data.split('\n')
      memInfo.total = Math.floor(getValFromLine(lines[0]) / 1024)
      memInfo.free = Math.floor(getValFromLine(lines[1]) / 1024)
      memInfo.cached = Math.floor(getValFromLine(lines[3]) / 1024)
      memInfo.used = memInfo.total - memInfo.free
      memInfo.percentUsed = Math.ceil(
        ((memInfo.used - memInfo.cached) / memInfo.total) * 100
      )

      cb(null, memInfo)
    })
  }

  const calculateCPUPercentage = (oldVals, newVals) => {
    const totalDiff = newVals.total - oldVals.total
    const activeDiff = newVals.active - oldVals.active

    return Math.ceil((activeDiff / totalDiff) * 100)
  }

  const getCPUInfo = cb => {
    lastCPUInfo.active = currentCPUInfo.active
    lastCPUInfo.idle = currentCPUInfo.idle
    lastCPUInfo.total = currentCPUInfo.total

    fs.readFile('/proc/stat', 'utf8', function (err, data) {
      if (err) {
        if (cb !== undefined) cb(err)
        return
      }

      const lines = data.split('\n')
      const cpuTimes = lines[0].match(/[0-9]+/gi)

      currentCPUInfo.total = 0

      // We'll count both idle and iowait as idle time
      currentCPUInfo.idle = parseInt(cpuTimes[3]) + parseInt(cpuTimes[4])
      for (var i = 0; i < cpuTimes.length; i++) {
        currentCPUInfo.total += parseInt(cpuTimes[i])
      }
      currentCPUInfo.active = currentCPUInfo.total - currentCPUInfo.idle
      currentCPUInfo.percentUsed = calculateCPUPercentage(
        lastCPUInfo,
        currentCPUInfo
      )

      if (cb !== undefined) cb(null, currentCPUInfo)
    })
  }

  return {
    getMemoryInfo: getMemoryInfo,
    getCPUInfo: getCPUInfo,
    printMemoryInfo: () => {
      getMemoryInfo((err, data) => {
        console.log('total\tused\tfree\tcached')
        console.log(
          data.total + '\t' + data.used + '\t' + data.free + '\t' + data.cached
        )
        console.log('Memory Usage:\t' + data.percentUsed + '%')
      })
    },
    printCPUInfo: () => {
      getCPUInfo((err, data) => {
        console.log('Current CPU Usage: ' + data.percentUsed + '%')
      })
    }
  }
})()

const runStats = () => {
  PiStats.printMemoryInfo()
  setInterval(PiStats.printCPUInfo, 1000)
}

module.exports = {
  runStats
}
