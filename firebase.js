// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPEP54IX3T1jrxoLHkolIUlOps2-bvF9o",
    authDomain: "themeswitcher-f45e4.firebaseapp.com",
    projectId: "themeswitcher-f45e4",
    storageBucket: "themeswitcher-f45e4.appspot.com",
    messagingSenderId: "524015131218",
    appId: "1:524015131218:web:8b3f9fc6565726b3645d8b",
    measurementId: "G-PQG50SK6RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);