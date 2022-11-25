//spread: передача аргументів

//spread: створення нового масиву

//spread: створення нового об'єкта
// const numbers = [24, 25, 56];
// // const min = Math.min.apply(null, numbers);
// const min = Math.min(...numbers);

// console.log(min);
//rest: збирання всіх аргументів функції

// function sum(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(sum(25, 56));
// console.log(sum(25, 56, 58, 58, 7));
// console.log(sum(25, 56, 58));

//res,t,: збирання частини аргументів функції

// function sum(a, b, ...args) {
//   let total = 0;
//   console.log('a :>> ', a);
//   console.log('b :>> ', b);
//   console.log('args :>> ', args);
// }

// // console.log(sum(25, 56));
// console.log(sum(25, 56, 58, 58, 7));

// --- Деструктуризація об'єктів

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log('book.title :>> ', book.title);
// console.log("book['title'] :>> ", book['title']);

//let { title } = book;  === let title = book.title
// let { title } = book;
// title = 'new title';
// console.log('title :>> ', title);
// console.log('book :>> ', book);

//Зміна імені змінної

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// const { title: newTitle } = book;
// // console.log(' title :>> ', title);
// // console.log('newTitle :>> ', newTitle);
// console.log('book :>> ', book);

//Значення за замовчуванням
// const firstBook = {
//   // title: 'The Last Kingdom',
//   coverImage:
//     'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const { title = 'new title', coverImage } = firstBook;
// console.log(title, coverImage);

//Деструктуризація в циклах

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
// ];

// const titles = [];
// const authors = [];

// for (const book of books) {
//   titles.push(book.title);
//   authors.push(book.author);
// }

// for (const { title, author } of books) {
//   titles.push(title);
//   authors.push(author);
// }

// console.log('titles :>> ', titles);
// console.log('authors :>> ', authors);

//Глибока деструктуризація

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// // const likes = user.stats.likes;

// const {
//   stats: { likes, views },
// } = user;

// const { stats } = user;
// console.log('stats:>> ', stats);
// console.log('likes:>> ', likes);
// console.log('views :>> ', views);

//Деструктуризація масивів

// const colors = [200, 255, 100];

// // const red = colors[0];
// // const green = colors[1];
// // const blue = colors[2];

// const [red, green, blue] = colors;

// console.log('red :>> ', red);
// console.log('green :>> ', green);
// console.log('blue :>> ', blue);

//Отримання елементів масиву, що залишилися, в інший масив

// let users = ['Tom', 'Sam', 'Bob', 'Mike'];

// const [fName, sName, ...names] = users;

// console.log('fName :>> ', fName);
// console.log('sName :>> ', sName);
// console.log('names :>> ', names);

//Пропуск елементів

// let users = ['Tom', 'Sam', 'Bob', 'Ann', 'Alice', 'Kate'];
// const [fName, sName, , , , lName] = users;

// console.log('fName :>> ', fName);
// console.log('sName :>> ', sName);
// console.log('lName :>> ', lName);

//Обмін значеннями

// let first = 'Tom';
// let second = 'Bob';

// // const name = first;
// // first = second;
// // second = name;

// [second, first] = [first, second];

// console.log('first :>> ', first);
// console.log('second :>> ', second);

//Деструктуризація об'єктів із масивів

// let people = [
//   { name: 'Tom', age: 34 },
//   { name: 'Bob', age: 23 },
//   { name: 'Sam', age: 32 },
// ];

// const name = people[0].name;
// const age = people[0].age;

// const [, , { name, age }] = people;

// console.log('name :>> ', name);
// console.log('age :>> ', age);

//Патерн «Об'єкт параметрів»

// function doStuffWithBook({ title, numberOfPages, downloads, rating }) {
//   // Робимо щось з параметрами
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }
// // ❌ Що таке 736? Що таке 10283? Що таке true?
// // doStuffWithBook('The Last Kingdom', 736, 10283, 8.38, true);
// doStuffWithBook({
//   title: 'The Last Kingdom',
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
// });
