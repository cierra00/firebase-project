// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore, doc, getDoc } from "firebase/firestore"
import Firestore from "firestore";
import { stringify } from "uuid";
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

async function readASingleDocument() {
  const mySnapshot = await getDoc(specialOfTheDay);
  if(mySnapshot.exists()){
    const docData = mySnapshot.data();
    console.log(`My data is ${JSON.stringify(docData)}`)
  }
}

const specialOfTheDay = doc( db , '/productDB/k4EeOy2nPe095k4TrRQr')
readASingleDocument();
export default app;
