// todo
/*
 * Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалено
// повторювані елементи з масиву arr (ігноруйте чутливість до регістру).
*/

const arr = [
  'php',
  'css',
  'html',
  'script',
  'css',
  'html',
  'script',
  'java',
  'php',
];

function removeDuplicates(arr) {
  const newArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i += 1) {
    if (i === arr.indexOf(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeDuplicates(arr))