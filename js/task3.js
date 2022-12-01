// todo Метод filter

import { vehicles } from './vehicles.js';
// console.table(vehicles);
/*
 * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша за значення параметра threshold.
 */

const filterByPrice = (cars, threshold) => {
  return cars.filter(({ price }) => price < threshold);
};

console.table(filterByPrice(vehicles, 30000));
console.table(filterByPrice(vehicles, 25000));
