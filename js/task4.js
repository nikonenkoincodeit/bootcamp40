// todo  Метод filter

import { vehicles } from './vehicles.js';
console.table(vehicles);
/*
 * Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
 */

// const getCarsWithDiscount = cars => {
//   return cars.filter(({ onSale }) => onSale);
// };

const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);

console.table(getCarsWithDiscount(vehicles));
