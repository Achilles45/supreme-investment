import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAR1LJ7h0-rOZbrgPmIamsEGnrjMNKNCBU",
  authDomain: "investmenttradefx.firebaseapp.com",
  databaseURL: "https://investmenttradefx.firebaseio.com",
  projectId: "investmenttradefx",
  storageBucket: "investmenttradefx.appspot.com",
  messagingSenderId: "519188465919",
  appId: "1:519188465919:web:1a5cbd09fdb04fa51664ca",
  measurementId: "G-L3RSYTNCQ2"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();