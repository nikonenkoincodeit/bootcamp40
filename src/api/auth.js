import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  getAuth,
  signOut,
} from "firebase/auth";

import { firebaseConfig } from "../firebase-config";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const onSignInWithPopup = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const onSignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out :>> ");
    })
    .catch((error) => {
      // An error happened.
    });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("user 1:>> ", user);
    // ...
  } else {
    console.log("user 2:>> ", user);
    // User is signed out
    // ...
  }
});
