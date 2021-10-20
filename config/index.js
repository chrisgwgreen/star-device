const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DB,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID
}

const ws281xConfig = {
  leds: 150,
  dma: 10,
  brightness: 60,
  gpio: 18,
  stripType: 'rgb'
}

module.exports = {
  firebaseConfig,
  ws281xConfig
}
