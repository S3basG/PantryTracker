// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAskg50OKA9Ogjv8roG97m7yTg8Pj7hNh4",
  authDomain: "inventory-management2-c240e.firebaseapp.com",
  projectId: "inventory-management2-c240e",
  storageBucket: "inventory-management2-c240e.appspot.com",
  messagingSenderId: "401081961751",
  appId: "1:401081961751:web:c4312c356bd26c58d5bb52",
  measurementId: "G-W7L8TXSR7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore };