let leds = []
let twinkles = []

for (let index = 0; index < 150; index++) {
  leds.push({
    offset: 0,
    animations: [
      {
        color: 0x0f0096
      }
    ]
  })
}

module.exports = {
  leds,
  twinkles
}
