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

twinkles.push({
  color: 0xffffff,
  delay: 3000,
  speed: 30000,
  startIndex: 0,
  endIndex: 150
})

module.exports = {
  leds,
  twinkles
}
