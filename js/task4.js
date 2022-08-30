// todo

/*
 * Перепиши функцію те щоб вона приймала об'єкт параметрів з властивостями companyName і stock і виводила репорт про кількість товарів у складі будь-якої компанії. */

function getStockReport({ companyName, stock }) {
  const values = Object.values(stock);
  //console.log('values :>> ', values);
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return `${companyName} has ${total} bots in stock`;
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
