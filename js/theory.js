//Колбек-функції
//Функції не відрізняються від чисел, рядків або масивів - це просто спеціальний тип даних
//(об'єкт вищого порядку), значення, яке можна зберігати у змінній або передавати у якості
//аргументу в іншу функцію.

// function foo() {
//   console.log('Hello world :>> ');
// }

// foo();

// console.log(foo);
// Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції
// як аргумент, а та, в свою чергу, викликає передану функцію.

// function getName(name, callback) {
//   callback(name);
// }

// function syHi(name) {
//   console.log(`Hello, ${name}`);
// }

// getName('Poly', syHi);

//Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів
//інші функції або повертає функцію у якості результату.

//1) функція яка приймає у якості параметрів інші функцію
// function getName(name, callback) {
//   callback(name);
// }

// function syHi(name) {
//   console.log(`Hello, ${name}`);
// }

// getName('Poly', syHi);

//2) коли повертає іншу функцію

// function getCounter() {
//   let counter = 0;
//   return function setCounter() {
//     console.log('counter :>> ', counter);
//     counter += 1;
//   };
// }

// const counter = getCounter();
// counter();
// counter();
// counter();
// counter();
// counter();

//Інлайн колбеки

// function getName(name, callback) {
//   callback(name);
// }

// getName('Poly', function (name) {
//   console.log(`Hello, ${name}`);
// });

//Декілька колбеків

// function foo(onSuccess, onError) {
//   const flag = Math.random() > 0.2;

//   if (flag) onSuccess();
//   else onError();
// }

// function error() {
//   console.log('error :>> ');
// }

// function success() {
//   console.log('success :>> ');
// }

// foo(success, error);

//Абстрагування повторення
//Абстракція - приховування деталей реалізації. Дозволяє думати про задачі на вищому
//(абстрактному) рівні. Функції - це хороший спосіб побудови абстракцій.

// const arr = [25, 65, 89];
// const btn = $('.js-btn');
// console.log('btn :>> ', btn);

// $.each(arr, function (item) {
//   console.log('item :>> ', item);
// });

//Метод forEach

// массив.forEach(function callback(element, index, array) {
//     // Тіло колбек-функції
//   });

//  - Поелементо перебирає масив.
//  - Викликає колбек-функцію для кожного елемента масиву.
//  - Нічого не повертає.

//const numbers = [56, 78, 25, 95, 41, 5, 45];

// numbers.forEach(function (num, index, arr) {
//   console.log('num :>> ', num);
//   console.log('index :>> ', index);
//   console.log(' arr :>> ', arr);
// });

//задати контекст виклику
// numbers.forEach(
//   function (num, index, arr) {
//     console.log('this :>> ', this);
//     console.log('num :>> ', num);
//   },
//   { name: 'Poly' },
// );

//Стрілочні функції
//Стрілочні функції мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду,
//особливо коли функція маленька або якщо вона використовується як колбек.

// function foo () {}
// const foo = function () {};

// const foo = () => {}

//Усі стрілки створюються як функціональний вираз, і якщо функція - не анонімна, її
//необхідно присвоювати змінній.
//Явне повернення
// const syHi = () => {
//   return 'Hello world!';
// };
//Неявне повернення
// const syHi = () => 'Hello world!';
// console.log(syHi());

//передача параметрів в стрілочну функцію
//буз параметрів
//const syHi = () => 'Hello world!';
//з одним параметром
// const syHi = name => 'Hello, ' + name;
//більше одного параметра
// const syHi = (hi, name) => hi + name;
// console.log(syHi('Hello ', 'Poly'));

//Псевдомасив arguments

// const foo = (...args) => {
//   console.log('args :>> ', args);
// };

// foo(12, 25, 56, 48);
// foo(12, 25);

//Стрілочні функції як колбеки

// const numbers = [56, 78, 25, 95, 41, 5, 45];

// numbers.forEach(num => console.log('num :>> ', num));

//Різновиди коду
//Імперативне програмування
//Імперати́вне програмува́ння — парадигма програмування(стиль написання вихідного коду комп'ютерної програми),
//згідно з якою описується процес отримання результатів як послідовність інструкцій зміни стану програми.

//Імперативна програма схожа на накази (англ. imperative — наказ). Подібно до того, як за допомогою наказового
//способу в мовознавстві перелічується послідовність дій, що необхідно виконати, імперативні програми є
//послідовністю операцій комп'ютера для виконання. Поширений синонім імперативному програмуванню є процедурне
//програмування.

// function createElement(text) {
//   const element = document.createElement('div');
//   element.textContent = text;
//   element.classList.add('my-class');
//   element.setAttribute('data-name', 'div');
//   return element;
// }

// const divElem = createElement('div element');
// console.log('divElem :>> ', divElem);

//Декларативне програмування
//Декларативне програмування — парадигма програмування, відповідно до якої, програма описує, який результат
//необхідно отримати, замість описання послідовності отримання цього результату.

// function createElement(text) {
//   return `<div class="my-class" data-name="div">${text}</div>`;
// }

// const divElem = createElement('div element');
// console.log('divElem :>> ', divElem);

//Імперативний vs декларативний
// Стисло кажучи, для отримання результатів імперативні програми явно конкретизують алгоритм,
// а декларативні — явно конкретизують мету і залишають реалізацію алгоритму на допоміжному програмному
// забезпеченню (наприклад, інструкція вибірки SQL конкретизує властивості даних, які слід отримати від бази
// даних, але не процес отримання цих даних).
