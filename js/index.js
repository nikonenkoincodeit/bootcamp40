// Imports
import { account } from './account.js';

// Variables
const form = document.querySelector('.js-form');
const totalAmount = document.querySelector('.js-total-amount');
const list = document.querySelector('.js-list');

// Listeners
form.addEventListener('submit', onSubmit);

// Functions
function onSubmit(event) {
  event.preventDefault();

  const inputValue = parseInt(form.elements.amount.value);

  account.deposit(inputValue);
  totalAmount.textContent = account.balance;

  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = inputValue;

  list.append(item);

  // list.insertAdjacentHTML('beforeend', `<li class="item">${inputValue}</li>`);

  form.reset();
}
