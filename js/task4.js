//todo Комплексні завдання
/*
 * Напиши скрипт управління особистим кабінетом інтернет-банку. Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

 * Типів транзакцій лише два.
 * Можна покласти чи зняти гроші з рахунку.
 */

const TRANSACTIONS = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт з властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,
  // Історія транзакцій
  transactions: [],
  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return { id: this.transactions.length + 1, amount, type };
  },
  /*
   * Метод, який відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);
    this.balance += amount;
    this.transactions.push(transaction);
  },
  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * Після чого додає його в історію транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return 'Недостатньо коштів.';
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);
    this.transactions.push(transaction);
  },
  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return 'Not found';
  },
  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

account.deposit(200);
account.deposit(2000);
account.deposit(300);
account.deposit(3000);
account.withdraw(100);
account.withdraw(10);
account.withdraw(400);
account.withdraw(400);
account.withdraw(400);
account.withdraw(400);
account.withdraw(400);

console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(10));
console.log(account.getTransactionTotal(TRANSACTIONS.DEPOSIT));
console.log(account.getTransactionTotal(TRANSACTIONS.WITHDRAW));

// console.table(account.transactions);
console.log(account.getBalance());
