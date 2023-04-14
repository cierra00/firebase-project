// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgerNyb0xNAE0xZw3NrtTDl5g6yRPjeas",
  authDomain: "taskmanager-7f360.firebaseapp.com",
  projectId: "taskmanager-7f360",
  storageBucket: "taskmanager-7f360.appspot.com",
  messagingSenderId: "137967762280",
  appId: "1:137967762280:web:6558aa42dcb221d78ab4dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
