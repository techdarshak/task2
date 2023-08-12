import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlrwtbLbP6H-zPOR8CVYrLeuicOD_915k",
  authDomain: "web-app-ccd1a.firebaseapp.com",
  projectId: "web-app-ccd1a",
  storageBucket: "web-app-ccd1a.appspot.com",
  messagingSenderId: "77855206118",
  appId: "1:77855206118:web:7a9847285e38144323e927",
  measurementId: "G-1F9WW0XWKH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
const analytics = getAnalytics(app);