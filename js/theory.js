//Об'єкти
//Об'єкти дозволяють описати і згрупувати характеристики певної сутності - користувача,
//книги, продукту в магазині, чого завгодно. Об'єкти ще називають словниками, тобто вони
//містять терміни (властивості) та їх визначення (значення).

//Створення об'єкта
//1
// const user1 = {
//   name: 'Poly',
// };
// console.log('user1 :>> ', user1);

// //2
// const user2 = new Object({ name: 'Mango' });

// console.log('user2 :>> ', user2);
//Вкладені властивості
// const user1 = {
//   name: 'Poly',
//   age: 25,
//   address: {
//     street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: {
//       lat: '-37.3159',
//       lng: '81.1496',
//       a: [12, 25, 58],
//     },
//   },
// };
// console.log('user1 :>> ', user1);
//Звернення до властивостей через крапку //Звернення до вкладених властивостей
// const user1 = {
//   name: 'Poly',
//   age: 25,
//   address: {
//     street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: {
//       lat: '-37.3159',
//       lng: '81.1496',
//       a: [12, 25, 58],
//     },
//   },
// };

// console.log(user1.address.city);

//Звернення до властивостей через квадратні дужки
// const user1 = {
//   name: 'Poly',
//   age: 25,
//   address: {
//     street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: {
//       lat: '-37.3159',
//       lng: '81.1496',
//       a: [12, 25, 58],
//     },
//   },
// };

// const key = 'address';

// console.log(user1.address.city);
// console.log(user1['address']['city']);
// console.log(user1[key]['city']);
//Зміна значення властивості
// const user1 = {
//   name: 'Poly',
// };

// user1.name = 'Mango';
// user1['name'] = 'Mango';

// console.log('user1 :>> ', user1);

//Додавання властивостей

// const user1 = {
//   name: 'Poly',
// };

// user1.age = 25;
// user1.fre = {
//   name: 'Mango',
// };
// user1.arr = [21, 25, 58];
// console.log('user1 :>> ', user1);

//Обчислювальні властивості

// const key = '@$#%';

// const obg = {};
// obg[key] = 123456;

// console.log('obg :>> ', obg);

//Методи об'єкта //Доступ до властивостей об'єкта в методах

// const user1 = {
//   name: 'Poly',
//   syHi() {
//     console.log(`Hello, ${this.name}`);
//   },
// };

// // user1.syHi();

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     console.log(this.books);
//   },
// };

// console.log('bookShelf.getBooks() :>> ', bookShelf.getBooks());

//Перебирання об'єкта Цикл for...in Метод hasOwnProperty()

// const user = {
//   name: 'Poly',
//   age: 25,
//   getName() {
//     return this.name;
//   },
// };

// const user3 = Object.create(user);
// user3.name = 'Mango';
// console.log('user3 :>> ', user3);

// for (const key in user3) {
//   if (user3.hasOwnProperty(key)) {
//     console.log(key + '-' + user3[key]);
//   }
// }

// Метод Object.keys()

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log('user[key] :>> ', user[key]);
// }

// Метод Object.values()

// const values = Object.values(user);
// console.log('values :>> ', values);

// Метод Object.entries()

// const array = Object.entries(user);

// array.forEach(function ([key, value], index) {
//   console.log(key, value);
// });

// console.log('array :>> ', array);

//Масив об'єктів
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смішної людини',
//     author: 'Федір Достоєвський',
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   console.log('book.title :>> ', book.title);
// }
