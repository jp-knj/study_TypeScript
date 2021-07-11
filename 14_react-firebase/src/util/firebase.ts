import "firebase/auth";
import "firebase/firebase-firestore";

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5uizgMo9HRpc3HCZeIz2Sc1QoEDMfsSU",
  authDomain: "auth-69ce1.firebaseapp.com",
  projectId: "auth-69ce1",
  storageBucket: "auth-69ce1.appspot.com",
  messagingSenderId: "1071560816492",
  appId: "1:1071560816492:web:7f323e812ddc0335676549",
  measurementId: "G-DRSNGRTZDD",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export default auth;
