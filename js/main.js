import { formRef, listRef } from "./refs/index.js";
import { addData, getData, updateLocalStorage } from "./api/index.js";
import { createMarkup } from "./markup/index.js";

console.log("111 :>> ", 111);

function onSubmit(e) {
  e.preventDefault();
  //   const value = e.target.elements.name.value;
  const value = e.target.name.value.trim();

  if (!value) return;
  const data = createObjData(value);
  addData(data);
  const markup = createMarkup([data]);
  addMarkup(listRef, markup);
  e.target.reset();
}

function createObjData(value = "") {
  return {
    id: Date.now(),
    value,
    checked: false,
  };
}

function getDataFromLocal() {
  const dataJSON = getData();
  return dataJSON ? JSON.parse(dataJSON) : null;
}

(function () {
  const data = getDataFromLocal();
  if (!data) return;

  const markup = createMarkup(data);
  addMarkup(listRef, markup);
})();

function onClickBtn(e) {
  if (e.target.tagName !== "BUTTON") return;
  const parent = e.target.closest(".item");
  const id = parent.dataset.id;
  console.log("id :>> ", id);
  const filterData = removeData(id);
  updateLocalStorage(filterData);
  parent.remove();
}

function onClickText(e) {
  if (e.target.tagName !== "P") return;
  const parent = e.target.closest(".item");
  const id = parent.dataset.id;
  const data = updateData(id);
  updateLocalStorage(data);
  e.target.classList.toggle("checked");
}

function updateData(objId) {
  const data = getDataFromLocal();
  if (!data) return;
  const obj = data.find(({ id }) => id === Number(objId));
  if (!obj) return;
  obj.checked = !obj.checked;
  return data;
}

function removeData(objId) {
  const data = getDataFromLocal();
  if (!data) return;
  return data.filter(({ id }) => id !== Number(objId));
}

function addMarkup(element, markup = "") {
  element.insertAdjacentHTML("beforeend", markup);
}

formRef.addEventListener("submit", onSubmit);
listRef.addEventListener("click", onClickBtn);
listRef.addEventListener("click", onClickText);
