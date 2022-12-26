import { getData, sendData, deleteData, updateData } from "./api";
import { createCard } from "./markup";
import { contactRef, formRef } from "./refs";

console.dir("contactRef :>> ", contactRef);

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

// import "./theory";

getData()
  .then((response) => {
    const markup = createCard(response);
    updateContactsList(markup);
  })
  .catch((error) => {
    console.log("error :>> ", error);
  });

const updateContactsList = (markup = "") => {
  contactRef.insertAdjacentHTML("beforeend", markup);
};

const createDataContact = (elements = []) => {
  const data = {};
  Array.from(elements).forEach(({ name, value }) => {
    if (value) {
      data.createdAt = Date.now();
      data[name] = value;
    }
  });
  return data;
};

const onSubmit = (e) => {
  e.preventDefault();

  const { elements } = e.target;
  const data = createDataContact(elements);

  sendData(data)
    .then((response) => {
      const markup = createCard([response]);
      updateContactsList(markup);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    })
    .finally(() => e.target.reset());
};

const onDeleteItem = (e) => {
  const t = e.target;
  if (!t.classList.contains("btn-close")) {
    return;
  }
  const parent = t.closest(".js-wrap-card");
  const cardId = parent.dataset.cardid;
  deleteData(cardId)
    .then((response) => {
      console.log("response :>> ", response);
      parent.remove();
    })
    .catch(console.log);
};

const onInput = (e) => {
  const t = e.target;
  if (!e.target.classList.contains("fw-bold")) {
    return;
  }
  const cardId = t.closest(".js-wrap-card").dataset.cardid;
  updateData(cardId, { name: t.textContent })
    .then(console.log)
    .catch(console.log);
};

formRef.addEventListener("submit", onSubmit);
contactRef.addEventListener("input", onInput);
contactRef.addEventListener("click", onDeleteItem);
