// Imports:
import { account } from './account.js';
import { Transaction } from './options.js';

//'bg-danger', 'bg-success'
//deposit, withdraw

// Variables:
const historyListRef = document.querySelector('.js-history-list');
const liveAlertPlaceholderRef = document.querySelector(
  '.js-liveAlertPlaceholder',
);
const totalBalanceRef = document.querySelector('.js-total-balance');
const totalDepositRef = document.querySelector('.js-total-deposit');
const totalWithdrawRef = document.querySelector('.js-total-withdraw');
const formRef = document.querySelector('.js-form');

// Listeners:
formRef.addEventListener('submit', onSubmit);
// Functions:

function onSubmit(e) {
  e.preventDefault();
  const { operation, amount } = e.target.elements;

  const operationVal = operation.value;
  const amountVal = amount.valueAsNumber;

  if (!operationVal || !amountVal) {
    return alert('Треба заповнити всі поля!');
  }

  if (operationVal === 'deposit') {
    account.deposit({ amount: amountVal, operation: 'deposit' });
  } else {
    account.withdraw({ amount: amountVal, operation: 'withdraw' });
  }

  totalBalanceRef.textContent = account.getBalance();
  totalDepositRef.textContent = account.getTransactionTotal(
    Transaction.DEPOSIT,
  );
  totalWithdrawRef.textContent = account.getTransactionTotal(
    Transaction.WITHDRAW,
  );

  const alertMarkup = createAlert();
  const itemMarkup = createItem(amountVal, operationVal);
  addMarkup(liveAlertPlaceholderRef, alertMarkup);
  addMarkup(historyListRef, itemMarkup);
  setTimeout(() => {
    liveAlertPlaceholderRef.innerHTML = '';
  }, 3000);
  console.log(account);
  e.target.reset();
}

function createAlert() {
  return `  <div class="alert alert-success alert-dismissible fade show text-center" role="alert">
  <div>Транзакція успішна!</div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
}

function createItem(amount, type) {
  return `<li
  class="list-group-item d-flex align-items-center justify-content-between text-capitalize border border-1 rounded px-4 py-2 text-dark bg-opacity-10 mb-3 ${
    type === 'deposit' ? 'bg-success' : 'bg-danger'
  }">
  <span class="fs-5">Operation: ${type} </span>
  <span class="fs-5">Amount ${amount} &#8372;</span>
</li>`;
}

function addMarkup(element, markup) {
  element.insertAdjacentHTML('beforeend', markup);
}
