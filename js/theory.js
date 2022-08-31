//callback

// function f1(callback) {
//   setTimeout(function () {
//     console.log('1 :>> ', 1);
//     callback();
//   }, 500);
// }

// function f2() {
//   console.log('2 :>> ', 2);
// }

// f1(f2);
//f2();

// Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

// Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.

//Інлайн колбеки

// function f1(payload, callback) {
//   callback(payload);
// }

// f1('Hello world!', function (payload) {
//   console.log('payload :>> ', payload);
// });

//Декілька колбеків

// function f1(callback1, callback2) {
//   if (false) callback1();
//   else callback2();
// }

// function f2() {
//   console.log('f2 :>> ');
// }

// function f3() {
//   console.log('f3 :>> ');
// }

// f1(f2, f3);

//Метод forEach

const numbers = [1, 5, 6, 7, 85, 92];

let total = 0;

// numbers.forEach(function (item, index, arr) {
//   console.log('item :>> ', item);
//   console.log('index :>> ', index);
//   console.log('arr :>> ', arr);
//   console.log('=====================================:>> ');
// });

function sum(item) {
  total += item;
}

numbers.forEach(sum);

console.log('total :>> ', total);

// numbers.forEach(function (item) {
//   total += item;
// });

// console.log('total :>> ', total);

//Стрілочні функції

// function f1() {

// }

// const f1 = function () {};

// const f1 = (a, b) => a + b;
// const f1 = (a, b) => {
//   return a + b;
// };

// const f1 = name => console.log(` Привіт, ${name}`);
// const f2 = () => console.log(` Привіт, Poly`);
// // console.log('f1(52, 14) :>> ', f1(52, 14));
// f1('Poly');
//Неявне повернення
// const f1 = (a, b) => a + b;
//Псевдомасив arguments

// const f1 = (a, b, c, ...args) => {
//   // console.log('arguments :>> ', arguments);
//   console.log('args :>> ', args);
// };
// f1(25, 24, 26, 25, 85, 45);
//Стрілочні функції як колбеки

// numbers.forEach(item => (total += item));

// numbers.forEach(item => {
//   total += item;
// });

// console.log('total :>> ', total);
//Імперативний vs декларативний

//Імперативний
// const filterArr = (arr = []) => {
//   const result = [];
//   const length = arr.length;
//   for (let i = 0; i < length; i += 1) {
//     if (arr[i] > 50) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

//декларативний
// const filterArr = (arr = []) => arr.filter(item => item > 50);

// console.log(filterArr([25, 58, 47, 100, 85]));
