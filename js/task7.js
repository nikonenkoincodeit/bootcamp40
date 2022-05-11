// todo Сортування масиву із циклом
/*
 * Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
 */

const langs = [
  'python',
  'web',
  'javascript',
  'c++',
  'haskell',
  'php',
  'abb',
  'ruby',
];

// function getMinValue(array) {
//   let minElement = array[0];
//   for (const lang of array) {
//     if (minElement > lang) {
//       minElement = lang;
//     }
//   }

//   return minElement;
// }

// function sortArray(array) {
//   const newArray = [];

//   for (; langs.length; ) {
//     newArray.push(array.splice(array.indexOf(getMinValue(array)), 1).join(''));
//   }

//   return newArray;
// }

// console.log(sortArray(langs));

for (let i = 0; i < langs.length; i++) {
  for (let j = i; j < langs.length; j++) {
    if (langs[i] > langs[j]) {
      let temp = langs[i];
      langs[i] = langs[j];
      langs[j] = temp;
    }
  }
}
