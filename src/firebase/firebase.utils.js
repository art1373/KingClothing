import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBN9sEy-Pla8SEsoe2CkDpj9PjEszimffI",
  authDomain: "ecommerce-db-d6530.firebaseapp.com",
  databaseURL: "https://ecommerce-db-d6530.firebaseio.com",
  projectId: "ecommerce-db-d6530",
  storageBucket: "",
  messagingSenderId: "326738576148",
  appId: "1:326738576148:web:0b3414eedcf9af88"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
