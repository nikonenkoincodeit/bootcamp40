import { getData, sendData, deleteData, updateData } from "./api";
import { listRef, formRef } from "./refs";
import { createMarkup } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

async function onSubmit(e) {
  e.preventDefault();
  const value = e.target.message.value.trim();
  if (!value) return;

  try {
    const data = createDataObj(value);
    const response = await sendData(data);
    const markup = createMarkup([response]);
    addMarkup(markup);
  } catch (error) {
    console.log(error);
  }
  // sendData(data)
  //   .then((response) => {
  //     const markup = createMarkup([response]);
  //     addMarkup(markup);
  //   })
  //   .catch(console.log);
  e.target.reset();
}

(async function () {
  const response = await getData();
  if (!response.length) return;
  const markup = createMarkup(response);
  addMarkup(markup);
  // getData()
  //   .then((response) => {
  //     if (!response.length) return;
  //     const markup = createMarkup(response);
  //     addMarkup(markup);
  //   })
  //   .catch(console.log);
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

  // deleteData(id)
  //   .then((response) => {
  //     console.log(response);
  //     parentRef.remove();
  //   })
  //   .catch(console.log);
}

async function onClickText(e) {
  if (e.target.tagName !== "P") return;
  const { id, parentRef } = getParentId(e);
  const flag = parentRef.classList.contains("checked");
  try {
    const { checked } = await updateData(id, { checked: !flag });
    const method = checked ? "add" : "remove";
    parentRef.classList[method]("checked");
  } catch (error) {
    console.log("error :>> ", error);
  }

  // updateData(id, { checked: !flag })
  //   .then(({ checked }) => {
  //     const method = checked ? "add" : "remove";
  //     parentRef.classList[method]("checked");
  //   })
  //   .catch(console.log);
}

listRef.addEventListener("click", onClick);
listRef.addEventListener("click", onClickText);
formRef.addEventListener("submit", onSubmit);
