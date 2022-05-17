// todo

/*
 * Перепиши функцію те щоб вона приймала об'єкт параметрів з властивостями companyName і stock і виводила репорт про кількість товарів у складі будь-якої компанії. */

function getStockReport({ companyName, stock }) {
  let total = 0;

  for (const value of Object.values(stock)) {
    total += value;
  }

  return `${companyName} has ${total} goods in stock`;
}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenseBots: 50,
    },
  }),
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  }),
); // "Belacci has 35 item in stock"
