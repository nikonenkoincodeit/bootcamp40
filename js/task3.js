// todo Вкладені розгалуження
/*
 * Напиши скрипт, який порівнює числа змінних a і b. Якщо обидва значення більше 100, виведи в консоль максимальне з них. Інакше у консолі має бути сума значення b та числа 512.
 */

const a = 200;
const b = 150;

if (a > 100 && b > 100) {
  console.log(a > b ? a : b);
} else {
  console.log(b + 512);
}

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else {
//   console.log(b + 512);
// }
