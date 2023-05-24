// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkR8oXJErKwYJVeqcxZdskWchB_GS5KUo",
  authDomain: "fir-react-auth-6c60f.firebaseapp.com",
  projectId: "fir-react-auth-6c60f",
  storageBucket: "fir-react-auth-6c60f.appspot.com",
  messagingSenderId: "402869014817",
  appId: "1:402869014817:web:a64d2a9a28563750436e60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//set up authorization
export const auth = getAuth(app);
