// імпорт опцій
import { Transaction } from './options.js';

// логіка особистого кабінету користувача
export const account = {
  balance: 0, // баланс
  transactions: [], // масив транзакцій

  getBalance() {
    // повертає баланс
    return this.balance;
  },

  createTransaction(amount, type, operation) {
    // створює транзакцію
    return {
      id: this.transactions.length + 1,
      type,
      amount,
      operation,
    };
  },

  deposit({ amount, operation }) {
    // метод для створення поповнення рахунку
    this.balance += amount;

    const newTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT,
      operation,
    );

    this.transactions.push(newTransaction);
  },

  withdraw({ amount, operation }) {
    // метод для створення методу витрат
    this.balance += amount; // TODO

    const newTransaction = this.createTransaction(
      amount,
      Transaction.WITHDRAW,
      operation,
    );

    this.transactions.push(newTransaction);
  },

  getTransactionTotal(type) {
    // метод для отримання суми всіх операцій по типу
    return this.transactions.reduce((acc, item) => {
      if (type === item.type) {
        acc += item.amount;
      }

      return acc;
    }, 0);
  },
};
