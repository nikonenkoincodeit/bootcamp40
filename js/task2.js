//todo Колбек функції
/*
 * Додайте об'єкту обліковий запис методами withdraw (amount, onSuccess, onError) і deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий і третій - колбеки.

* Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

* Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.
 */

const TRANSACTION_LIMIT = 1000;

const account = {
  name: 'John',
  balance: 2000,

  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount > this.balance) {
      onError('Сума на рахунку не дозволяє виконати транзакцію');
    } else {
      onSuccess('Операція виконана успішно');
    }
  },

  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount <= 0) {
      onError('Не можливо виконати транзакцію');
    } else {
      onSuccess('Операція виконана успішно');
    }
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
