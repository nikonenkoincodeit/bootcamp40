// todo Базові операції з масивом
/*
 * Створіть масив genres з елементами Jazz і Blues. ✅
 * Додайте "Рок-н-рол" в кінець. ✅
 * Виведіть у консоль перший елемент масиву. ✅
 * Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини. ✅
 * Видаліть перший елемент і виведіть його в консоль.  ✅
 * Вставте «Country» та «Raggy» на початок масиву.  ✅
 */

const genres = ['Jazz', 'Blues'];
genres.push('Рок-н-рол');

console.log('first element :>> ', genres[0]);
console.log('last element :>> ', genres[genres.length - 1]);
console.log('last element :>> ', genres.at(-1));

const firstElem = genres.shift();
console.log('firstElem :>> ', firstElem);
genres.unshift('Country', 'Raggy');

console.log('genres :>> ', genres);
