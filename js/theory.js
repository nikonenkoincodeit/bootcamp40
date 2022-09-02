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
  sayHi(hi, a, b, c) {
    console.log('a, b, c :>> ', a, b, c);
    console.log(hi, this.name);
  },
};

let user2 = {
  name: 'Ajax',
  age: 25,
};

// const sayHi = user.sayHi;

// sayHi.call(user2, 'Hello, ', 25, {}, [1, 5,58]);
// sayHi.apply(user2, ['Hello, ', 25, {}, [1, 5, 58]]);

//const sayHi = user.sayHi.bind(user2, 'Hello, ', 25, {}, [1, 5, 58]);
// sayHi();

user.sayHi.bind(user2, 'Hello, ', 25, {}, [1, 5, 58])();

//console.log('sayHi :>> ', sayHi);

// function sayHi() {
//   console.log(this.name);
// }

// sayHi.call(user);
// user.sayHi();
// let user = {
//   name: 'Poly',
//   age: 30,
// };
// user.sayHi = function (hi) {
//   console.log(hi, this.name);
// };
// user.sayHi();
// console.log('user :>> ', user);
//Для доступу до інформації всередині об'єкта метод може використовувати ключове слово this.

//this
//Значення this – це об'єкт перед точкою, який використовувався для виклику методу.

// let user = {
//   name: 'Poly',
//   age: 30,
//   sayHi() {
//     console.log(this.name);
//   },
// };

// user.sayHi();

//this у глобальній області видимості

// console.log('this :>> ', this);

//this в callback-функціях

// function foo(callback) {
//   callback(); //error
// }

//foo(user.sayHi);
//this у стрілочних функціях

//call()

// function foo(callback) {
//   callback.call(user, 'Hello'); //error
// }

// foo(user.sayHi);

//apply() []

// function foo(callback) {
//   callback.apply(user, ['Hello']);
// }

// foo(user.sayHi);

//bind()

// function foo(callback) {
//   callback();
// }

// const sayHi = user.sayHi.bind(user, 'Hello');
// foo(sayHi);

// console.log('this :>> ', this);

// const foo = () => {
//   console.log('this :>> ', this);
// };

// foo();
