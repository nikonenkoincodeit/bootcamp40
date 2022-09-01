// todo Метод sort

import { vehicles } from './vehicles.js';
console.table(vehicles);

/*
 * Нехай функція sortByDescendingPrice повертає новий масив автомобілів, відсортований за зменшенням значення якості price.
 */

// const sortByDescendingPrice = cars => {
//   return [...cars].sort((a, b) => a.price - b.price);
// };
const sortByDescendingPrice = cars =>
  [...cars].sort((a, b) => a.price - b.price);

console.table(sortByDescendingPrice(vehicles));
