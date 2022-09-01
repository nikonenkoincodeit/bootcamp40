//Чиста функція (pure function) - це функція, не мутує дані та не працює з глобальними змінними
// const c = 25;

// function sum(a, b) {
//   return a + b + c;
// }

// console.log('sum(14,63) :>> ', sum(14, 63));

//flatMap

const user = {
  name: 'Poly',
  age: 25,
};

// const arr = Object.entries(user);
// console.log('arr :>> ', arr);

// const arr2 = arr.flatMap(item => `<li>${item}</li>`);
// console.log('arr2 :>> ', arr2);
//filter

// const arr = [25, 24, 1, 5, 69];

// const arr2 = arr.filter((item, index, array) => item > 70);
// console.log('arr2 :>> ', arr2);
//find

// const arr = [25, 24, 1, 5, 69];
// const users = [
//   { id: 1, name: 'Poly', age: 25 },
//   { id: 2, name: 'Ajax', age: 35 },
// ];

// const result = users.find(item => item.id === 3);
// console.log('result :>> ', result);
//findIndex
// const arr = [25, 24, 1, 5, 69];
// const users = [
//   { id: 1, name: 'Poly', age: 25 },
//   { id: 2, name: 'Ajax', age: 35 },
// ];

// const index = users.findIndex(item => item.id === 3);
//const index = arr.findIndex(item => item === 70);
// const index = arr.indexOf(5);
// console.log('index :>> ', index);

//every, some
// const arr = [25, 24, 1, 5, 69];
// // const result = arr.every(item => item > 2);
// // console.log('result :>> ', result);

// const result = arr.some(item => item > 75);
// console.log('result :>> ', result);

//reduce
// const arr = [25, 24, 1, 5, 69];
// const result = arr.reduce((acc, item, index, array) => {
//   acc += item;
//   return acc;
// }, 0);
// console.log('result :>> ', result);

//sort

const arr = [25, 24, 1, 5, 69];

const arr2 = [...arr].sort((a, b) => a - b).filter(item => item > 20);
console.log('arr :>> ', arr);
console.log('arr2 :>> ', arr2);

//Ланцюжки методів
