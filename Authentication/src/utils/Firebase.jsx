// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDgsNaYyHnklGgSdtZo7fTk2CoeapB7mdU',
  authDomain: 'authentication-7101b.firebaseapp.com',
  projectId: 'authentication-7101b',
  storageBucket: 'authentication-7101b.appspot.com',
  messagingSenderId: '396073202790',
  appId: '1:396073202790:web:c05b758724c70a416529a7'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(app)
export const provider = new GoogleAuthProvider()