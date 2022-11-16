// todo Масиви та рядки
/*
 * Напиши скрипт, який «розвертає» рядок (зворотний порядок літер) і виводить його в консоль.
 */

const string = 'Welcome to the future';
const words = string.split(' ');
console.log('words :>> ', words);
let newArray = [];

for (const word of words) {
  const newWorld = word.split('').reverse().join('');
  newArray.push(newWorld);
}

const revString = newArray.reverse().join(' ');
console.log('revString :>> ', revString);
