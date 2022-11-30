//todo Колбек функції
/*
 * Додайте об'єкту обліковий запис методами withdraw (amount, onSuccess, onError) і deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий і третій - колбеки.

* Метод withdraw викликає onError з текстом якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

* Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

withdraw 
onError('Сума на рахунку не дозволяє виконати транзакцію');
onSuccess('Операція виконана успішно');

deposit
onError('Не можливо виконати транзакцію');
onSuccess('Операція виконана успішно'); 
 */

const TRANSACTION_LIMIT = 1000;

const account = {
  name: 'John',
  balance: 2000,
  // Метод withdraw викликає onError з текстом якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount > this.balance) {
      onError('Сума на рахунку не дозволяє виконати транзакцію');
      return;
    }

    onSuccess('Операція виконана успішно');
  },

  // Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount <= 0) {
      return onError('Не можливо виконати транзакцію');
    }
    onSuccess('Операція виконана успішно');
  },
};

function handleSuccess(message) {
  console.warn(`✅ Success! ${message}`);
}

function handleError(message) {
  console.error(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.deposit(1600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
