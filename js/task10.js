// todo Метод reduce

import { vehicles } from './vehicles.js';
//console.table(vehicles);
/*
 * Нехай функція getTotalAmount повертає загальну кількість автомобілів(значення властивостей amount).
 */

const getTotalAmount = cars => {
  return cars.reduce((acc, { amount }) => {
    return acc + amount;
  }, 0);
};

console.log(getTotalAmount(vehicles));
