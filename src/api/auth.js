import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { showUserChat, hiddenUserChat } from "../main";

const auth = getAuth();

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
    .then(() => {})
    .catch((error) => {
      // An error happened.
    });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    showUserChat(user);
    // ...
  } else {
    hiddenUserChat(null);
    // User is signed out
    // ...
  }
});
