//todo метод Object.values()
/*
 * У нас є об'єкт, у якому зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
 */

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const a = {};

// let sum = 0;
// const values = Object.values(salaries);
// for (const value of values) {
//   sum += value;
// }
// console.log('sum :>> ', sum);

// let sum2 = 0;
// const values2 = Object.values(a);
// for (const value of values2) {
//   sum2 += value;
// }
// console.log('sum :>> ', sum2);

console.log('getSum({}) :>> ', getSum({}));
console.log('getSum(salaries) :>> ', getSum(salaries));

function getSum(obj) {
  let sum = 0;
  const values = Object.values(obj);
  for (const value of values) {
    sum += value;
  }
  return sum;
}
