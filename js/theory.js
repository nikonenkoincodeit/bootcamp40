//Розгалуження
//Розгалуження використовуються для виконання різноманітного коду, залежно від умови.
// Принцип роботи простий - результат умови приводиться до буля true або false, після чого
// потік програми спрямовується в ту або іншу гілку.

// Інструкція if
// const a = 10;
// const b = 15;

// if (a > b) {
//   console.log(`Змінна а більша за змінну b`);
// }

// Інструкція if...else

// if (a > b) {
//   console.log(`Змінна а більша за змінну b`);
// } else {
//   console.log(`Змінна а меньше за змінну b`);
// }

// if (a > b) console.log(`Змінна а більша за змінну b`);
// else console.log(`Змінна а меньше за змінну b`);

// Інструкція else...if
// const a = 10;
// const b = 10;

// if (a > b) {
//   console.log(`Змінна а більша за змінну b`);
// } else if (a === b) {
//   console.log(`Змінна а дорівнює змінній b`);
// } else {
//   console.log(`Змінна а меньше за змінну b`);
// }

// if (a > b) {
//   console.log(`Змінна а більша за змінну b`);
// }

// if (a === b) {
//   console.log(`Змінна а дорівнює змінній b`);
// }

// if (a > b) {
//   console.log(`Змінна а меньше за змінну b`);
// }

//Тернарний оператор
// const a = 10;
// const b = 15;

// const text =
//   a > b ? `Змінна а більша за змінну b` : `Змінна а меньше за змінну b`;
// console.log('text :>> ', text);

//Інструкція switch
// const a = 3;

// switch (a) {
//   case 1: // a === 1
//     console.log('1111 :>> ', 1111);
//     break;
//   case 2: // a === 2
//     console.log('22222 :>> ', 22222);
//     break;
//   case 3: // a === 3
//   case 4:
//     console.log('33333 або 4444:>> ');
//     break;
//   //   case 4: // a === 3
//   //     console.log('33333 або 4444:>> ');
//   //     break;
//   default:
//     console.log('default :>> ');
// }

//Область видимості
//Область видимості змінних (variable scope) - доступність змінних в певному місці коду.
// const global = 'global';

// if (true) {
//   const local = 'local';
//   console.log('local :>> ', local);
//   console.log('global :>> ', global);
//   if (true) {
//     const local2 = 'local2';
//     console.log('local :>> ', local);
//     console.log('local2 :>> ', local2);
//     console.log('global :>> ', global);
//   }
//   console.log('local2 :>> ', local2);
// }
// console.log('local :>> ', local);
//Цикли
// Цикл - керуюча конструкція у високорівневих мовах програмування, призначена для організації
// багаторазового виконання набору інструкцій.

// Тіло циклу - послідовність інструкцій, призначена для багаторазового виконання.

// Ітерація - одноразове виконання тіла циклу.

// Умова виходу - вираз, що визначає, чи буде в черговий раз виконуватися ітерація, або цикл
// завершиться.

// Лічильник - змінна, що зберігає поточний номер ітерації. Цикл не обов'язково містить
// лічильник, і він не повинен бути один, умова виходу з циклу може залежати від декількох
// змінних, що змінюються в циклі.

// Цикл while
// let index = 0;

// while (index < 10) {
//   console.log('index :>> ', index);
//   index += 1;
// }
// console.log('index :>> ', 0);
// console.log('index :>> ', 1);
// console.log('index :>> ', 2);
// console.log('index :>> ', 3);
// console.log('index :>> ', 4);
// console.log('index :>> ', 5);
// console.log('index :>> ', 6);
// console.log('index :>> ', 7);

// Цикл do...while

// let message = null;
// do {
//   message = confirm('Вам подобається js?');
// } while (message);

// Цикл

// for (let i = 0; i < 10; i += 1) {
//   console.log('i :>> ', i);
// }

// Оператор break

// for (let i = 0; i < 10; i += 1) {
//   console.log('i :>> ', i);
//   if (i === 5) {
//     break;
//   }
// }

// Оператор continue

// for (let i = 0; i < 10; i += 1) {
//   // console.log('i :>> ', i);
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('i :>> ', i);
// }
