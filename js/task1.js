// todo Метод map

import { vehicles } from './vehicles.js';
console.table(vehicles);

/*
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

const getModels = cars => {
  return cars.map(car => car.model);
};

// const getModels = cars => cars.map(({ model }) => model);

console.log(getModels(vehicles));
