import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2Rjzcn95PtL405jEQYkX-XMh60BOamXA",
  authDomain: "gateway-investment.firebaseapp.com",
  databaseURL: "https://gateway-investment.firebaseio.com",
  projectId: "gateway-investment",
  storageBucket: "gateway-investment.appspot.com",
  messagingSenderId: "203788309952",
  appId: "1:203788309952:web:b5c3958e63592cc0482425",
  measurementId: "G-4C4QMK9WTP"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();