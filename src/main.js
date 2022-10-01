import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { formRef, listRef } from "./refs";
import { saveMessage, getMessage } from "./service";
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

function init() {
  const data = getMessage();
  addMarkup(createMarkup(data));
  console.log(data);
}

function addMarkup(markup) {
  listRef.insertAdjacentHTML("beforeend", markup);
}

init();
