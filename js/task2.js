//todo Метод map

import { vehicles } from './vehicles.js';
// console.table(vehicles);
/*
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.
 */

const makeCarsWithDiscount = (cars, discount) => {
  return cars.map(car => (car.price -= car.price * discount));
};

console.table(makeCarsWithDiscount(vehicles, 0.2));
console.table(makeCarsWithDiscount(vehicles, 0.4));
