import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';


export const app = firebase.initializeApp({
    apiKey: "AIzaSyBWx9WTIwC_O9YGJAsSzjI13Tn9RAho38c",
    authDomain: "react-chat-4cde3.firebaseapp.com",
    databaseURL: "https://react-chat-4cde3.firebaseio.com",
    projectId: "react-chat-4cde3",
    storageBucket: "react-chat-4cde3.appspot.com",
    messagingSenderId: "626837370592",
    appId: "1:626837370592:web:c4ba37366565bc263e4285",
    measurementId: "G-D4DGTP7J0Z"
  })
