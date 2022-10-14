//Події
//Подія - це сигнал від браузера про те, що на веб-сторінці щось відбулося.
//Події використовуються для реакції на дії користувача і виконання коду,
//пов'язаного з певною подією.

//список події
//https://www.mousedc.ru/learning/131-spisok-sobytiya-javascript/

// Є три способи призначення обробників подій:
// Атрибут HTML: onclick="...".
// DOM-властивість: elem.onclick=function.
// btnRef.onclick = onClick;
// Спеціальні методи: element.addEventListener(event, handler, [options]);

// function onClick() {
//   console.log('1111 :>> ', 1111);
// }

// const btnRef = document.querySelector('.js-btn');
// // btnRef.addEventListener('click', () => {
// //   console.log('2222 :>> ', 2222);
// // });
// btnRef.addEventListener('click', onClick);
//Метод  element.addEventListener(event, handler, [options]);
//options Додатковий об'єкт із властивостями:
//-once: якщо true, тоді обробник буде автоматично видалено після виконання.
// btnRef.addEventListener('click', onClick, { once: true });
//-capture: фаза, на якій повинен спрацювати обробник
// const formRef = document.querySelector('form');
// const divRef = document.querySelector('div');
// const pRef = document.querySelector('p');

// function onClick() {
//   console.log('1111 :>> ', 1111);
// }

// function onClick2() {
//   console.log('22222 :>> ', 22222);
// }

// [formRef, divRef, pRef].forEach(elem => {
//   elem.addEventListener('click', onClick, { capture: true });
//   elem.addEventListener('click', onClick2);
// });

//-passive: якщо true, то вказує, що обробник ніколи не викличе preventDefault()

// const linkRef = document.querySelector('.js-link');

// function onClick(e) {
//   e.preventDefault();
//   console.log('1111 :>> ', 1111);
// }

// linkRef.addEventListener('click', onClick);
// //Метод removeEventListener()

// setTimeout(() => {
//   linkRef.removeEventListener('click', onClick);
// }, 5000);

//Об'єкт події
//e, evt або event
//event.type - тип події.
//event.clientX / event.clientY - Координати курсору в момент кліка щодо вікна для подій миші.
//event.currentTarget - елемент, на якому виконується обробник події.

// const btnRef = document.querySelector('.js-btn');

// function onClick(e) {
//   // e.preventDefault();
//   console.log(e.type);
//   console.log(e.clientX);
//   console.log(e.clientY);
//   console.log(e.target);
//   console.log(e.currentTarget);
// }

// btnRef.addEventListener('click', onClick);
//Ключове слово this

// const btnRef = document.querySelector('.js-btn');

// function onClick(e) {
//   console.log(this);
//   // console.log(e.currentTarget);
// }

// btnRef.addEventListener('click', onClick);

//Дії браузера за замовчуванням
//preventDefault().

// const linkRef = document.querySelector('.js-link');

// function onClick(e) {
//   e.preventDefault();
//   console.log('1111 :>> ', 1111);
// }

// linkRef.addEventListener('click', onClick);

//Події клавіатури keydown і keyup

// document.addEventListener('keydown', event => {
//   console.log('keydown: ', event);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event);
// });

//Властивості key і code
//- key повертає символ, згенерований натисканням клавіші
//- code повертає код фізичної клавіші на клавіатурі і не залежить від мови.
//Властивість event.key - це символ, і він може відрізнятися. Але event.code завжди
//буде той самий.
// document.addEventListener('keydown', event => {
//   // console.log('key: ', event.key);
//   console.log('code: ', event.code);
// });
// Літерні клавіші мають коди на кшталт "Key<літера>": "KeyA", "KeyB" і т.д.
// Коди числових клавіш будуються за принципом: "Digit<число>": "Digit0", "Digit1" і т.д.
// Код спеціальних клавіш - це їхнє ім'я: "Enter", "Backspace", "Tab" і т.д.

//Клавіші-модифікатори
//Для обробки комбінації клавіш, наприклад Ctrl + s або будь-якої іншої, на об'єкті події
//є властивості ctrlKey, altKey, shiftkey і metaKey, що зберігають булеве значення, яке
//сигналізує про те, чи була затиснута клавіша-модифікатор.

// document.addEventListener('keydown', event => {
//   event.preventDefault();
//   console.log('ctrlKey: ', event.ctrlKey);
//   console.log('code: ', event.code);
//   if (event.ctrlKey && event.code === 'KeyR') {
//     alert('Hello world!');
//   }
// });

//Події елементів форм

//Подія submit

// const formRef = document.querySelector('.js-form');

// function onSubmit(e) {
//   e.preventDefault();
//   const { password, number } = this.elements;

// console.log('password :>> ', password);
// console.log('number :>> ', number);
// console.log(number.valueAsNumber);
// console.log('this :>> ', this);
// console.log('e.currentTarget :>> ', e.currentTarget);
// console.log('this.elements :>> ', this.elements);
//   const formDate = new FormData(this);
//   const obj = {};
//   formDate.forEach((value, key) => {
//     obj[key] = value;
//   });
//   console.log(obj);
// }

// formRef.addEventListener('submit', onSubmit);

//Подія focus і blur
const inputRef = document.querySelector('.js-input-number');

inputRef.addEventListener('focus', () => {
  console.log('focus :>> ');
});

inputRef.addEventListener('blur', () => {
  console.log('blur :>> ');
});

//Подія change

inputRef.addEventListener('change', () => {
  console.log('change :>> ');
});
