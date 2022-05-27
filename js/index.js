// Imports:
import { account } from './account.js';
import { Transaction } from './options.js';

// Variables:
const totalBalance = document.querySelector('.js-total-balance');
const totalDeposit = document.querySelector('.js-total-deposit');
const totalWithdraw = document.querySelector('.js-total-withdraw');
const form = document.querySelector('.js-form');
const historyList = document.querySelector('.js-history-list');
const alertPlaceholder = document.querySelector('#liveAlertPlaceholder');

// Listeners:
form.addEventListener('submit', handlerSubmit);

// Functions:
function handlerSubmit(event) {
  // обробник події submit
  event.preventDefault();

  // отримання даних з форми
  const operation = form.elements.operation.value.trim();
  const amount = Number(form.elements.amount.value);

  // перевірка даних
  if (operation === '' || amount === '')
    return showNotification('Всі поля потрібно заповнити!', 'danger');

  // виконання операції за вибраним типом
  if (amount < 0) {
    //TODO
    account.withdraw({ operation, amount });
  } else {
    account.deposit({ operation, amount });
  }

  // рендер балансу
  totalBalance.textContent = account.getBalance();
  totalDeposit.textContent = account.getTransactionTotal(Transaction.DEPOSIT);
  totalWithdraw.textContent = account.getTransactionTotal(Transaction.WITHDRAW);

  // рендер транзакцій
  renderMarkup();

  // повідомлення про успішну операцію
  showNotification('Транзакція успішна!', 'success');

  // очистка форми
  form.reset();
}
function renderMarkup() {
  // створення розмітки карточки транзакції
  historyList.innerHTML = '';

  const markup = account.transactions
    .map(
      ({ operation, amount }) => /* html */ `
        <li
          class="list-group-item d-flex align-items-center justify-content-between text-capitalize border border-1 rounded px-4 py-2 text-dark bg-opacity-10 mb-3 ${
            amount < 0 ? 'bg-danger' : 'bg-success'
          }"
        >
            <span class="fs-5">${operation}</span>
            <span class="fs-5">${amount} &#8372;</span>
        </li>
  `,
    )
    .join('');

  historyList.insertAdjacentHTML('beforeend', markup);
}
function showNotification(message, type) {
  // створення повідомлення (взяли готове рішення з bootstrap)
  const wrapper = document.createElement('div');

  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible fade show text-center" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder.append(wrapper);
}
