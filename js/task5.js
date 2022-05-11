// todo Масиви та рядки
/*
 * Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього. Результуючий рядок не повинен починатися або закінчуватися пробілом. Скрипт повинен працювати для будь-якого рядка.
 */

const string =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas cupiditate excepturi,';

const arrayStr = string.split(' ');
const lastElement = arrayStr.length - 1;

// arrayStr.splice(0, 1);
// arrayStr.splice(lastElement, 1);

arrayStr.pop();
arrayStr.shift();

console.log(arrayStr.join(' '));
