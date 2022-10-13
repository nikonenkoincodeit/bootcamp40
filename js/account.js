const formRef = document.querySelector('.js-form');
const listRef = document.querySelector('.js-list');
const totalAmountRef = document.querySelector('.js-total-amount');

let total = 0;

formRef.addEventListener('submit', e => {
  e.preventDefault();
  const value = +e.target.elements.amount.value;
  const element = createMarkup(value);
  total += value;
  addMarkup(element);
  updateTotal(total);
  //   console.log(e.target.elements.amount.form);
  //   e.target.elements.amount.value = '';
  e.target.reset();
});

function createMarkup(value) {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = value;
  return li;
}

function addMarkup(element) {
  listRef.append(element);
}

function updateTotal(value) {
  totalAmountRef.textContent = value;
}
