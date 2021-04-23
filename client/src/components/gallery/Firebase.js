import firebase from 'firebase/app';
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCwVvj-161xHEJw2C9p7YbJDFQw1lsLtn4",
    authDomain: "ivy-303dc.firebaseapp.com",
    projectId: "ivy-303dc",
    storageBucket: "ivy-303dc.appspot.com",
    messagingSenderId: "56905202208",
    appId: "1:56905202208:web:c22a8b953a3807634b1a45",
    measurementId: "G-70LZR22V44"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export {storage, firebase as default};