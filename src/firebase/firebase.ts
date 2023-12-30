// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARdTZNj849ElqOfdvtoSbLR9jSPMCZaBA",
  authDomain: "flashcards-65287.firebaseapp.com",
  projectId: "flashcards-65287",
  storageBucket: "flashcards-65287.appspot.com",
  messagingSenderId: "876406079070",
  appId: "1:876406079070:web:9888f6aa6c019618ecfecf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();
export { auth, authProvider, db };
