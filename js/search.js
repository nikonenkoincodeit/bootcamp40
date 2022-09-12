//_.debounce
// Imports
import { contacts } from './data/contacts.js';

// Variables
const inputRef = document.querySelector('.js-input');
const contactsListRef = document.querySelector('.js-contacts-list');

//1) leading - false, trailing - true: за замовчуванням функція буде викликатись тільки після
//того, як затримка закінчиться

//2) leading - true, trailing - true: викликається, коли починається затримка,
//і буде викликатись після її закінчення.

//3) leading - true, trailing - false: викликається лише на початку затримки.
// Listeners

inputRef.addEventListener(
  'input',
  _.debounce(onInput, 1000, {
    leading: true,
    trailing: false,
  }),
);
// Run Functions

function start(contacts) {
  console.log('start :>> ');
  const markup = createMarkup(contacts);
  addMarkup(markup);
}

start(contacts);

// Functions

function onInput(e) {
  const value = e.target.value.trim();

  if (!value) {
    start(contacts);
    return;
  }
  const data = filterData(contacts, value);
  start(data);
}

function filterData(array = [], value) {
  return array.filter(({ name }) =>
    name.toUpperCase().includes(value.toUpperCase()),
  );
}

function addMarkup(markup = '') {
  contactsListRef.innerHTML = markup;
}

function createMarkup(array = []) {
  return array
    .map(({ name, rating }) => {
      return `<li
        class="list-group-item d-flex justify-content-between align-items-center"
        >
        <span class="fw-bold flex-grow-1 ms-3">${name}</span>
        <span class="badge bg-primary rounded-pill">${rating}</span>
        </li>`;
    })
    .join('');
}
