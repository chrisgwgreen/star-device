const { initializeApp } = require('firebase/app')
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite')
const { getDatabase, ref, onValue } = require('firebase/database')
const { getAuth } = require('firebase/auth')
const { firebaseConfig } = require('../../config')

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const db2 = getDatabase()
const auth2 = getAuth()

const starCountRef = ref(db2, 'defaultStar')

module.exports = {
  starCountRef
}
