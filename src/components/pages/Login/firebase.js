import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBYf9VT-9JKvLURE84rhK01GLqlTcsZ7ZI",
    authDomain: "clone-9e848.firebaseapp.com",
    projectId: "clone-9e848",
    storageBucket: "clone-9e848.appspot.com",
    messagingSenderId: "676213411965"
})

export const auth = getAuth();
export const db = getFirestore();
export const createUser = createUserWithEmailAndPassword;
export default firebaseApp;
