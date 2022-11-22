// todo Менше з чисел
/*
 * Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
 */
console.log(min(5, 10, 14, 1, 5));
console.log(min(2, 0, 1, 5));

function min(...args) {
  // console.log(...args);
  return Math.min(...args);
}
