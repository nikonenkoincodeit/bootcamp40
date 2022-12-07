const formRef = document.querySelector('.js-form');
const amountRef = document.querySelector('.js-total-amount');
const listRef = document.querySelector('.js-list');
let total = 0;

formRef.addEventListener('submit', e => {
  e.preventDefault();
  const value = formRef.amount.valueAsNumber;
  if (!value) return;

  total += value;
  const item = createItem(value);
  addItem(item);
  updateTotal(total);
  formRef.reset();
});

function updateTotal(total) {
  amountRef.textContent = total;
}

function createItem(value) {
  return `<li class="item">${value}</li>`;
}

function addItem(item) {
  listRef.insertAdjacentHTML('beforeend', item);
}
