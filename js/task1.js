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
// const arr = new Array(12, 13, 14);
// console.log('genres.push(Рок-н-рол); :>> ', genres.push('Рок-н-рол'));

// console.log('genres :>> ', genres.shift());
// console.log('genres :>> ', genres);
// console.log('genres :>> ', genres[genres.length - 1]);
// genres.unshift('Country', 'Raggy');
genres.splice(0, 0, 'Country', 'Raggy');
console.log('genres :>> ', genres);
