// todo Масиви та рядки
/*
 * Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього. Результуючий рядок не повинен починатися або закінчуватися пробілом. Скрипт повинен працювати для будь-якого рядка.
 */

const string =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas cupiditate excepturi,';

const words = string.split(' ');
const copyWords = words.slice(1, words.length - 1);

// for (const word of copyWords) {
//   console.log('word :>> ', word);
// }

const newString = copyWords.join(' ');

console.log('newString :>> ', newString);
