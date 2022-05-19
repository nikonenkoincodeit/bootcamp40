// todo Метод filter

import { cars } from './cars.js';
/*
 * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша за значення параметра threshold.
 */

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));
