// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW6WeCjUoOM0you7eL5DlYCBpsAXGdnPs",
  authDomain: "expense-tracker-c5f7f.firebaseapp.com",
  projectId: "expense-tracker-c5f7f",
  storageBucket: "expense-tracker-c5f7f.appspot.com",
  messagingSenderId: "822622814775",
  appId: "1:822622814775:web:898ab7faf7e8290ca575b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
