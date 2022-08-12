import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { sendData, getData, deleteItem, updateTaskDB } from "./service";
import { createMarkup } from "./markup";
import { formRef, listRef } from "./refs";

function onSubmitForm(e) {
  e.preventDefault();

  const value = e.target.elements.message.value.trim();
  if (!value) return;
  const data = createObjData(value);
  sendData(data)
    .then((res) => {
      const markup = createMarkup(res);
      addMarkup(listRef, markup);
    })
    .catch(console.log);
  console.log("e.target :>> ", value);
}

function createObjData(value) {
  return {
    value,
    checked: false,
  };
}

(function () {
  getData()
    .then((res) => {
      const markup = createListItems(res);
      addMarkup(listRef, markup);
    })
    .catch(console.log);
})();

function createListItems(data) {
  return data.map((item) => createMarkup(item)).join("");
}

function addMarkup(element, markup) {
  element.insertAdjacentHTML("beforeend", markup);
}

function onDeleteBtnClick(event) {
  const t = event.target;

  if (t.classList.contains("text")) {
    const isChecked = t.parentNode.classList.toggle("checked");
    const id = t.parentNode.dataset.id;
    updateTaskDB(id, isChecked).then(console.log).catch(console.log);
    return;
  }

  if (t.classList.contains("button")) {
    t.parentNode.remove();
    const id = t.parentNode.dataset.id;
    console.log("t.parentNode.dataset.id :>> ", t.parentNode.dataset.id);
    deleteItem(id).then(console.log).catch(console.log);
  }
}

listRef.addEventListener("click", onDeleteBtnClick);
formRef.addEventListener("submit", onSubmitForm);
