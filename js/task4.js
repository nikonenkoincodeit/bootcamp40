// todo Стрілочні функції

/*
 * Виконайте рефакторинг коду задачі 1 за допомогою стрілочних функцій. */

const createProduct = (product, callback) => {
  const newProduct = { ...product, id: Date.now() };
  callback(newProduct);
};

const logProduct = product => {
  console.log('product :>> ', product);
};

const logTotalPrice = ({ price, quantity }) => {
  console.log('total :>> ', price * quantity);
};

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);

createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
