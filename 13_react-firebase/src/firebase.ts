import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ9w7lZv_-oa_cIx881gmcg6fnYkloXwQ",
  authDomain: "postman-368a0.firebaseapp.com",
  projectId: "postman-368a0",
  storageBucket: "postman-368a0.appspot.com",
  messagingSenderId: "116361266756",
  appId: "1:116361266756:web:55d9b723776402c3ce5e11",
  measurementId: "G-3FFXWV0TFW",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

// window.firebase = firebase;

export default firebase;
