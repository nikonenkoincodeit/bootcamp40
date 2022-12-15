// var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// document.getElementById("save_card").addEventListener("click", () => {
//   addFlashcard();
// });

// document.getElementById("delete_cards").addEventListener("click", () => {
//   localStorage.clear();
//   flashcards.innerHTML = '';
//   contentArray = [];
// });

// document.getElementById("show_card_box").addEventListener("click", () => {
//   document.getElementById("create_card").style.display = "block";
// });

// document.getElementById("close_card_box").addEventListener("click", () => {
//   document.getElementById("create_card").style.display = "none";
// });

// flashcardMaker = (text, delThisIndex) => {
//   const flashcard = document.createElement("div");
//   const question = document.createElement('h2');
//   const answer = document.createElement('h2');
//   const del = document.createElement('i');

//   flashcard.className = 'flashcard';

//   question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
//   question.textContent = text.my_question;

//   answer.setAttribute("style", "text-align:center; display:none; color:red");
//   answer.textContent = text.my_answer;

//   del.className = "fas fa-minus";
//   del.addEventListener("click", () => {
//     contentArray.splice(delThisIndex, 1);
//     localStorage.setItem('items', JSON.stringify(contentArray));
//     window.location.reload();
//   })

//   flashcard.appendChild(question);
//   flashcard.appendChild(answer);
//   flashcard.appendChild(del);

//   flashcard.addEventListener("click", () => {
//     if(answer.style.display == "none")
//       answer.style.display = "block";
//     else
//       answer.style.display = "none";
//   })

//   document.querySelector("#flashcards").appendChild(flashcard);
// }

// contentArray.forEach(flashcardMaker);

// addFlashcard = () => {
//   const question = document.querySelector("#question");
//   const answer = document.querySelector("#answer");

//   let flashcard_info = {
//     'my_question' : question.value,
//     'my_answer'  : answer.value
//   }

//   contentArray.push(flashcard_info);
//   localStorage.setItem('items', JSON.stringify(contentArray));
//   flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
//   question.value = "";
//   answer.value = "";
// }

import {
  showCardBoxRef,
  deleteCardsRef,
  formRef,
  flashcardsRef,
} from "./refs/index.js";
import { sendData, removeData, getData, saveData } from "./api/index.js";
import { createCard } from "./template/index.js";

function toggleForm(method) {
  formRef.classList[method]("is-hidden");
}

function addCard(e) {
  e.preventDefault();
  const dataObj = {};
  const formData = new FormData(e.target);
  formData.forEach((value, key) => (dataObj[key] = value.trim()));
  if (!dataObj.question) return;
  dataObj.id = Date.now();
  sendData(dataObj);
  const cardMarkup = createCard([dataObj]);
  updateMarkup(cardMarkup);
  e.target.reset();
}

function deleteCards() {
  updateMarkup();
  removeData();
}

function deleteCard(e) {
  const t = e.target;
  if (!t.classList.contains("js-fa-minus")) return;
  const parent = t.closest(".js-flashcard");
  const cardId = parent.dataset.id;
  parent.remove();

  const filterData = getData().filter(({ id }) => id !== +cardId);
  saveData(filterData);
}

function toggleSubtitle(e) {
  const t = e.target;
  if (!t.classList.contains("js-subtitle")) return;
  t.classList.toggle("is-hide");
}

(function () {
  const items = getData();
  if (!items.length) return;
  const cardMarkup = createCard(items);
  updateMarkup(cardMarkup);
})();

flashcardsRef.addEventListener("click", toggleSubtitle);
flashcardsRef.addEventListener("click", deleteCard);
showCardBoxRef.addEventListener("click", () => toggleForm("remove"));
deleteCardsRef.addEventListener("click", deleteCards);
formRef.addEventListener("submit", addCard);
formRef.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-close_card_box")) {
    toggleForm("add");
  }
});

function updateMarkup(markup = "") {
  if (markup) flashcardsRef.innerHTML += markup;
  else flashcardsRef.innerHTML = "";
}
