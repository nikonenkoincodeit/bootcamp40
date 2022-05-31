// Imports
import { contacts } from './data/contacts.js';

// Variables
const searchInput = document.querySelector('.js-input');
const contactsList = document.querySelector('.js-contacts-list');

// Listeners
searchInput.addEventListener(
  'input',
  _.debounce(handlerInputSearch, 300, { leading: true, trailing: false }),
);

// Run Functions
renderContacts(contacts);

// Functions
function handlerInputSearch(event) {
  const searchValue = event.target.value.toLowerCase().trim();

  if (!searchValue) return;

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(searchValue),
  );

  renderContacts(filteredContacts);
}

function renderContacts(array) {
  contactsList.innerHTML = '';

  const markup = array
    .map(
      ({ name, rating }) => /* html */ `
          <li
          class="list-group-item d-flex justify-content-between align-items-center"
          >
              <span class="fw-bold flex-grow-1 ms-3">${name}</span>
              <span class="badge bg-primary rounded-pill">${
                rating ? rating : 0
              }</span>
        </li>`,
    )
    .join('');

  contactsList.insertAdjacentHTML('beforeend', markup);
}
/*


*/
