require('dotenv').config()

const ws281x = require('rpi-ws281x')

const fs = require('fs')

const { initializeApp } = require('firebase/app')
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite')
const { getDatabase, ref, onValue } = require('firebase/database')
const { getAuth } = require('firebase/auth')

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY || '',
  authDomain: process.env.REACT_APP_AUTHDOMAIN || '',
  databaseURL: process.env.REACT_APP_DB || '',
  projectId: process.env.REACT_APP_PID || '',
  storageBucket: process.env.REACT_APP_SB || '',
  messagingSenderId: process.env.REACT_APP_SID || '',
  appId: process.env.REACT_APP_APPID || ''
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const db2 = getDatabase()
const auth2 = getAuth()

const starCountRef = ref(db2, 'defaultStar')

const config = {
  leds: 150,
  dma: 10,
  brightness: 255,
  gpio: 18,
  stripType: 'rgb'
}

ws281x && ws281x.configure(config)

const convertor = color => {
  return color.replace('#', '0x')
}

onValue(starCountRef, snapshot => {
  const leds = snapshot.val()

  const pixels = new Uint32Array(config.leds)

  for (const led in leds) {
    const blub = leds[led]

    pixels[led] = convertor(blub.color)
  }

  ws281x && ws281x.render(pixels)
})
