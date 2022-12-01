// todo Метод map

import { vehicles } from './vehicles.js';
// console.log('vehicles :>> ', vehicles);
/*
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

// const getModels = vehicles => {
//   return vehicles.map(({ model }) => model);
// };

const getModels = vehicles => vehicles.map(({ model }) => model);

console.log(getModels(vehicles));
