// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0PP4udOOmM5FFpwJy2DH0q2l0HTARz4I",
  authDomain: "hannah-186e0.firebaseapp.com",
  projectId: "hannah-186e0",
  storageBucket: "hannah-186e0.appspot.com",
  messagingSenderId: "164292466307",
  appId: "1:164292466307:web:1a03ced1557ec1c3f12db6",
  measurementId: "G-QJH19VCK1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebaseDB =getFirestore(app)