// todo Ланцюги методів

import { vehicles } from './vehicles.js';
console.table(vehicles);

/*
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (властивість onSale), відсортованих за зростанням ціни.
 */

const getSortedCarsOnSale = cars =>
  cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

console.table(getSortedCarsOnSale(vehicles));
