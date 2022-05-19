// todo Метод filter

import { cars } from './cars.js';
/*
 * Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається зі значенням параметра type.
 */

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));
