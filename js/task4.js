// todo Стрілочні функції

/*
 * Виконайте рефакторинг коду задачі 1 за допомогою стрілочних функцій. */

const createProduct = (object, callback) => {
  const product = {
    ...object,
    id: Date.now().toString(),
  };

  callback(product);
};

const logProduct = product => console.log(product);
const logTotalPrice = ({ price, quantity }) => console.log(price * quantity);

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
