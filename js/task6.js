// todo Метод find

import { vehicles } from './vehicles.js';
console.table(vehicles);

const getCarByModel = (cars, model) => cars.find(car => car.model === model);

console.log(getCarByModel(vehicles, 'F-150'));
console.log(getCarByModel(vehicles, 'CX-9'));
