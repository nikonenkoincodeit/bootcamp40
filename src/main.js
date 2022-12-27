import { getData, sendData, deleteData, updateData } from "./api";
import { createCard } from "./markup";
import { contactRef, formRef } from "./refs";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

// import "./theory";

async function init() {
  // getData()
  //   .then((response) => {
  //     const markup = createCard(response);
  //     updateContactsList(markup);
  //   })
  //   .catch((error) => {
  //     console.log("error :>> ", error);
  //   });

  // const updateContactsList = (markup = "") => {
  //   contactRef.insertAdjacentHTML("beforeend", markup);
  // };

  try {
    const response = await getData();
    const markup = createCard(response);
    updateContactsList(markup);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

init();

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

const onSubmit = async (e) => {
  e.preventDefault();

  try {
    const { elements } = e.target;

    const data = createDataContact(elements);
    const response = await sendData(data);
    const markup = createCard([response]);
    updateContactsList(markup);
  } catch (error) {
    console.log("error :>> ", error);
  } finally {
    e.target.reset();
  }

  // sendData(data)
  //   .then((response) => {
  //     const markup = createCard([response]);
  //     updateContactsList(markup);
  //   })
  //   .catch((error) => {
  //     console.log("error :>> ", error);
  //   })
  //   .finally(() => e.target.reset());
};

const onDeleteItem = async (e) => {
  const t = e.target;
  if (!t.classList.contains("btn-close")) {
    return;
  }

  try {
    const parent = t.closest(".js-wrap-card");
    const cardId = parent.dataset.cardid;
    await deleteData(cardId);
    parent.remove();
  } catch (error) {
    console.log("error :>> ", error);
  }
};

const onInput = async (e) => {
  const t = e.target;
  if (!e.target.classList.contains("fw-bold")) {
    return;
  }

  try {
    const cardId = t.closest(".js-wrap-card").dataset.cardid;
    await updateData(cardId, { name: t.textContent });
  } catch (error) {
    console.log("error :>> ", error);
  }
};

formRef.addEventListener("submit", onSubmit);
contactRef.addEventListener("input", onInput);
contactRef.addEventListener("click", onDeleteItem);
