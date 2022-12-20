let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

// const getTotalSalary = (departament) => {
//     if (Array.isArray(departament)) {
//         return departament.reduce((acc, element) => acc + element.salary, 0)
//     } else {
//         let total = 0

//         for (const subdep of Object.values(departament)) {
//             total += getTotalSalary(subdep)
//         }
//         return total
//     }
// }

// console.log(getTotalSalary(company))

const getTotalSalary = (departament, arr) => {
  for (const key in departament) {
    const item = departament[key];
    if (Array.isArray(item)) {
      arr.push(...item);
    } else {
      getTotalSalary(item, arr);
    }
  }
  return arr.reduce((acc, { salary }) => acc + Number(salary), 0);
};

console.log(getTotalSalary(company, []));
