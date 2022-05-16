//todo метод Object.values()
/*
 * У нас є об'єкт, у якому зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
 */

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// let sum = 0;

// for (const salary of Object.values(salaries)) {
//   sum += salary;
// }

// console.log(sum);

function getTotalSalary(object = {}) {
  const numbers = Object.values(object);
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(getTotalSalary());
console.log(getTotalSalary(salaries));
