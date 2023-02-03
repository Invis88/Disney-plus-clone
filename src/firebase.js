// import firebase from './firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAgNqgSG-bMZnHwXgKgEbySM9KGHt7mYRI",
  authDomain: "disneyplus-2cdcb.firebaseapp.com",
  projectId: "disneyplus-2cdcb",
  storageBucket: "disneyplus-2cdcb.appspot.com",
  messagingSenderId: "198631748504",
  appId: "1:198631748504:web:2cbf9f873d22eb7b4a31ed",
  measurementId: "G-HQC038FLTK"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
export default db;