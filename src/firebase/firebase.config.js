// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1Fj4jupu0UTSfUo2pxAVEb-mSJlk65U8",
    authDomain: "weddings-management-4642c.firebaseapp.com",
    projectId: "weddings-management-4642c",
    storageBucket: "weddings-management-4642c.appspot.com",
    messagingSenderId: "137841839730",
    appId: "1:137841839730:web:6335c8f91d238b2fe7bceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
