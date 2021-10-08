import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBsVimlEp5dEQEw4EB5SDoQkobJ-4l3RL8",
  authDomain: "auth-dev-c5fcc.firebaseapp.com",
  projectId: "auth-dev-c5fcc",
  storageBucket: "auth-dev-c5fcc.appspot.com",
  messagingSenderId: "430176433472",
  appId: "1:430176433472:web:83a57c13151963307d76a5"
})

export const auth = app.auth()
export default app
