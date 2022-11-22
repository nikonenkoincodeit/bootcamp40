//Функції
//Функція - це підпрограма, незалежна частина коду, призначена для багаторазового
//виконання конкретної задачі з різними початковими значеннями. Функції дозволяють
//структурувати великі програми, зменшують повторення та ізолюють код.

//Оголошення функції  (function declaration)

// function getData() {
//   console.log('1111 :>> ', 1111);
// }
// getData();
//Параметри та аргументи

// function syHi(name, age) {
//   console.log(`Hello, ${name}`);
// }

// syHi('Poly', 25);
//Повернення значення

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 5));

//Порядок виконання коду

// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// console.log('Лог до виклику функції multiply');
// multiply(2, 3, 5); // Результат множення дорівнює 30
// console.log('Лог після виклику функції multiply');

// Послідовність логів в консолі
// "Лог до виклику функції multiply"
// "Результат множення дорівнює 30"
// "Лог після виклику функції multiply"

//Параметри за замовчуванням

// function syHi(name = 'Poly') {
//   console.log(`Hello, ${name}`);
// }

// syHi('Mango');

// function foo(arr = []) {
//   return arr.map(a => (a += 2));
// }
// console.log(foo());

// function sum(a = 1, b = 1) {
//   return a + b;
// }

// console.log(sum(5, 6));

//Псевдомасив arguments

// function sum() {
//   let total = 0;
//   for (const argument of arguments) {
//     total += argument;
//   }
//   return total;
// }

// console.log(sum(5, 6));
// console.log(sum(5, 6, 54, 78, 4));
// console.log(sum(25, 78, 4));

//Перетворення псевдомасиву
//function sum(...args) {
//1
// const arr = Array.from(arguments);
// console.log('arr :>> ', arr);
// let total = arr.reduce((acc, item) => {
//   return acc + item;
// }, 0);

//2
// let total = [...arguments].reduce((acc, item) => {
//   return acc + item;
// }, 0);

//3
// let total = args.reduce((acc, item) => {
//   return acc + item;
// }, 0);

//   return total;
// }

// console.log(sum(5, 6));
// console.log(sum(5, 6, 54, 78, 4));
// console.log(sum(25, 78, 4));

//Патерн «Раннє повернення»

// function foo(num) {

//   if (num === 1) {
//     console.log('Один');
//     return;
//   }

//   if (num === 2) {
//     console.log('Два');
//     return;
//   }

//   if (num === 3) {
//     console.log('Три');
//     return;
//   }

//   // if (num === 1) {
//   //   console.log('Один');
//   // } else if (num === 2) {
//   //   console.log('Два');
//   // } else if (num === 3) {
//   //   console.log('Три');
//   // }
// }

// foo(2);

//Функціональний вираз
//Функціональний вираз (function expression) - звичайне оголошення змінної, значенням якої
//буде функція. Альтернативний спосіб оголошення функції.
// getData(); //error
// const getData = function () {
//   console.log('111111 :>> ', 111111);
// };
// getData();
//Область видимості

//Область видимості (scope) - механізм, який визначає доступність змінних у коді, що
//виконується.

// const a = 'global';

// if (true) {
//   const b = 'local';

//   console.log('a :>> ', a);
//   console.log('b :>> ', b);

//   if (true) {
//     const c = 'local2';
//     console.log('a :>> ', a);
//     console.log('b :>> ', b);
//     console.log('c :>> ', c);
//   }
//   console.log('c :>> ', c);
// }
// console.log('b :>> ', b);
//Ланцюжок областей видимості (scope chain) - області видимості утворюють ієрархію, за
//якою дочірні області мають доступ до змінних з батьківських областей, але не навпаки.

//Глобальна область видимості
//Змінні, оголошені на найвищому рівні, тобто за межами будь-яких конструкцій на зразок
//if, while, for і функцій, знаходяться в глобальній області видимості і доступні всюди
//після їх оголошення.

//Блокова область видимості
//Змінні, оголошені всередині інструкцій if, for, функцій та інших блоків коду, взятих у
//фігурні дужки {}, знаходяться в блоковій області видимості і доступні тільки всередині
//цього блоку коду або у блоках, вкладених в нього.
