// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCs4c8kdZyOlc3YwgciAsCttn-Uxz1SecI",
    authDomain: "projectl-85664.firebaseapp.com",
    projectId: "projectl-85664",
    storageBucket: "projectl-85664.appspot.com",
    messagingSenderId: "800479291137",
    appId: "1:800479291137:web:b5c8945e3c4d739b9a9d00",
    measurementId: "G-NPHD7DGDRY"
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };