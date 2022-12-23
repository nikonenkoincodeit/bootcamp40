import { listRef, formRef, loginBtnRef, signOutBtnRef } from "./refs";
import { createMarkup } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

async function onSubmit(e) {
  e.preventDefault();
  const value = e.target.message.value.trim();
  if (!value) return;

  try {
  } catch (error) {
    console.log(error);
  }

  e.target.reset();
}

(async function () {})();

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

async function onClick(e) {
  if (e.target.tagName !== "BUTTON") return;

  try {
  } catch (error) {
    console.log("error :>> ", error);
  }
}

async function onClickText(e) {
  if (e.target.tagName !== "P") return;

  try {
  } catch (error) {
    console.log("error :>> ", error);
  }
}
// console.log(loginBtnRef);

signOutBtnRef.addEventListener("click", signOutUser);
loginBtnRef.addEventListener("click", onloginUser);
listRef.addEventListener("click", onClick);
listRef.addEventListener("click", onClickText);
formRef.addEventListener("submit", onSubmit);
