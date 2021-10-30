const { initializeApp } = require('firebase/app')
const {
  getDatabase,
  ref,
  onValue,
  child,
  get,
  set
} = require('firebase/database')
const { firebaseConfig } = require('../../../config')
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth')
const { leds, twinkles } = require('../../../assets/rainbow')

const EMAIL = process.env.REACT_APP_EMAIL
const PASSWORD = process.env.REACT_APP_PASSWORD

// App config
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

// References
const starCountRef = ref(db, 'defaultStar')

const firebaseSetup = setup => {
  const auth = getAuth()

  signInWithEmailAndPassword(auth, EMAIL, PASSWORD)
    .then(async userCredential => {
      const user = userCredential.user
      console.log(user)

      onValue(starCountRef, snapshot => {
        const fbLeds = snapshot.val()
        console.log(fbLeds)
      })

      const { leds, twinkles } = await fetch(`animations/aaa`)

      setup(leds, twinkles)

      write(leds, twinkles)
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message

      console.log(errorCode, errorMessage)
    })
}

const fetch = async path => {
  const dbRef = ref(getDatabase())

  return get(child(dbRef, path))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        console.log('No data available')
      }
    })
    .catch(error => {
      console.error(error)
    })
}

const write = (id, { leds, twinkles }) => {
  set(ref(db, `animations/${id}`), {
    leds,
    twinkles
  })
}

module.exports = {
  firebaseSetup,
  fetch,
  write
}
