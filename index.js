const ws281x = require('rpi-ws281x-native');

// const firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/firestore");

const options = {
  // dma: 10,
  // freq: 800000,
  gpio: 19,
  invert: false,
  brightness: 100,
  stripType: ws281x.stripType.WS2812
};

const channel = ws281x(20, options);

const colorsArray = channel.array;

for (let i = 0; i < channel.count; i++) {
  colorsArray[i] = 0x3eb589;
}

ws281x.render();

console.log('DEVICE')

