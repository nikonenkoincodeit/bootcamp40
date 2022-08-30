//spread: передача аргументів (Math.min)
// const numbers = [2, 5, 0, 56, 4];

// const min = Math.min(...numbers);
// console.log('min :>> ', min);

//spread: створення нового масиву
// const a = { a: 25 };
// const arr1 = [1, 2, 3, a];
// const arr2 = [...arr1];
// console.log('arr2 :>> ', arr2);
// console.log(arr1 === arr2);
//arr1[3].a = 50;
// console.log(arr1[3]);
// console.log(arr1[3] === arr2[3]);
// console.log(arr2[3]);

//spread: створення нового об'єкта

// const userA = { name: 'Poly' };
// const userB = { ...userA };
// console.log(userB);
// console.log(userB === userA);

//rest: збирання всіх аргументів функції

// function foo(...args) {
//   console.log('args :>> ', args);
// }
// foo([1, 2, 3, 4]); //[[1, 2, 3, 4]]

//rest: збирання частини аргументів функції
// function foo(a, b, ...args) {
//   console.log('a :>> ', a);
//   console.log('b :>> ', b);
//   console.log('args :>> ', args);
// }
// foo(1, 2, 3, 4);

//Деструктуризація об'єктів

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};
// console.log('book.title :>> ', book.title);
// console.log('book["title"] :>> ', book['title']);
// const { title, author, rating } = book;
// console.log('title :>> ', title);
// console.log('title, author, rating :>> ', title, author, rating);

//Значення за замовчуванням

// function foo (arr = []) {
//   return arr.filter()
// }

// const userC = { name: 'Poly', age: 25 };
// // const userC = { name: 'Poly' };

// const { name, age = 10 } = userC;

// console.log('name, age :>> ', name, age);

//Зміна імені змінної

// const userC = { name: 'Poly', age: 25 };
// const { name: userName } = userC;
// console.log('userName  :>> ', userName);
// console.log('name :>> ', name);

//Деструктуризація в циклах

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'На березі спокійних вод',
    author: 'Роберт Шеклі',
    rating: 8.51,
  },
];

const titles = [];
const authors = [];

// for (const book of books) {
//   titles.push(book.title);
//   authors.push(book.author);
// }
// console.log('titles :>> ', titles);

// for (const { title, author } of books) {
//   titles.push(title);
// }
// console.log('titles :>> ', titles);

//Глибока деструктуризація

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// const {
//   stats: { followers, likes },
// } = user;
// const { stats } = user;
// // console.log('followers, likes :>> ', followers, likes);
// console.log('stats.followers :>> ', stats.followers);
// console.log('stats :>> ', stats);

//Деструктуризація масивів

// const colors = [100, 82, 45];
// const [a, b, c] = colors;
// console.log('a, b, c, hello :>> ', a, b, c);

//Отримання елементів масиву, що залишилися, в інший масив

// let users = ['Tom', 'Sam', 'Bob', 'Mike'];

// const [t, ...others] = users;
// // console.log('users[0] :>> ', users[0]);
// console.log(t); // Tom
// console.log(others); // ["Sam", "Bob", "Mike"]

//Пропуск елементів

// let users = ['Tom', 'Sam', 'Bob', 'Ann', 'Alice', 'Kate'];

// const [first, , , , ,  fifth] = users;

// console.log(first); // Tom
// console.log(fifth); // Alice

//Деструктуризація об'єктів із масивів

// let people = [
//   { name: 'Tom', age: 34 },
//   { name: 'Bob', age: 23 },
//   { name: 'Sam', age: 32 },
// ];

// const [, { name, age }] = people;
// console.log(' name, age :>> ', name, age);
// console.log(name);      // Bob

//Деструктуризація параметрів

function display({ name: userName, age: userAge }) {
  console.log(userName, userAge);
}
// function sum(numbers) {
//   const result = numbers[0] + numbers[1] + numbers[2];
//   console.log(result);
// }
// function sum(numbers) {
//   const [a, b, c, d] = numbers;
//   const result = a + b + c + d;
//   console.log(result);
// }
// function sum([a, b, c, d]) {
//   const result = a + b + c + d;
//   console.log(result);
// }
// let userD = { name: 'Alice', age: 33, email: 'alice@gmail.com' };

// let numbers = [3, 5, 7, 8];

// display(userD); // Alice 33
// sum(numbers); // 15

//Обмін значеннями

// let first = 'Tom';
// let second = 'Bob';

// [first, second] = [second, first];

// console.log(first); // Bob
// console.log(second); // Tom
