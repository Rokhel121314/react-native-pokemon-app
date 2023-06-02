// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwJDdJxVJeJGnklejPGkld7-KRsoseHG4",
  authDomain: "pokemonapp-a304f.firebaseapp.com",
  projectId: "pokemonapp-a304f",
  storageBucket: "pokemonapp-a304f.appspot.com",
  messagingSenderId: "1048669976071",
  appId: "1:1048669976071:web:fd73a4af74426e4762dca2",
  measurementId: "G-J2HESERE1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
