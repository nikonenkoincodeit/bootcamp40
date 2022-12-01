// todo Метод find

import { vehicles } from './vehicles.js';
//console.table(vehicles);

const getCarByModel = (cars, modelCar) => {
  return cars.find(({ model }) => model === modelCar);
};

console.log(getCarByModel(vehicles, 'F-150'));
console.log(getCarByModel(vehicles, 'CX-9'));
