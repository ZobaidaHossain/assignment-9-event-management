// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1uLuweuDxDbypRgRmxJDJGnQZ2bewQnw",
  authDomain: "assignement-9-event-management.firebaseapp.com",
  projectId: "assignement-9-event-management",
  storageBucket: "assignement-9-event-management.appspot.com",
  messagingSenderId: "248270478947",
  appId: "1:248270478947:web:bab5be7af6168f48476256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;