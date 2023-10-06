// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqI8zJXLUIEhcPe3tfZ3u8bItDnjERTXg",
    authDomain: "training-manager-io.firebaseapp.com",
    projectId: "training-manager-io",
    storageBucket: "training-manager-io.appspot.com",
    messagingSenderId: "828761705721",
    appId: "1:828761705721:web:f9b33001087a254fdb2628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;