//todo Example 3 - Глибока деструктуризація
/*
 * Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
 */

// function getBotReport({ companyName, stock }) {
//   return `${companyName} has ${stock.repair + stock.defense} goods in stock`;
// }

function getBotReport({ companyName, stock: { defense, repair } }) {
  return `${companyName} has ${repair + defense} bots in stock`;
}

// Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Очікується
console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repair: 150,
      defense: 50,
    },
  }),
);

console.log(
  getBotReport({
    companyName: 'ATB',
    stock: {
      repair: 50,
      defense: 50,
    },
  }),
);
