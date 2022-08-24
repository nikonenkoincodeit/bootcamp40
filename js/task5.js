// todo Масиви та рядки
/*
 * Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього. Результуючий рядок не повинен починатися або закінчуватися пробілом. Скрипт повинен працювати для будь-якого рядка.
 */

const string =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas cupiditate excepturi,';

const arr = string.split(' ');
//1
// const newArr = arr.slice(1, arr.length - 1);

// for (let item of newArr) {
//   console.log('item :>> ', item);
// }

// console.log('newArr :>> ', newArr);

//2
// arr.pop();
// arr.shift();
// // console.log('arr :>> ', arr);
// for (let item of arr) {
//   console.log('item :>> ', item);
// }

//3

const length = arr.length - 1;
for (let index = 1; index < length; index++) {
  console.log('arr[index] :>> ', arr[index]);
}
