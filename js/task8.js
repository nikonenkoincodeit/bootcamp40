// todo Метод sort

import { vehicles } from './vehicles.js';
console.table(vehicles);

/*
 * Нехай функція sortByDescendingPrice повертає новий масив автомобілів, відсортований за зменшенням значення якості price.
 */

function sortByDescendingPrice(cars) {
  return [...cars].sort((a, b) => b.price - a.price);
}

console.table(sortByDescendingPrice(vehicles));
