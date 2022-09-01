// todo Метод sort

import { vehicles } from './vehicles.js';
console.table(vehicles);

/*
 * Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, залежно від значення параметра order.
 */

const sortByModel = (cars, order) => {};

console.table(sortByModel(vehicles, 'asc'));
console.table(sortByModel(vehicles, 'desc'));
