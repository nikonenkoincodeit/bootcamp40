// todo Метод sort

import { cars } from './cars.js';

/*
 * Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, залежно від значення параметра order.
 */

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));
