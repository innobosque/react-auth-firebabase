// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlu24Qa5rW6yHiCbegvhIutMCNLF9wvZM",
  authDomain: "api-rest-reactjs.firebaseapp.com",
  projectId: "api-rest-reactjs",
  storageBucket: "api-rest-reactjs.appspot.com",
  messagingSenderId: "905921129223",
  appId: "1:905921129223:web:759272a08d33401cdd33a2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

