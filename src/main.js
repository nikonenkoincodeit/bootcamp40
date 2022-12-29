import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { sendData } from "./api";

import { formRef, boxChatRef, btnRef, btnAuthRef, inputFileRef } from "./refs";
import { createObjMessage } from "./utils";
import { onSignInWithPopup, onSignOut } from "./api/auth";
import { createMessage } from "./markup";
import { saveFile } from "./api/storage";

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

export const sendDataToFirebase = (value = "", type, imageURL = "") => {
  const data = createObjMessage(value, user, type, imageURL);
  sendData(data);
};

const onSubmit = (e) => {
  e.preventDefault();
  const value = e.target.mess.value.trim();
  if (!value) return;
  try {
    sendDataToFirebase(value, "message");
    // const data = createObjMessage(value, user, "message");
    // sendData(data);
    e.target.reset();
  } catch (error) {
    alert(error.message);
  }
};

const onClickBtn = (e) => {
  const text = e.target.textContent;
  if (text === "sing in") onSignInWithPopup();
  else onSignOut();
};

const onSaveFile = (e) => {
  saveFile(e.target.files[0]);
};

formRef.addEventListener("submit", onSubmit);
btnAuthRef.addEventListener("click", onClickBtn);
inputFileRef.addEventListener("change", onSaveFile);
