// todo Метод reduce

import { vehicles } from './vehicles.js';
console.table(vehicles);
/*
 * Нехай функція getTotalAmount повертає загальну кількість автомобілів(значення властивостей amount).
 */

const getTotalAmount = cars =>
  cars.reduce((acc, { amount }) => {
    acc += amount;

    return acc;
  }, 0);

// const getTotalAmount = cars =>
//   cars.reduce((acc, { amount }) => (acc += amount), 0);

console.log(getTotalAmount(vehicles));
