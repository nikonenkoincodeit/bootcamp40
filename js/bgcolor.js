//_.throttle
// Variables
const bodyRef = document.body;
const btnRef = document.querySelector('.js-button');
console.log('bodyRef :>> ', bodyRef);
// Listeners
btnRef.addEventListener('click', _.throttle(onClickBtn, 500));
// Functions
console.log('bodyRef.style :>> ', bodyRef.style);
let counter = 0;
function onClickBtn() {
  console.log(Date.now());
  console.log(counter);
  counter += 1;
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
