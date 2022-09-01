// todo Метод map

import { vehicles } from './vehicles.js';
// console.log('vehicles :>> ', vehicles);
/*
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

// const getModels = cars => {
//   return cars.map(item => item.model);
// };

// const getModels = cars => cars.map(item => item.model);

// const getModels = cars => cars.map(({ model }) => model);

function getModels(cars) {
  return cars.map(({ model }) => model);
}

console.log('getModels(vehicles) :>> ', getModels(vehicles));
