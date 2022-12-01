//Чиста функція (pure function) - це функція, не мутує дані та не працює з глобальними змінними

//1
// const b = 5;

// function sum(a) {
//   return a + b;
// }
//console.log('sum(5) :>> ', sum(5));

//2
// const name = 'Poly';

// function updateUserData(obj) {
//   const newObj = { ...obj, name };
//   return newObj;
// }

// const obj = updateUserData({ name: 'Mango' });
// console.log(obj);

//Метод map

// const array = [1, 2, 3, 4]
//   .map((num, index, array) => {
//     return `<li>${num}</li>`;
//   })
//   .join('');

// console.log('array :>> ', array);

//Метод flat

// const array = [
//   12,
//   [12, 5, [54, [54, [54, [54]]]]],
//   'Poly',
//   45,
//   [25],
//   [],
//   [58, 'Poly'],
// ];

// const newArray = array.flat(Infinity);
// console.log('newArray :>> ', newArray);

//flatMap

// const orders = [
//   {
//     id: 1,
//     products: [
//       { name: 'Чизкейк', price: 1.99 },
//       { name: 'Бисквит', price: 4.99 },
//     ],
//   },
//   {
//     id: 2,
//     products: [
//       { name: 'Шоколад', price: 5.59 },
//       { name: 'Зефир', price: 8.99 },
//     ],
//   },
// ];

// const products = orders
//   .flatMap(order => {
//     return order.products;
//   })
//   .map(order => order.name);
// console.log('products :>> ', products);

//filter

// const array = [12, 45, 10, 58, 5, 6, 10, 8];

// const filterData = array.filter((item, index, array) => item > 10);

// const array = [12, 45, 10, 12, 45, 10];

// const filterData = array.filter(
//   (item, index, arr) => arr.indexOf(item) === index,
// );

// console.log('filterData :>> ', filterData);

//find

// const arr = [25, 24, 1, 5, 69];

// const users = [
//   { id: 1, name: 'Poly', age: 25 },
//   { id: 2, name: 'Ajax', age: 35 },
// ];

// // const result = arr.find(num => num === 10);

// const result = users.find(user => user.id === 1);
// console.log('result :>> ', result);

//findIndex

// const arr = [25, 24, 1, 5, 69];
// const index = arr.findIndex(num => num === 241);
// console.log('index :>> ', index);

// const users = [
//   { id: 1, name: 'Poly', age: 25 },
//   { id: 2, name: 'Ajax', age: 35 },
// ];

// const index = users.findIndex(user => user.id === 21);
// console.log('index :>> ', index);

//every, some
// const arr = [25, 24, 5, 69];

// const result = arr.every(num => num > 10);

// const result = arr.some(num => num < 3);
// console.log('result :>> ', result);

//reduce
const arr = [25, 24, 1, 5, 69];

// const total = arr.reduce((acc, item, index, array) => {
//   return acc + item;
// }, 0);
// console.log('total :>> ', total);

const markupAll = arr.reduce((acc, item, index, array) => {
  // console.log('acc :>> ', acc);
  const markup = `<li>${item}</li>`;
  acc.push(markup);
  return acc;
}, []);
console.log('markupAll :>> ', markupAll);

//sort

// const array = ['d', 'a', 'f', 'z', 'c'];
// array.sort();
// console.log('array :>> ', array);
// Свій порядок сортування чисел

// const array = [2, 5, 10, 1, 6, 3, 7];
// // array.sort((a, b) => a - b);
// array.sort((a, b) => b - a);
// console.log('array :>> ', array);

//Свій порядок сортування рядків

// const words = ['Poly', 'Mango', 'Age', 'Name', 'Anna'];
// words.sort((a, b) => a.length - b.length);
// console.log('words :>> ', words);
//Сортування об'єктів

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
// ];

// const newArray = [...students].sort((a, b) => a.score - b.score);
// // students.sort((a, b) => a.name.localeCompare(b.name));
// console.log('students :>> ', students);
// console.log('newArray :>> ', newArray);

//Ланцюжки методів

const students = [
  { name: 'Манго', score: 83 },
  { name: 'Полі', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Ківі', score: 94 },
];

// const filterStudents = students.filter(({ score }) => score > 60);
// const names = filterStudents.map(({ name }) => name);

const names = students
  .filter(({ score }) => score > 60)
  .map(({ name }) => name);

console.log('names:>> ', names);
