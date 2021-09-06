import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "proyecto-coffeshop",
    storageBucket: "proyecto-coffeshop.appspot.com",
    messagingSenderId: "385980429856",
    appId: process.env.REACT_APP_APP_ID
  };
  // Initialize Firebase
  const app= firebase.initializeApp(firebaseConfig);

  export function getFirebase(){
      return app
  }

  export function getFirestore(){
      return firebase.firestore(app)
  }