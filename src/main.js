import { getData, sendData, deleteData, updateData } from "./api";
import { listRef, formRef } from "./refs";
import { createMarkup } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

function onSubmit(e) {
  e.preventDefault();
  const value = e.target.message.value.trim();
  if (!value) return;

  const data = createDataObj(value);
  sendData(data)
    .then((response) => {
      const markup = createMarkup([response]);
      addMarkup(markup);
    })
    .catch(console.log);
  e.target.reset();
}

(function () {
  getData()
    .then((response) => {
      if (!response.length) return;
      const markup = createMarkup(response);
      addMarkup(markup);
    })
    .catch(console.log);
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

function onClick(e) {
  if (e.target.tagName !== "BUTTON") return;
  const { id, parentRef } = getParentId(e);
  deleteData(id)
    .then((response) => {
      console.log(response);
      parentRef.remove();
    })
    .catch(console.log);
}

function onClickText(e) {
  if (e.target.tagName !== "P") return;
  const { id, parentRef } = getParentId(e);
  const flag = parentRef.classList.contains("checked");
  updateData(id, { checked: !flag })
    .then(({ checked }) => {
      const method = checked ? "add" : "remove";
      parentRef.classList[method]("checked");
    })
    .catch(console.log);
}

listRef.addEventListener("click", onClick);
listRef.addEventListener("click", onClickText);
formRef.addEventListener("submit", onSubmit);
