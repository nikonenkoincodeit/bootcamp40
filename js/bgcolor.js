// Variables
const button = document.querySelector('.js-button');
const body = document.body;

// Listeners
button.addEventListener('click', _.throttle(onBtnClick, 800));

// Functions
function onBtnClick() {
  console.log('click');
  body.setAttribute('style', `background-color:${getRandomHexColor()}`);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
