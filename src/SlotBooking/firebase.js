import firebase from "firebase/app";
import "@firebase/firestore";
import "@firebase/storage";
import "firebase/database";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyA8AMOxZYlf1LpfHJmaJhedkcWXcHxvVzg",
  authDomain: "dumpit-750b0.firebaseapp.com",
  databaseURL: "https://dumpit-750b0.firebaseio.com",
  projectId: "dumpit-750b0",
  storageBucket: "dumpit-750b0.appspot.com",
  messagingSenderId: "919171171331",
  appId: "1:919171171331:web:350366efb8d2d0385aba36",
  measurementId: "G-ZT9S9FTR3B"
};
export const session_type = firebase.auth.Auth.Persistence.LOCAL;

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();
export default app.database().ref();
