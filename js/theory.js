//Callback Hell
//Іноді у вас є ряд завдань, де кожен крок залежить від результатів попереднього кроку.
//Тому не важко отримати таке у синхронному коді:

// const text = readFile(fileName),
//   tokens = tokenize(text),
//   parseTree = parse(tokens),
//   optimizedTree = optimize(parseTree),
//   output = evaluate(optimizedTree);
// console.log(output);

//При спробі зробити це в асинхронному коді, дуже легко отримати т.з.
//callback-пекло - розповсюджену проблему, коли callback функції "застрягають"
//глибоко всередині один одної. Node.js або front-end код з великою кількістю AJAX-запитів
//дуже часто під ризиком виглядати приблизно так:
//https://dev.to/jerrycode06/callback-hell-and-how-to-rescue-it-ggj

//Promises є популярним способом позбавлення від callback-пекла. Спочатку це був
//тип конструкції, представлений такими бібліотеками JavaScript, як Q і when.js, але ці
//типи бібліотек стали достатньо популярними, що Promises тепер надаються і в ECMAScript 6.

//Ідея полягає в тому, що замість того, щоб використовувати функції, які приймають вхідні
//дані і callback, ми створюємо функцію, яка повертає об'єкт promise, тобто, об'єкт, що
//представляє значення, яке буде існувати в майбутньому.

// Promise (обіцянка, проміс) - об'єкт, що представляє поточний стан асинхронної
//операції. Це обгортка для значення, невідомого на момент створення промісу.
//Дозволяє обробляти результати асинхронних операцій таким чином, якби вони були
//синхронними: замість кінцевого результату асинхронної операції, повертається
//своєрідна обіцянка отримати результат у майбутньому.

// Проміс може бути у трьох станах:

// Очікування (pending) - початковий стан під час створення промісу.
// Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
// Відхилено (rejected) - операція відхилена з помилкою.

// Створення
const promise = new Promise((resolve, reject) => {
  const flag = Math.random() > 0.5;
  setTimeout(() => {
    if (flag) {
      resolve('111');
    }
    reject('222');
  });
});

//resolve(value) - функція для виклику у разі успішної операції. Переданий їй аргумент
//буде значенням виконаного промісу.
//reject(error) - функція для виклику у разі помилки. Переданий їй аргумент буде значенням
//відхиленого промісу.

//Метод then()

// promise.then(
//   response => {
//     console.log('response :>> ', response);
//   }
//   //   error => {
//   //     console.log('error :>> ', error);
//   //   }
// );

//Метод catch()

// promise.catch(error => {
//   console.log('error :>> ', error);
// });

//Метод finally()

// promise
//   .then(response => {
//     console.log('response :>> ', response);
//   })
//   .catch(error => {
//     console.log('error :>> ', error);
//   })
//   .finally(() => {
//     console.log('finally :>> ');
//   });

//Ланцюжки промісів

// promise
//   .then(response => {
//     return response * 2;
//   })
//   .then(response => {
//     return response * 2;
//   })
//   .then(response => {
//     return response * 2;
//   })
//   .then(response => {
//     return response * 2;
//   })
//   .then(response => {
//     return response * 2;
//   })
//   .then(response => {
//     return response * 2;
//   })
//   .then(response => {
//     console.log('response :>> ', response);
//   })
//   .catch(error => {
//     console.log('error :>> ', error);
//   })
//   .finally(() => {
//     console.log('finally :>> ');
//   });

//Промісифікація функцій
//Промісифікація - це перетворення функції з колбеками таким чином, щоб вона не приймала
//колбеки, а повертала проміс.

// function makePromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('fulfilled');
//     }, 3000);
//   });
// }

// makePromise().then(console.log);

//Методи класу Promise

//Статичні методи для створення промісів, що миттєво успішно виконуються або відхиляються.
//Працюють аналогічно new Promise() за винятком можливості вказати затримку, але мають
//коротший синтаксис.
//Promise.resolve() і Promise.reject()

// Promise.resolve('123').then(console.log);
// Promise.reject('error').catch(console.log);

//Promise.all()
//Приймає масив промісів, очікує їх виконання і повертає проміс. Якщо всі проміси
//виконаються успішно, проміс, що повертається, перейде у стан fulfilled, а його значенням
//буде масив результатів виконання кожного промісу. У разі, коли хоча б один з промісів
//буде відхилений, проміс, що повертається, перейде у стан rejected, а його значенням буде
//помилка.
//Promise.all([promise1, promise2, promise3, ...])

// const promise1 = Promise.resolve('111');
// const promise2 = Promise.reject('222');
// const promise3 = Promise.resolve('333');

// Promise.all([promise1, promise2, promise3])
//   .then(response => {
//     console.log('response :>> ', response);
//   })
//   .catch(error => console.log('error :>> ', error));

//Promise.race()
//Повертає виконаний або відхилений проміс, залежно від того, з яким результатом
//завершиться «найшвидший» з переданих промісів, зі значенням або причиною його відхилення.
//Promise.race([promise1, promise2, promise3, ...])

// const promise1 = Promise.resolve('111');
// const promise2 = Promise.reject('222');
// const promise3 = Promise.resolve('333');

// Promise.race([promise1, promise2, promise3])
//   .then(response => {
//     console.log('response :>> ', response);
//   })
//   .catch(error => console.log('error :>> ', error));

//Promise.any
//Promise.any(array) - як тільки один із промісів виконається успішно, метод поверне
//значення виконаного промісу. Якщо жоден із промісів не завершиться успішно, тоді
//повернутий Promise буде відхилено

// const promise1 = Promise.resolve('111');
const promise2 = Promise.reject('222');
const promise3 = Promise.resolve('333');

Promise.any([promise2, promise3])
  .then(response => {
    console.log('response :>> ', response);
  })
  .catch(error => console.log('error :>> ', error));
