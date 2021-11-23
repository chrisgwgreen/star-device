const { initializeApp } = require('firebase/app')
const {
  getDatabase,
  ref,
  onValue,
  child,
  get,
  set
} = require('firebase/database')
const { firebaseConfig } = require('../../constants')
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth')

const EMAIL = process.env.REACT_APP_EMAIL
const PASSWORD = process.env.REACT_APP_PASSWORD

// App config
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

// References
const starCountRef = ref(db, 'defaultStar')

const setupFirebase = () => {
  const auth = getAuth()

  signInWithEmailAndPassword(auth, EMAIL, PASSWORD)
    .then(async userCredential => {
      const user = userCredential.user

      onValue(starCountRef, snapshot => {
        const fbLeds = snapshot.val()
        console.log(fbLeds)
      })

      const { leds, twinkles } = await fetch(`animations/aaa`)

      console.log({ user, leds, twinkles })
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
  setupFirebase,
  fetch,
  write
}
