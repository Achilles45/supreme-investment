import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGIcWts32ikH9Jn4EnYRO3kAJ4USQKrw0",
  authDomain: "supreme-investment.firebaseapp.com",
  databaseURL: "https://supreme-investment.firebaseio.com",
  projectId: "supreme-investment",
  storageBucket: "supreme-investment.appspot.com",
  messagingSenderId: "847296869284",
  appId: "1:847296869284:web:f7f72b6591ac3df424c731",
  measurementId: "G-Q7JF11B9GC"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();