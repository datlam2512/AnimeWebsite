// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBvmn6AOY-h_Jg2OJmKrkq09C7-IPiMjtI",
  authDomain: "lab7new-a3b93.firebaseapp.com",
  projectId: "lab7new-a3b93",
  storageBucket: "lab7new-a3b93.appspot.com",
  messagingSenderId: "912600637076",
  appId: "1:912600637076:web:6d34d6622963d484aa9e81",
  measurementId: "G-JQWPZSTHRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const provider=new GoogleAuthProvider();
export{auth,provider};