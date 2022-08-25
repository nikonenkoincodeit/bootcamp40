// todo
/*
 * Напишіть функцію colonOdd(num),
 яка приймає число num як аргумент і вставляє двокрапку (:) між двома непарними числами.
 Наприклад, якщо вводиться число 55639217, то вихід має бути 5:563:921:7.
 */

const num = 55639217;

function colonOdd(num = 0) {
  const str = String(num);
  const length = str.length;
  const arr = [str[0]];
  for (let i = 1; i < length; i++) {
    if (Number(str[i]) % 2 !== 0 && Number(str[i - 1]) % 2 !== 0) {
      arr.push(':', str[i]);
    } else {
      arr.push(str[i]);
    }
  }
  return arr.join('');
  //   const str = num.toString()
  console.log('str :>> ', str);
}

console.log('colonOdd(num = 0) :>> ', colonOdd(num));
// function colonOdd(num, array = []) {
//   //     array = array || [];
//   //   if (!array) {
//   //     array = [];
//   //   }
//   console.log('array :>> ', array);
//   if (!array.includes(num)) {
//     array.push(num);
//   }
//   console.log('array :>> ', array);
// }

// colonOdd(52, [23, 25, 48]);

// function sum() {
//   console.log('arguments :>> ', arguments);
//   const arr = [...arguments];
//   let total = 0;
//   for (const item of arr) {
//     total += item;
//   }
//   return total / arr.length;
// }

// sum(10, 12, 9, 5, 4, 10, 5);
// sum(10, 12, 9, 5, 4, 10, 5, 5, 4, 10, 5, 5, 4, 10, 5);
//colonOdd(num, 21, 'hi');
// console.log(sum(10, 12, 9, 5, 4, 10, 5));
// console.log(sum(10, 12, 9, 5, 4, 10, 5, 5, 4, 10, 5, 5, 4, 10, 5));
//console.log('colonOdd.length :>> ', colonOdd);

// const arr = [1, 23, 58];
// arr['hello'] = 99;
// console.log('arr[hello] :>> ', arr['hello']);

// function sum(a = 0, b = 0) {
//   return a + b;
// }

// console.log('sum() :>> ', sum());
