import { listRef, formRef } from "../refs/index.js";
import { sendData, getData, saveData } from "../api/index.js";
import { createItem } from "../template/index.js";

function getDataForm(e) {
  //   const obj = {};
  //   Array.from(elements).forEach((item) => {
  //     if (item.tagName === "INPUT") obj[item.name] = item.value.trim();
  //   });
  //   console.log("obj :>> ", obj);
  //   console.log("Array.from(elements) :>> ", Array.from(elements));

  e.preventDefault();
  const {
    elements: { name: inputRef },
  } = e.target;

  const value = inputRef.value.trim();

  if (!value) return;
  const data = createObjTask(value);
  const markup = createItem(data);
  addMarkup(markup);
  sendData(data);
  e.target.reset();
}

function createObjTask(value = "") {
  return { value, checked: false, id: Date.now() };
}

function addMarkup(markup = "") {
  listRef.innerHTML += markup;
}

function createListTask(data = []) {
  const markup = data.map(createItem).join("");
  addMarkup(markup);
}

(function () {
  const data = getData();
  if (!data.length) return;
  createListTask(data);
})();

function getDataParent(e) {
  const parent = e.target.closest(".js-item");
  const idTask = parent.dataset.id;
  return { parent, idTask };
}

function removeTask(e) {
  if (e.target.tagName !== "BUTTON") return;
  const { parent, idTask } = getDataParent(e);
  const data = getData().filter(({ id }) => id !== +idTask);
  if (!data.length) return;
  saveData(data);
  parent.remove();
}

function updateTask(e) {
  if (e.target.tagName !== "P") return;
  const { parent, idTask } = getDataParent(e);
  const tasks = getData();
  const data = tasks.find(({ id }) => id === +idTask);
  if (!data) return;
  const checked = parent.querySelector(".text").classList.toggle("checked");

  const upData = tasks.map((task) => {
    if (task.id === +idTask) {
      return { ...task, checked };
    }
    return task;
  });
  saveData(upData);
}

formRef.addEventListener("submit", getDataForm);
listRef.addEventListener("click", removeTask);
listRef.addEventListener("click", updateTask);
