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
  delay: 1000,
  speed: 400,
  startIndex: 0,
  endIndex: 20
})

twinkles.push({
  color: 0xffffff,
  delay: 1000,
  speed: 400,
  startIndex: 150,
  endIndex: 120
})

module.exports = {
  leds,
  twinkles
}
