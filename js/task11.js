// todo Ланцюги методів

import { vehicles } from './vehicles.js';
console.table(vehicles);

/*
 * Нехай функція getModelsOnSale повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі (onSale).
 */

const getModelsOnSale = cars => {
  return cars.filter(({ onSale }) => onSale).map(({ model }) => model);
};

console.log(getModelsOnSale(vehicles));
