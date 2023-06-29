import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC-QUMYi9OQke-PzzIUoYHEt4vPa9i34UE",
    authDomain: "weight-tracker-602f2.firebaseapp.com",
    projectId: "weight-tracker-602f2",
    storageBucket: "weight-tracker-602f2.appspot.com",
    messagingSenderId: "702441902875",
    appId: "1:702441902875:web:e2ecd48de9f043b72839be"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth(); // Export the auth object

export default firebase;