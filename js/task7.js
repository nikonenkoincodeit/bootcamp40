// todo Метод sort

import { vehicles } from './vehicles.js';
console.table(vehicles);

/*
 * Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за збільшенням значення властивості amount.
 */

const sortByAscendingAmount = cars => {
  return [...cars].sort((a, b) => a.amount - b.amount);
};

console.table(sortByAscendingAmount(vehicles));
