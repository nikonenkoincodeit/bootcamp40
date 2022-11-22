// todo
/*
 * Напишіть функцію colonOdd(num),
 яка приймає число num як аргумент і вставляє двокрапку (:) між двома непарними числами.
 Наприклад, якщо вводиться число 55639217, то вихід має бути 5:563:921:7.
 */

const num = 55639217;

function colonOdd(num = 0) {
  //   const numStr = String(num);
  const numStr = num.toString();
  const result = [numStr[0]];
  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i - 1] % 2 !== 0 && numStr[i] % 2 !== 0) {
      result.push(':', numStr[i]);
    } else {
      result.push(numStr[i]);
    }
  }
  return result.join('');
}

console.log('colonOdd(num = 0) :>> ', colonOdd(num));
