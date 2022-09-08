// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4vOT3wHyi2XauWP5BLcoKCaIPWicWX9g",
    authDomain: "terra-paraguay.firebaseapp.com",
    projectId: "terra-paraguay",
    storageBucket: "terra-paraguay.appspot.com",
    messagingSenderId: "113688158812",
    appId: "1:113688158812:web:4d135c39bc14ef2edb7c99",
    measurementId: "G-0HH9R7DQJ5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Retrieve the Firestore Database
export const database = getFirestore(app);