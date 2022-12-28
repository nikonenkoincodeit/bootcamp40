import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { sendData } from "./api";

import { formRef, boxChatRef, btnRef, btnAuthRef } from "./refs";
import { createObjMessage } from "./utils";
import { onSignInWithPopup, onSignOut } from "./api/auth";
import { createMessage } from "./markup";

let user = null;

const updateBtn = (toggle) => {
  btnRef.disabled = toggle;
  btnAuthRef.textContent = toggle ? "sing in" : "sing out";
};

const addMessagesChat = (markup = "") => {
  boxChatRef.insertAdjacentHTML("beforeend", markup);
};

let sizeItems = null;

export const updateChat = (data) => {
  let items = [];
  if (!sizeItems) {
    sizeItems = data.length;
    items = data;
  } else {
    items = data.slice(sizeItems);
  }
  sizeItems = data.length;
  const markup = createMessage(items, user.uid);
  addMessagesChat(markup);
  data.length = 0;
};

export const showUserChat = (userData) => {
  //sign out
  const { displayName, photoURL, uid } = userData;
  user = { displayName, photoURL, uid };
  // console.log("user :>> ", userData);
  updateBtn(false);
};

export const hiddenUserChat = () => {
  updateBtn(true);
  user = null;
};

const onSubmit = (e) => {
  e.preventDefault();
  const value = e.target.mess.value.trim();
  if (!value) return;
  try {
    const data = createObjMessage(value, user);
    sendData(data);
    e.target.reset();
  } catch (error) {
    alert(error.message);
  }

  console.log("value :>> ", value);
};

const onClickBtn = (e) => {
  const text = e.target.textContent;
  if (text === "sing in") onSignInWithPopup();
  else onSignOut();
};

formRef.addEventListener("submit", onSubmit);
btnAuthRef.addEventListener("click", onClickBtn);
