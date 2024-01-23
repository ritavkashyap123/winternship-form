// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFH_tjlv8OCMVYgn0DuFFktXz5HToYcp4",
  authDomain: "winternship-form.firebaseapp.com",
  projectId: "winternship-form",
  storageBucket: "winternship-form.appspot.com",
  messagingSenderId: "781941071010",
  appId: "1:781941071010:web:c59c3f511e2c082f6b4bfb",
  measurementId: "G-DMR6S34XT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app)

