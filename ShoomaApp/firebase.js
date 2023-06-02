// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOprc_Ax2iSc7Eg8XTrjnK43fsnMaryHg",
  authDomain: "sm-socialapp.firebaseapp.com",
  projectId: "sm-socialapp",
  storageBucket: "sm-socialapp.appspot.com",
  messagingSenderId: "263706308594",
  appId: "1:263706308594:web:e56605a0549904b865856b"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };