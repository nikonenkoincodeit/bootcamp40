import { getData, sendData, deleteData, updateData } from "./api";
import { listRef, formRef, loginBtnRef, signOutBtnRef } from "./refs";
import { createMarkup } from "./markup";
import { onloginUser, signOutUser } from "./api/login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

async function onSubmit(e) {
  e.preventDefault();
  const value = e.target.message.value.trim();
  if (!value) return;

  try {
    const data = createDataObj(value);
    const key = await sendData(data);
    data.id = key;
    const markup = createMarkup([data]);
    addMarkup(markup);
  } catch (error) {
    console.log(error);
  }

  e.target.reset();
}

(async function () {
  const response = await getData();
  const keys = Object.keys(response);
  for (const key of keys) {
    response[key].id = key;
  }
  const data = Object.values(response);
  console.log("data :>> ", data);
  if (!data.length) return;
  const markup = createMarkup(data);
  addMarkup(markup);
})();

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
  const { id, parentRef } = getParentId(e);
  try {
    const response = await deleteData(id);
    parentRef.remove();
  } catch (error) {
    console.log("error :>> ", error);
  }
}

async function onClickText(e) {
  if (e.target.tagName !== "P") return;
  const { id, parentRef } = getParentId(e);
  const flag = parentRef.classList.contains("checked");
  try {
    updateData(id, { checked: !flag });
    const method = !flag ? "add" : "remove";
    parentRef.classList[method]("checked");
  } catch (error) {
    console.log("error :>> ", error);
  }
}
console.log(loginBtnRef);

signOutBtnRef.addEventListener("click", signOutUser);
loginBtnRef.addEventListener("click", onloginUser);
listRef.addEventListener("click", onClick);
listRef.addEventListener("click", onClickText);
formRef.addEventListener("submit", onSubmit);
