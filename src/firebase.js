import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDlADpQ7Dq0GGe7IEY4iymmnLufLtYC8w4",
    authDomain: "fb-messenger-clone-22a01.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-22a01.firebaseio.com",
    projectId: "fb-messenger-clone-22a01",
    storageBucket: "fb-messenger-clone-22a01.appspot.com",
    messagingSenderId: "298390315488",
    appId: "1:298390315488:web:cd1b89a7059ffa5a9a4b85",
    measurementId: "G-3QMPY6MRYD"
});

const db = firebaseApp.firestore();

export default db;