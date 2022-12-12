//_.throttle
// Variables
const btnRef = document.querySelector('.js-button');
// const bodyRef = document.querySelector('body');
const bodyRef = document.body;
// Listeners
btnRef.addEventListener('click', _.throttle(updateBCpages, 300));
window.addEventListener('scroll', _.throttle(updateBCpages, 500));
// Functions

function updateBCpages() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
