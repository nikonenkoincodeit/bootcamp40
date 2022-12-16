//Синхронний код
//Синхронний код виконується послідовно, кожна інструкція очікує, доки виконається
//попередня. Коли ви викликаєте функцію, яка виконує тривалу дію, це зупиняє програму
//на увесь час її виконання. Тобто в моделі синхронного програмування все відбувається
//по черзі.

console.log("A"); //A
console.log("B"); //B
console.log("C"); //C

//Асинхронний код
//Асинхронне програмування дозволяє виконати блок коду без зупинки (або блокування)
//всього потоку, в якому виконується дія.
//В асинхронній моделі старт мережевого запиту викликає щось на зразок розгалуження,
//тобто запуск запиту і результат його обробки - це різні дії. Доки виконується запит,
//програма продовжує працювати і виконувати інший код.

//Асинхронність передбачає наступний варіант роботи:

//1) Дано два рядки коду, що йдуть один за одним. Перший – рядок, що вимагає певного часу
//на обробку.
//2) Перший рядок починає оброблятись у фоновому режимі.
//3) У цей момент здійснюється читання та запуск другого рядка. Це відбувається без
//очікування завершення першої операції.

//Багатопотоковість - властивість платформи (наприклад, операційної
//системи, віртуальної машини і т. д.) або програми, що полягає в тому, що процес,
//породжений в операційній системі, може складатися з декількох потоків, що виконуються
//«паралельно».

//Таймери

//setTimeout
//const timerId = setTimeout(callback, delay, arg1, arg2, ...);

// setTimeout(
//   (name) => {
//     console.log("Hello, ", name);
//   },
//   3000,
//   "Poly"
// );

//setInterval
//const timerId = setInterval(callback, delay, arg1, arg2, ...);
// const timerId = setInterval(
//   (name) => {
//     console.log("Hello, ", name);
//   },
//   2000,
//   "Mango"
// );

// setTimeout(() => {
//   console.log("stop :>> ");
//   clearInterval(timerId);
// }, 5000);

//рекурсія
// let index = 1;

// function startTimeout() {
//   setTimeout(() => {
//     console.log("step :>> ", index);
//     index += 1;
//     startTimeout();
//   }, 1000);
// }

// startTimeout();

//Дата і час

// Час відображається у двох форматах:

// UTC - час за Грінвічем;
// У поточній годинній зоні

//Дата JavaScript вимірюється в мілісекундах, що пройшли з півночі 1 січня 1970 року по
//UTC (Coordinated Universal Time). День містить 86 400 000 мілісекунд. Діапазон дат об'єкта Date варіюється
//від -100 000 000 до 100 000 000 днів щодо 1 січня 1970 по UTC.

//UTC було введено замість застарілого середнього часу за Грінвічем (Greenwich Mean Time).
//Нова шкала часу UTC була введена, оскільки шкала GMT є нерівномірною і пов'язана із
//добовим обертанням Землі. Шкала UTC заснована на рівномірній шкалі атомного часу (TAI)
//та є більш зручною для цивільного використання.

//Створення дати
// const date3 = new Date();
// console.log("date3 :>> ", date3);
// console.log("date :>> ", date3.toString());
// console.log("date :>> ", date3.getTime());
// console.log("date :>> ", Date.now());

//Встановлення дати
// const date4 = new Date(2050, 08, 25, 20, 25, 32, 51);
// console.log("date :>> ", date4);
// const d = new Date("2022-10-25");
// console.log("date :>> ", d);
//const d = new Date("2030-03");
// const d = new Date("2018");
// console.log("d :>> ", d);
//const d = new Date("03/16/2030");
//const d = new Date("2030/03/16");
//const d = new Date("2030/3/16");
//const d = new Date("March 16, 2030");
//const d = new Date("March 16, 2030 14:25:00");
//const d = new Date("2030-03-16 14:25:00");
//const d = new Date("2030-03-16T14:25:00");
//const d = new Date("16 March 2030");
//const d = new Date(2030, 2, 16, 14, 25, 0, 0);

//Геттери
//Геттери використовуються для читання усієї дати або окремої складової.
//Значення, що повертається, залежить від поточного часового поясу, встановленого
//на вашому комп'ютері.

const date = new Date();

// console.log("getTime() ", date.getTime());
// console.log("Date.now ", Date.now());

// Повертає день місяця від 1 до 31
// console.log("getDate(): ", date.getDate());

// Повертає день тижня від 0 до 6
// console.log("getDay(): ", date.getDay());

// Повертає місяць від 0 до 11
// console.log("getMonth(): ", date.getMonth());

// Повертає рік з 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// Повертає години
// console.log("getHours(): ", date.getHours());

// Повертає хвилини
// console.log("getMinutes(): ", date.getMinutes());

// Повертає секунди
// console.log("getSeconds(): ", date.getSeconds());

// Повертає мілісекунди
// console.log("getMilliseconds(): ", date.getMilliseconds());

console.log("UTC time:>> ");

// Повертає день місяця від 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());

// Повертає день тижня від 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());

// Повертає місяць від 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// Повертає рік з 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Повертає години
// console.log("getUTCHours(): ", date.getUTCHours());

// Повертає хвилини
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Повертає секунди
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Повертає мілісекунди
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());

//set

//Сеттери
//Все, що можна прочитати - можна записати, методи для запису називаються також геттери,
//але починаються з префіксу set. Також для всіх методів існують їх UTC еквіваленти.

const date2 = new Date("March 16, 2030 14:25:00");
console.log("date2 :>> ", date2);
date2.setHours(16);
console.log("date2 :>> ", date2);
