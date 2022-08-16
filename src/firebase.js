import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC9mXFlafSY6DT1lQvewhABExcPkUqGQGM",
  authDomain: "prueba01-ef98e.firebaseapp.com",
  projectId: "prueba01-ef98e",
  storageBucket: "prueba01-ef98e.appspot.com",
  messagingSenderId: "400103168629",
  appId: "1:400103168629:web:9347234604f7eaa363b63c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();
// Initialize Data Base
export const database = getFirestore(app);