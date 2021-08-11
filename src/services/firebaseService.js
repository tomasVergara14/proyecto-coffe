import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAWdZEa0-gI-V8UQBc_nMNFWA7CKLseG0w",
    authDomain: "proyecto-coffeshop.firebaseapp.com",
    projectId: "proyecto-coffeshop",
    storageBucket: "proyecto-coffeshop.appspot.com",
    messagingSenderId: "385980429856",
    appId: "1:385980429856:web:191fed1d2238fc9ecf2e45"
  };
  // Initialize Firebase
  const app= firebase.initializeApp(firebaseConfig);

  export function getFirebase(){
      return app
  }

  export function getFirestore(){
      return firebase.firestore(app)
  }