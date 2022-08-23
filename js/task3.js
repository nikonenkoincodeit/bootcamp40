// todo Вкладені розгалуження
/*
 * Напиши скрипт, який порівнює числа змінних a і b. Якщо обидва значення більше 100, виведи в консоль максимальне з них. Інакше у консолі має бути сума значення b та числа 512.
 */

const a = 90;
const b = 250;

let result = 0;

// if (a > 100 && b > 100) {
//   result = a > b ? a : b;
// } else {
//   result = b + 512;
// }

// if (a > 100 && b > 100) {
//   if (a > b) {
//     result = a;
//   } else {
//     result = b;
//   }
// } else {
//   result = b + 512;
// }

if (a > 100 && b > 100) {
  result = Math.max(a, b);
} else {
  result = b + 512;
}

console.log('result :>> ', result);
