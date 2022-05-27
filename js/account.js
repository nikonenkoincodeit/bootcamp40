const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

export const account = {
  balance: 0,
  transactions: [],

  getBalance() {
    return this.balance;
  },

  createTransaction(amount, type, operation) {
    return {
      id: generateId(),
      type,
      amount,
      operation,
    };
  },

  deposit({ amount, operation }) {
    this.balance += amount;

    const newTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT,
      operation,
    );

    this.transactions.push(newTransaction);
  },

  withdraw({ amount, operation }) {
    this.balance -= amount;

    const newTransaction = this.createTransaction(
      amount,
      Transaction.WITHDRAW,
      operation,
    );

    this.transactions.push(newTransaction);
  },

  getTransactionTotal(type) {},
};

function generateId() {
  return (
    String.fromCharCode(Math.floor(Math.random() * 26) + 97) +
    Math.random().toString(16).slice(2) +
    Date.now().toString(16).slice(4)
  );
}
