// Promise - об'єкт JavaScript для сторення асинхроних операцій.

// const promise = new Promise((resolve, reject) => {});

// Створення

//resolve(value) - функція для виклику у разі успішної операції. Переданий їй аргумент
//буде значенням виконаного промісу.
//reject(error) - функція для виклику у разі помилки. Переданий їй аргумент буде значенням
//відхиленого промісу.

// const promise = new Promise((res, rej) => {
//   if (false) {
//     res('успіх');
//   } else {
//     rej('невдача');
//   }
// });

// promise.then(console.log);

// Проміс може бути у трьох станах:

// Очікування (pending) - початковий стан під час створення промісу.
// Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
// Відхилено (rejected) - операція відхилена з помилкою.

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (true) {
//       res('успіх');
//     } else {
//       rej('невдача');
//     }
//   }, 3000);
// });
// console.log('promise :>> ', promise);
// promise.then(console.log);

//Метод then()

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (false) {
//       res('успіх');
//     } else {
//       rej('невдача');
//     }
//   }, 3000);
// });
// console.log('promise :>> ', promise);
// promise.then(
//   response => {
//     console.log('успіх :>> ', response);
//   },
//   response => {
//     console.log('помилка :>> ', response);
//   }
// );

//Метод catch()

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (false) {
//       res('успіх');
//     } else {
//       rej('невдача');
//     }
//   }, 3000);
// });

// promise
//   .then(response => {
//     console.log('успіх :>> ', response);
//   })
//   .catch(error => console.log('error :>> ', error));

//Метод finally()

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (true) {
//       res('успіх');
//     } else {
//       rej('невдача');
//     }
//   }, 3000);
// });

// promise
//   .then(response => {
//     console.log('успіх :>> ', response);
//   })
//   .catch(error => console.log('error :>> ', error))
//   .finally(() => {
//     console.log('finally :>> ');
//   });

//Ланцюжки промісів

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (true) {
//       res(1);
//     } else {
//       rej('невдача');
//     }
//   }, 3000);
// });

// promise
//   .then(response => {
//     console.log('успіх :>> ', response);
//     return response + 1;
//   })
//   .then(response => {
//     console.log('успіх :>> ', response);
//     return Promise.reject('Error');
//   })
//   .then(response => {
//     console.log('успіх :>> ', response);
//     return response + 1;
//   })
//   .catch(error => console.log('error :>> ', error));

//Промісифікація функцій

// const foo = callback => {
//   setTimeout(() => {
//     callback('Hello, Poly');
//   }, 2000);
// };

// const foo2 = payload => {
//   console.log('payload :>> ', payload);
// };

// foo(foo2);

// const foo = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('Hello, Poly');
//     }, 2000);
//   });
// };

// const foo2 = payload => {
//   console.log('payload :>> ', payload);
// };

// foo().then(foo2);

//Промісифікація - це перетворення функції з колбеками таким чином, щоб вона не приймала
//колбеки, а повертала проміс.

//Методи класу Promise

//Promise.resolve() і Promise.reject()

// const promise = Promise.resolve(1);
// const promiseError = Promise.reject('error');
// console.log('promise :>> ', promise);
// console.log('promiseError :>> ', promiseError);

//Promise.all()
//Приймає масив промісів, очікує їх виконання і повертає проміс. Якщо всі проміси
//виконаються успішно, проміс, що повертається, перейде у стан fulfilled, а його значенням
//буде масив результатів виконання кожного промісу. У разі, коли хоча б один з промісів
//буде відхилений, проміс, що повертається, перейде у стан rejected, а його значенням буде
//помилка.
//Promise.all([promise1, promise2, promise3, ...])
// const promise1 = Promise.resolve(1);
// const promise2 = Promise.reject('error');
// const promise3 = Promise.resolve(3);
// Promise.all([promise1, promise2, promise3])
//   .then(console.log)
//   .catch(console.log);

//Promise.race()
//Повертає виконаний або відхилений проміс, залежно від того, з яким результатом
//завершиться «найшвидший» з переданих промісів, зі значенням або причиною його відхилення.
//Promise.race([promise1, promise2, promise3, ...])

// const promise1 = Promise.resolve(1);
// const promise2 = Promise.reject('error');
// const promise3 = Promise.resolve(3);
// Promise.race([promise1, promise2, promise3])
//   .then(console.log)
//   .catch(console.log);

//Promise.allSettled
//Статичні методи для створення промісів, що миттєво успішно виконуються або відхиляються.
//Працюють аналогічно new Promise() за винятком можливості вказати затримку, але мають
//коротший синтаксис.
//Promise.allSettled([promise1, promise2, promise3, ...])

// const promise1 = Promise.resolve(1);
// const promise2 = Promise.reject('error');
// const promise3 = Promise.resolve(3);
// Promise.allSettled([promise1, promise2, promise3])
//   .then(console.log)
//   .catch(console.log);

//Promise.any
//Promise.any(array) - як тільки один із промісів виконається успішно, метод поверне
//значення виконаного промісу. Якщо жоден із промісів не завершиться успішно, тоді
//повернутий Promise буде відхилено

// const promise1 = Promise.reject('error 1');
// const promise2 = Promise.reject('error 2');
// const promise3 = Promise.resolve(3);
// Promise.any([promise1, promise2, promise3])
//   .then(console.log)
//   .catch(console.log);
