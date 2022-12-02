// 'use strict';
// Об'єкти створюються, щоб представляти сутності реального світу,
// будь то користувачі, замовлення тощо

// let user = {
//   name: 'Poly',
//   age: 30,
// };

// І так само, як і в реальному світі, користувач може робити дії: вибирати щось в кошик,
// авторизуватися, оплачувати тощо.
// Такі дії JavaScript представлені властивостями-функціями об'єкта.
let user = {
  name: 'Poly',
  age: 30,
  sayHi(hi) {
    console.log(hi, this.name);
  },
};

//Для доступу до інформації всередині об'єкта метод може використовувати ключове слово this.

//this
//У ширшому значенні контекст — середовище, в якому існує об'єкт (наприклад, «Бібліотека
//і книга в контексті часу»). З формального погляду контекст є певною системою відліку,
//простором імен.

//This - це ключове слово, що використовується в JavaScript, яке має особливе значення,
//що залежить від контексту, в якому воно застосовується.

//This - посилається на поточний об'єкт, до якого прив'язаний метод.

//Контекст виконання функції
//Всередині функцій можна використовувати зарезервоване ключове слово this. Під час
//виконання функції, в this записується посилання на об'єкт, в контексті якого вона була
//викликана. Таким чином, в тілі функції ми можемо отримати доступ до властивостей і
//методів цього об'єкта.

//this у глобальній області видимості

// function foo() {
//   console.log('this :>> ', this);
// }
// foo();

//this в методі об'єкта
//Значення this – це об'єкт перед точкою, який використовувався для виклику методу.

// let user2 = {
//   name: 'Poly',
//   age: 30,
//   sayHi() {
//     console.log(`Hello, ${this.name}`);
//   },
// };

// const sayHi2 = user2.sayHi;
// user2.sayHi();
// sayHi2();

//this в callback-функціях

// let user2 = {
//   name: 'Poly',
//   age: 30,
//   sayHi() {
//     console.log(`Hello, ${this.name}`);
//   },
// };

// function foo(callback) {
//   callback();
// }
// foo(user2.sayHi);
//this у стрілочних функціях

// const foo = () => {
//   console.log('this :>> ', this);
// };

// let user2 = {
//   name: 'Poly',
//   age: 30,
//   // sayHi() {
//   //   console.log(`Hello, ${this.name}`);
//   // },
// };

// user2.foo = foo;
// user2.foo();

//call()

// let user2 = {
//   name: 'Poly',
//   age: 30,
//   sayHi(text) {
//     console.log('text :>> ', text);
//     console.log(`Hello, ${this.name}`);
//   },
// };

// function foo(callback) {
//   callback.call(user2, 'Hello world!');
// }
// foo(user2.sayHi);

//apply() []

// let user2 = {
//   name: 'Poly',
//   age: 30,
//   sayHi(text, num) {
//     console.log('num :>> ', num);
//     console.log('text :>> ', text);
//     console.log(`Hello, ${this.name}`);
//   },
// };

// function foo(callback) {
//   callback.apply(user2, ['Hello world!', 222]);
// }
// // foo(user2.sayHi);

// const numbers = [12, 5, 4, 1, 8, 45];

// console.log(Math.min(...numbers));
// console.log(Math.min.apply(null, numbers));

//bind()

// let user2 = {
//   name: 'Poly',
//   age: 30,
//   sayHi(text, num) {
//     console.log('num :>> ', num);
//     console.log('text :>> ', text);
//     console.log(`Hello, ${this.name}`);
//   },
// };

// function foo(callback) {
//   callback();
// }
// foo(user2.sayHi.bind(user2, 'Hello world!', 255));
