import { getAnalytics } from "firebase/analytics"
import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'



// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL1-YiJILFf_H5fXvJMgDEmzq0oOHXph4",
  authDomain: "ecotrack-2cff3.firebaseapp.com",
  projectId: "ecotrack-2cff3",
  storageBucket: "ecotrack-2cff3.appspot.com",
  messagingSenderId: "50522801212",
  appId: "1:50522801212:web:3c81437f705c9fa7d72f39",
  measurementId: "G-KH795MEV8D",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)
const auth = getAuth(app)
const firestore  = getFirestore(app)

export { analytics, auth, firestore }



