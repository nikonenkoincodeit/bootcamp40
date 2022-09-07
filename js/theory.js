//Події
//Подія - це сигнал від браузера про те, що на веб-сторінці щось відбулося.
//Події використовуються для реакції на дії користувача і виконання коду,
//пов'язаного з певною подією.

//Метод addEventListener()

// const formRef = document.querySelector('#form');
// const itemsRef = document.querySelectorAll('.js-item');

// itemsRef.forEach(item => item.addEventListener('click', onClick));

// displayRef.onclick = function () {
//   console.log('1111 :>> ', 1111);
// };

//element.addEventListener(event, handler, [options]);

// formRef.addEventListener('submit', onSubmit, { passive: true });

// function onSubmit(e) {
//   console.log('11111 :>> ', 11111);
// }

// function onClick() {
//   console.log('2222 :>> ', 2222);
// }
//options Додатковий об'єкт із властивостями:
//-once: якщо true, тоді обробник буде автоматично видалено після виконання.
//-capture: фаза, на якій повинен спрацювати обробник
//-passive: якщо true, то вказує, що обробник ніколи не викличе preventDefault()

//Метод removeEventListener()

// const removeRef = document.querySelector('.js-remove');
// const displayRef = document.querySelector('.display-6');
// const listRef = document.querySelector('.js-list');

//displayRef.addEventListener('click', onClick);
// displayRef.onclick = onClick;

// removeRef.addEventListener('click', () => {
//   console.log('remove :>> ');
//   //   displayRef.onclick = '';
//   //displayRef.removeEventListener('click', onClick);
// });

//Ключове слово this

// function onClick() {
//   console.log(this);
// }

//Об'єкт події

// function onClick(e) {
//   //   console.log(e);
//   if (e.target.tagName === 'LI') {
//     console.log(e.target.textContent);
//   }
//   //   console.log(e.currentTarget);
// }

//Дії браузера за замовчуванням
//preventDefault().

//Події клавіатури keydown і keyup

// window.addEventListener('keydown', () => {
//   console.log('keydown ');
// });

// window.addEventListener('keyup', () => {
//   console.log('keyup ');
// });
//Властивості key і code
//- key повертає символ, згенерований натисканням клавіші
//- code повертає код фізичної клавіші на клавіатурі і не залежить від мови.
// window.addEventListener('keydown', e => {
//   const code = e.code;
//   const key = e.key;
//   console.log({ code });
//   console.log({ key });
// });
//Події елементів форм

//Подія submit

// const formRef = document.querySelector('#form');
// formRef.addEventListener('submit', e => {
//   e.preventDefault();

//   const formData = new FormData(e.target);
//   console.log(formData);
//   const obj = {};

//   formData.forEach((value, key) => {
//     obj[key] = value;
//   });
//   console.log(obj);
  //   console.dir(e.target);
  //   console.log('e.target.elements :>> ', e.target.elements);
  //   const {
  //     target: {
  //       elements: { operation, amount },
  //     },
  //   } = e;

  // const {
  //   elements: { email, password },
  // } = e.currentTarget;

  //   const { operation, amount } = e.target.elements;
  //   const amount = e.target.elements.amount;

  //   console.log(operation.value.trim(), amount.value.trim());
});

//Подія change

// const amountRef = document.querySelector('.js-operation-amount');

// amountRef.addEventListener('change', e => {
//   console.log('change');
//   // console.log(e.target.value);
// });
// amountRef.addEventListener('blur', e => {
//   console.log('blur');
//   //console.log(e.target.value);
// });
//Подія input
// amountRef.addEventListener('input', e => {
//   console.log('input');
//   console.log(e.target.value);
// });
// const obj = {};

// formRef.addEventListener('input', function (e) {
//   obj[e.target.name] = e.target.value;
//   console.log('e.target.name', e.target.name);
//   console.log('e.target.value', e.target.value);
//   console.log(obj);
// });

//Подія focus і blur

// amountRef.addEventListener('focus', e => {
//   console.log('focus');
// });

// amountRef.addEventListener('blur', e => {
//   console.log('blur');
// });
