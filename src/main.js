import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { sendData } from "./api";

import { formRef, boxChatRef } from "./refs";
import { createObjMessage } from "./utils";
import { onSignInWithPopup, onSignOut } from "./api/auth";

let user = null;

export const showUserChat = (userData) => {
  //sign out
  user = userData;
  console.log("user111 :>> ", user);
};

export const hiddenUserChat = () => {
  //sign in
  user = null;
};

const onSubmit = (e) => {
  e.preventDefault();
  const value = e.target.mess.value.trim();
  if (!value) return;
  try {
    const data = createObjMessage(value, "sdnbnmsdb454547654");
    sendData(data);
    e.target.reset();
  } catch (error) {
    alert(error.message);
  }

  console.log("value :>> ", value);
};

formRef.addEventListener("submit", onSubmit);
