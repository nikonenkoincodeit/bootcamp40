// todo Калькулятор

/*
 * Створіть об'єкт calculator із трьома методами:

* read(firstValue, secondValue)- приймає два значення та зберігає їх як властивості об'єкта.
* add() - повертає суму збережених значень.
* mult() - перемножує збережені значення та повертає результат.
 */

const calculator = {
  a: 0,
  b: 0,

  read(firstValue, secondValue) {
    this.a = firstValue;
    this.b = secondValue;
  },

  add() {
    return this.a + this.b;
  },

  mult() {
    return this.a * this.b;
  },
};

calculator.read(10, 20);
console.log(calculator.add());
console.log(calculator.mult());

calculator.read(50, 30);
console.log(calculator.add());
console.log(calculator.mult());
