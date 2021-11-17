let leds = []
let twinkles = []

for (let index = 0; index < 150; index++) {
  leds.push({
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
