import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUuPO7-XqowUGX7M4Gj0IOegcnNWfzIko",
  authDomain: "crwn-eshop-db.firebaseapp.com",
  databaseURL: "https://crwn-eshop-db.firebaseio.com",
  projectId: "crwn-eshop-db",
  storageBucket: "crwn-eshop-db.appspot.com",
  messagingSenderId: "334581056902",
  appId: "1:334581056902:web:923c5b52494b99f4f19807",
  measurementId: "G-MSJ3W0R1PY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;