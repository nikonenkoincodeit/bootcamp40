import { listRef, formRef, loginBtnRef, signOutBtnRef } from "./refs";
import { createMarkup } from "./markup";
import { sendData, getData, deleteItem, updateItem } from "./api";
import { onSignInWithPopup, onSignOut } from "./api/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

async function onSubmit(e) {
  e.preventDefault();
  const value = e.target.message.value.trim();
  if (!value) return;

  try {
    const data = createDataObj(value);
    sendData(data);
    const markup = createMarkup([data]);
    addMarkup(markup);
  } catch (error) {
    console.log(error);
  }

  e.target.reset();
}

getData()
  .then((response) => {
    const array = [];
    Object.entries(response).forEach(([key, value]) => {
      value.id = key;
      array.push(value);
    });
    const markup = createMarkup(array);
    addMarkup(markup);
  })
  .catch((error) => {
    console.log("error :>> ", error);
  });

// (async function () {})();

function createDataObj(value) {
  return { value, checked: false };
}

function addMarkup(markup = "") {
  listRef.insertAdjacentHTML("beforeend", markup);
}

function getParentId(e) {
  const parentRef = e.target.closest("li");
  const id = parentRef.dataset.id;
  return { id, parentRef };
}

function onClick(e) {
  if (e.target.tagName !== "BUTTON") return;

  try {
    const { id, parentRef } = getParentId(e);
    parentRef.remove();
    deleteItem(id);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

async function onClickText(e) {
  if (e.target.tagName !== "P") return;

  try {
    const { id, parentRef } = getParentId(e);
    const checked = parentRef.classList.toggle("checked");

    updateItem(id, checked);
  } catch (error) {
    console.log("error :>> ", error);
  }
}
// console.log(loginBtnRef);

signOutBtnRef.addEventListener("click", onSignOut);
loginBtnRef.addEventListener("click", onSignInWithPopup);
listRef.addEventListener("click", onClick);
listRef.addEventListener("click", onClickText);
formRef.addEventListener("submit", onSubmit);
