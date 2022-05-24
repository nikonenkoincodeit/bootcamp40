// todo Toggle

/*
 * Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчанням значення властивості on має бути false.
 */

class Toggle {
  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }

  toggle() {
    this.on = !this.on;
  }
}

const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

const button = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');

button.addEventListener('click', event => {
  firstToggle.toggle();
  console.log('firstToggle', firstToggle.on);

  event.target.textContent = firstToggle.on ? 'відкрити' : 'закрити';
});

button2.addEventListener('click', event => {
  secondToggle.toggle();
  console.log('secondToggle.on', secondToggle.on);

  event.target.textContent = secondToggle.on ? 'відкрити' : 'закрити';
});
