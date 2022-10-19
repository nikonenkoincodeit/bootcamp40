//_.debounce
// Imports
import { contacts } from './data/contacts.js';

// Variables
const inputRef = document.querySelector('.js-input');
const contactsListRef = document.querySelector('.js-contacts-list');

// Listeners
inputRef.addEventListener('input', _.debounce(onInput, 1000));
// Run Functions
function init() {
  updateList(contacts);
}
init();
// Functions
function updateList(data = []) {
  const markup = createList(data);
  addMarkup(contactsListRef, markup);
}

function filterData(arr = [], value) {
  return arr.filter(elem =>
    elem.name.toUpperCase().includes(value.toUpperCase()),
  );
}

function onInput(e) {
  const value = this.value.trim();
  if (!value) return updateList(contacts);
  const fData = filterData(contacts, value);
  updateList(fData);
}

function createList(contacts = []) {
  return contacts
    .map(({ name, rating }) => {
      return ` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="fw-bold flex-grow-1 ms-3">${name}</span>
    <span class="badge bg-primary rounded-pill">${rating}</span>
  </li>`;
    })
    .join('');
}

function addMarkup(elem, markup = '') {
  elem.innerHTML = markup;
}
