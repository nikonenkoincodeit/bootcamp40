// todo Метод filter

import { vehicles } from './vehicles.js';
console.table(vehicles);
/*
 * Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається зі значенням параметра type.
 */

// const getCarsWithType = (cars, type) => {
//   return cars.filter(({ type: objType }) => objType === type);
// };

const getCarsWithType = (cars, type) => {
  return cars.filter(car => car.type === type);
};

console.table(getCarsWithType(vehicles, 'suv'));
console.table(getCarsWithType(vehicles, 'sedan'));
