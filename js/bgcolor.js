//_.throttle
// Variables

const buttonRef = document.querySelector('.js-button');
const bodyRef = document.body;
console.log('_.throttle:>> ', _.throttle);
// Listeners
buttonRef.addEventListener('click', _.throttle(onClickBtn, 250));
// Functions
let click = 0;
let flag = true;

function onClickBtn() {
  click += 1;
  bodyRef.style.background = getRandomHexColor();
  if (flag) {
    setTimeout(() => {
      console.log('click :>> ', click);
    }, 1000);
    flag = false;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
