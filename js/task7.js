// todo Метод sort

import { vehicles } from './vehicles.js';
//console.table(vehicles);

/*
 * Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за збільшенням значення властивості amount.
 */

const sortByAscendingAmount = cars => {
  return [...cars].sort((a, b) => b.amount - a.amount);
};

console.table(sortByAscendingAmount(vehicles));
