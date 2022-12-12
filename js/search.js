//_.debounce
// leading: false,
// trailing: true,

// Imports
import { contacts } from './data/contacts.js';

// Variables
const inputRef = document.querySelector('.js-input');
const listRef = document.querySelector('.js-contacts-list');

// Listeners
inputRef.addEventListener('input', _.debounce(onInput, 3000));
// Run Functions
function init() {
  const markup = createList(contacts);
  addMarkup(markup);
}
init();
// Functions

function getFilterData(value) {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(value.toLowerCase()),
  );
}

function onInput(e) {
  const value = e.target.value.trim();
  let data = [];
  if (!value) {
    data = contacts;
  } else {
    data = getFilterData(value);
  }

  const markup = createList(data);
  addMarkup(markup);
}

function createList(arr = []) {
  return arr
    .map(({ name, rating }) => {
      return ` <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="fw-bold flex-grow-1 ms-3">${name}</span>
      <span class="badge bg-primary rounded-pill">${rating}</span>
    </li>`;
    })
    .join('');
}

function addMarkup(markup = '') {
  listRef.innerHTML = markup;
}
