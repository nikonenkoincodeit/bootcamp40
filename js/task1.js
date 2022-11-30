//todo Колбек функції
/*
 * Напишіть такі функції:

* createProduct(obj, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи унікальний ідентифікатор у властивість id і викликає колбек передаючи йому створений об'єкт.
* logProduct(product) - колбек, що приймає об'єкт продукту і логує його в консоль
* logTotalPrice(product) - колбек, що приймає об'єкт продукту і логує загальну вартість товару в консоль
 */

function createProduct(product, callback) {
  const newProduct = { ...product, id: Date.now() };
  callback(newProduct);
}

function logProduct(product) {
  console.log('product :>> ', product);
}

function logTotalPrice({ price, quantity }) {
  console.log('total :>> ', price * quantity);
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);

createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
