// Imports:
import { account } from './account.js';
import { Transaction } from './options.js';

//'bg-danger', 'bg-success'
//deposit, withdraw

// Variables:

const liveAlertPlaceholderRef = document.querySelector(
  '.js-liveAlertPlaceholder',
);
const totalBalanceRef = document.querySelector('.js-total-balance');
const totalDepositRef = document.querySelector('.js-total-deposit');
const totalWithdrawRef = document.querySelector('.js-total-withdraw');
const formRef = document.querySelector('.js-form');
const historyListRef = document.querySelector('.js-history-list');
const textRef = document.querySelector('.js-text');
// Listeners:
formRef.addEventListener('submit', onSubmit);
// Functions:

function onSubmit(e) {
  e.preventDefault();
  const { operation, amount } = this.elements;
  const operationVal = operation.value;
  const amountVal = amount.valueAsNumber;

  if (!operationVal || !amountVal) {
    return alert('Треба заповнити всі поля!');
  }

  if (amountVal > 0) {
    account.deposit({ amount: amountVal, operationVal });
  } else {
    account.withdraw({ amount: amountVal, operationVal });
  }

  totalBalanceRef.textContent = account.getBalance();
  totalDepositRef.textContent = account.getTransactionTotal(
    Transaction.DEPOSIT,
  );
  totalWithdrawRef.textContent = account.getTransactionTotal(
    Transaction.WITHDRAW,
  );
  const alertMarkup = createAlert();
  const liMarkup = createList(operationVal, amountVal);
  addMarkup(liveAlertPlaceholderRef, alertMarkup);
  addMarkup(historyListRef, liMarkup);
  textRef.style.display = 'none';
  this.reset();
}

function createAlert() {
  return `<div class="alert alert-success alert-dismissible fade show text-center" role="alert">
                <div>Транзакція успішна!</div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
}

function createList(type, amount) {
  console.log('type :>> ', type);
  return `<li
        class="list-group-item d-flex align-items-center justify-content-between text-capitalize border border-1 rounded px-4 py-2 text-dark bg-opacity-10 mb-3 ${
          type === 'deposit' ? 'bg-success' : 'bg-danger'
        }">
            <span class="fs-5">Operation ${type}</span>
            <span class="fs-5">Amount ${amount} &#8372;</span>
        </li>`;
}

function addMarkup(elem, markup) {
  elem.insertAdjacentHTML('beforeend', markup);
}
