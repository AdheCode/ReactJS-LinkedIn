import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "linkedin-59efb.firebaseapp.com",
  projectId: "linkedin-59efb",
  storageBucket: "linkedin-59efb.appspot.com",
  messagingSenderId: "542042557102",
  appId: "1:542042557102:web:d7beccc4410b24e4fefb3f"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};