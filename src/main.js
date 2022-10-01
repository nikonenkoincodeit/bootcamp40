import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { formRef, listRef } from "./refs";
import { saveMessage, getMessage, saveData } from "./service";
import { createData } from "./utils";
import { createMarkup } from "./markup";

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    message: { value },
  } = formRef.elements;

  const inputValue = value.trim();

  if (!inputValue) {
    return;
  }
  const data = createData(inputValue);
  saveMessage(data);
  addMarkup(createMarkup([data]));
  formRef.reset();
});

listRef.addEventListener("click", (event) => {
  //console.log(event.target.tagName);
  if (event.target.tagName === "BUTTON") {
    //console.log(event.target.parentNode.dataset.id);
    //console.log(event.target.closest(".item").dataset.id);
    const liRef = event.target.closest(".item");
    const dataAttr = liRef.dataset.id;
    liRef.remove();
    const data = getMessage();
    const filterData = data.filter(({ id }) => id !== Number(dataAttr));
    saveData(filterData);
  }
});

function init() {
  const data = getMessage();
  addMarkup(createMarkup(data));
  console.log(data);
}

function addMarkup(markup) {
  listRef.insertAdjacentHTML("beforeend", markup);
}

init();
