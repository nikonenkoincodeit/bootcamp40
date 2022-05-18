// todo Стрілочні функції

/*
 * Виконайте рефакторинг коду задачі 2 за допомогою стрілочних функцій. */

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

const handleSuccess = message => console.warn(`✅ Success! ${message}`);

const handleError = message => console.error(`❌ Error! ${message}`);

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.deposit(1600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
