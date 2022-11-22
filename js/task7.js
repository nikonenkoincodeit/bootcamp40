// todo Середнє значення
/*
 * Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.
 */

function calAverage(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total / args.length;
}

console.dir(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
