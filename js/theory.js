//Події
//Подія - це сигнал від браузера про те, що на веб-сторінці щось відбулося.
//Події використовуються для реакції на дії користувача і виконання коду,
//пов'язаного з певною подією.

//список події
//https://www.mousedc.ru/learning/131-spisok-sobytiya-javascript/

// Є три способи призначення обробників подій:
// Атрибут HTML: onclick="...".
// function onClick() {
//   console.log('111 :>> ', 111);
// }

// DOM-властивість: elem.onclick=function.

// const btn = document.querySelector('.js-btn');
// btn.onclick = function () {
//   console.log('111 :>> ', 111);
// };

// Спеціальні методи: element.addEventListener(event, handler, [options]);
// const btn = document.querySelector('.js-btn');

// btn.addEventListener('click', () => {
//   console.log('1111 :>> ', 1111);
// });

//Метод  element.addEventListener(event, handler, [options]);
//options Додатковий об'єкт із властивостями:
//-once: якщо true, тоді обробник буде автоматично видалено після виконання.

//-capture: фаза, на якій повинен спрацювати обробник

//-passive: якщо true, то вказує, що обробник ніколи не викличе preventDefault()

// const btn = document.querySelector('.js-btn');
// const linkRef = document.querySelector('.js-link');

// function foo() {
//   console.log('1111 :>> ', 1111);
// }

// btn.addEventListener('click', foo);

// linkRef.addEventListener(
//   'click',
//   e => {
//     e.preventDefault();
//     console.log('1111 :>> ', 1111);
//   },
//   { passive: true },
// );

// Метод removeEventListener()

// setTimeout(() => {
//   console.log('remove :>> ');
//   btn.removeEventListener('click', foo);
// }, 3000);

//Об'єкт події
//e, evt або event
//event.type - тип події.
//event.clientX / event.clientY - Координати курсору в момент кліка щодо вікна для подій миші.
//event.currentTarget - елемент, на якому виконується обробник події.

// const btn = document.querySelector('.js-btn');

// function foo(e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// }

// btn.addEventListener('click', foo);

// const listRef = document.querySelector('.js-list');

// function foo(e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// }

// listRef.addEventListener('click', foo);

//Ключове слово this

// const listRef = document.querySelector('.js-list');

// function foo(e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log('this ', this);
// }

// listRef.addEventListener('click', foo);

//Дії браузера за замовчуванням

// const linkRef = document.querySelector('.js-link');

// function foo(e) {
//   e.preventDefault();
//   console.log(e.target);
// }

// linkRef.addEventListener('click', foo);

// const formRef = document.querySelector('.js-form');

// function foo2(e) {
//   e.preventDefault();
//   console.log(e.target);
// }

// formRef.addEventListener('submit', foo2);

//Події клавіатури keydown і keyup

// document.addEventListener('keydown', () => {
//   console.log('keydown :>> ');
// });

// document.addEventListener('keyup', () => {
//   console.log('keyup :>> ');
// });

//Властивості key і code
//- key повертає символ, згенерований натисканням клавіші
//- code повертає код фізичної клавіші на клавіатурі і не залежить від мови.
//Властивість event.key - це символ, і він може відрізнятися. Але event.code завжди буде той самий.

// Літерні клавіші мають коди на кшталт "Key<літера>": "KeyA", "KeyB" і т.д.
// Коди числових клавіш будуються за принципом: "Digit<число>": "Digit0", "Digit1" і т.д.
// Код спеціальних клавіш - це їхнє ім'я: "Enter", "Backspace", "Tab" і т.д.

// document.addEventListener('keydown', e => {
//   console.log(e.key);
// });

// document.addEventListener('keydown', e => {
//   console.log(e.code);
// });

//Клавіші-модифікатори
//Для обробки комбінації клавіш, наприклад Ctrl + s або будь-якої іншої, на об'єкті події
//є властивості ctrlKey, altKey, shiftkey і metaKey, що зберігають булеве значення, яке
//сигналізує про те, чи була затиснута клавіша-модифікатор.

// document.addEventListener('keydown', e => {
//   console.log('e.ctrlKey :>> ', e.ctrlKey);
//   console.log('e.code:>> ', e.code);

//   if ((e.ctrlKey && e.code === 'KeyL') || e.code === 'ControlRight') {
//     alert('Hello world!');
//   }
// });

//Події елементів форм

//Подія submit

const formRef = document.querySelector('.js-form');
// formRef.addEventListener('submit', e => {
//   e.preventDefault();
//   const { number, password } = e.target.elements;
//   const numVal = number.value.trim();
//   const pasVal = password.value.trim();
//   console.log(numVal, pasVal);
//   e.target.reset();
// });

// formRef.addEventListener('submit', e => {
//   e.preventDefault();
//   const data = {};
//   const formData = new FormData(e.target);
//   formData.forEach((value, key) => {
//     data[key] = value;
//   });
//   console.log('data :>> ', data);
//   //   console.log('formData :>> ', formData);
//   e.target.reset();
// });

//Подія input
// const formData = {};
// formRef.addEventListener('input', e => {
//   console.log('e.type :>> ', e.type);
//   formData[e.target.name] = e.target.value.trim();
//   console.log('formData :>> ', formData);
// });

//Подія focus
// formRef.password.addEventListener('focus', () => {
//   console.log('focus :>> ');
// });
//Подія change і blur
// formRef.password.addEventListener('change', () => {
//   console.log('change :>> ');
// });

// formRef.password.addEventListener('blur', () => {
//   console.log('blur :>> ');
// });
