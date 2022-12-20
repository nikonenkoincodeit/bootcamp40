//MVC (Model—View—Controller)
// view

const resultRef = document.querySelector("#result");
const incrementRef = document.querySelector("#increment");
const decrementRef = document.querySelector("#decrement");

incrementRef.addEventListener("click", onIncrement);
decrementRef.addEventListener("click", onDecrement);

function updateResult() {
  resultRef.textContent = model.value;
}

//model

const model = {
  _value: 0,
  get value() {
    return this._value;
  },
  set value(newValue) {
    this._value = newValue;
    updateResult();
  },
};

//controller

function onDecrement() {
  model.value -= 1;
}

function onIncrement() {
  model.value += 1;
}
