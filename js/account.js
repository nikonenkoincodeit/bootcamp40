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

  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    };
  },

  deposit(amount) {
    this.balance += amount;

    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.transactions.push(newTransaction);
  },
};
