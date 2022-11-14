// JavaScript (JS) — динамічна, об'єктно-орієнтована прототипна мова програмування.
// Реалізація стандарту ECMAScript. Найчастіше використовується для створення сценаріїв
// вебсторінок, що надає можливість на боці клієнта (браузер)
// взаємодіяти з користувачем, керувати браузером, асинхронно обмінюватися даними з сервером,
// змінювати структуру та зовнішній вигляд вебсторінки.

//Підключення скрипту

//Декілька скриптів

//Інструменти розробника

//Змінні і типи

//<ключове_слово> <ім`я_змінної> = <значення>

//Імена змінних

// const user = 'Poly'

//Ключові слова
// const user = 'Poly';
// console.log('user :>> ', user);

// let user = 'Pole';
// user = 'Mango';

//Примітивні типи
//Number
// const age = 25;
// console.log('age :>> ', age);

//String
// const age = '25';
// const user = 'Poly';
// const user2 = `Mango`;
// console.log('user2 :>> ', user2);

//Boolean
// true false

//null

//undefined

// let age;
// console.log('age :>> ', age);

//Оператор typeof

// const user = null;
// console.log(typeof user);
//Виведення даних console.log() і alert()
// alert('Hello world!');
//Отримання даних confirm() prompt()
// const result = confirm('Вам виповнилось 18 років?');
// console.log('result :>> ', result);

// const result = prompt('Скільки вам років?');
// console.log('result :>> ', result);

//Математичні оператори

const x = 11;
const y = 5;

// Додавання
// console.log('x + y :>> ', x + y);
// Віднімання
// console.log('x - y :>> ', x - y);
// Множення
// console.log('x * y :>> ', x * y);
// Ділення
// console.log('x / y :>> ', x / y);
// Остача від ділення
// console.log('x % y :>> ', x % y);

//Оператори порівняння
const a = '10';
const b = 10;
// a > b і a < b - більше/менше
// console.log(a < b);
// a >= b і a <= b - більше/менше або дорівнює
// console.log(a >= b);
// a == b - рівність
// console.log(a == b);
// a != b - нерівність
// console.log(a != b);
// a === b - строга рівність
// console.log(a === b);
// a !== b - строга нерівність
// console.log(a !== b);

//Оператори рівності == і !=
// ❌ Погано, виконується приведення типів
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false

// ✅ Добре, приведення типів не виконується
// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true

//Числа

//Приведення до числа Number
// const c = '20';
// console.log(Number(c));
// console.log(+c);
//Number.parseInt() і Number.parseFloat()
// const c = '20px';
// console.log(Number.parseInt(c));

// const c = '20.7px';
// console.log(Number.parseFloat(c));

//Перевірка на число

// const validNumber = Number('51'); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// const num = '25';
// if (typeof num === 'number') {
//   alert('Це число!');
// }

//Клас Math
// Math.floor(num) - повертає найбільше ціле число,
// менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(2.7)); // 1

// // Math.ceil(num) - повертає найменше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.999999)); // 2

// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.8)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 100, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 5, 50, 40)); // 10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

//Рядки
//Рядок - це індексований набір з нуля або більше символів, взятих в
//одинарні або подвійні лапки.
// const str = 'Hello world!';
// console.log('str :>> ', str);
//Конкатенація рядків
// const hi = 'Hello';
// const user = 'Poly';
// console.log(hi + ' ' + user);

//Шаблонні рядки
// const user = 'Poly';
// const hi = `Hello,       ${user}`;
// console.log('hi :>> ', hi);
// //Властивість length
// console.log(' hi.length :>> ', hi.length);
//Методи toLowerCase() і toUpperCase()
// const user = 'Poly';
// console.log('user.toUpperCase() :>> ', user.toUpperCase());
// console.log('user.toUpperCase() :>> ', user.toLowerCase());

// const text =
//   'lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nulla, optio assumenda maiores fugit quia cupiditate dolore saepe quis sed tenetur sint corrupti, laboriosam possimus temporibus eaque explicabo, voluptas vel.';
// text[0].toUpperCase();

// const newText = text[0].toUpperCase() + text.slice(1);
// console.log('newText :>> ', newText);
//Метод indexOf()
// const user = '%Poly';
// console.log('user.indexOf("%") :>> ', user.indexOf('%', 1));
// console.log('user.user.lastIndexOf :>> ', user.lastIndexOf('%'));

//Метод includes()
// const user = '%Poly';
// console.log('user.includes() :>> ', user.includes('%', 1));
//Метод endsWith()

const file = 'style.css';
// console.log('file.endsWith(".css") :>> ', file.endsWith('.css')); - true
// console.log('file.endsWith(".css") :>> ', file.endsWith('.js')); //false

//Методи replace() і replaceAll()
// const jsFileName = 'script.js';
// const tsFileName = jsFileName.replace('.js', '.ts');
// console.log('tsFileName :>> ', tsFileName);
// const cssFileNames = 'styles.css, about.css, portfolio.css';

// const minFileCss = cssFileNames.replaceAll('.css', '.min.css');
// console.log('minFileCss :>> ', minFileCss);
//Метод slice()

// const hi = 'Hello, world!';
// const newHi = hi.slice(0, 5);
// console.log('newHi :>> ', newHi);
//Логічні оператори
//Логічне «І» вираз && вираз
// console.log(10 && 0);
// console.log(1 && 10);

//Логічне «АБО» вираз || вираз
// console.log(10 || 0);
// console.log(1 || 10);
// console.log(10 || false);

//Логічне «НЕ» !вираз

// const age = 12;
// console.log('!!age :>> ', !!age);
// console.log('!true :>> ', !true);
// console.log('!false :>> ', !false);
