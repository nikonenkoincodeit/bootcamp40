//todo метод Object.values()
/*
 * У нас є об'єкт, у якому зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
 */

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sum(salaries) {
  let total = 0;
  const values = Object.values(salaries);
  for (const value of values) {
    total += value;
  }

  return total;
}

// function sum(salaries) {
//   let total = 0;
//   for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//       total += salaries[key];
//     }
//   }
//   return total;
// }

console.log(sum({}));
console.log(sum(salaries));
