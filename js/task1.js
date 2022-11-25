//todo Example 1 - Деструктуризація
/*
 * Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
 */

let weight = '88,3';
let height = '1.75';

function calcBMI({ weight, height }) {
  if (weight.includes(',')) {
    weight = weight.replace(',', '.');
  }

  if (height.includes(',')) {
    height = height.replace(',', '.');
  }

  const bmi = weight / Math.pow(height, 2);
  return bmi.toFixed(1);
}

// Було
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Очікується
console.log(
  calcBMI({
    weight: '88,3',
    height: '1.75',
  }),
);
console.log(
  calcBMI({
    weight: '68,3',
    height: '1.65',
  }),
);
console.log(
  calcBMI({
    weight: '118,3',
    height: '1.95',
  }),
);
