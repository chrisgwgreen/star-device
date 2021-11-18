const { initializeApp } = require('firebase/app')
const { getDatabase, ref } = require('firebase/database')
const { firebaseConfig } = require('../../constants')
// const { getFirestore, collection, getDocs } = require('firebase/firestore/lite')
// const { getAuth } = require('firebase/auth')

const app = initializeApp(firebaseConfig)
const db2 = getDatabase(app)
// const auth2 = getAuth()

const starCountRef = ref(db2, 'defaultStar')

module.exports = {
  starCountRef
}
