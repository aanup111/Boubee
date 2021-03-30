import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAJtkCjgcvb4DdShf03b9MXWIXGuyDf058",
    authDomain: "boubee-34260.firebaseapp.com",
    projectId: "boubee-34260",
    storageBucket: "boubee-34260.appspot.com",
    messagingSenderId: "436386564394",
    appId: "1:436386564394:web:0340c97e53d1afbbb23653"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };