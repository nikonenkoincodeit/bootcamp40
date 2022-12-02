// todo bind()

/*
 * Створіть метод counter який буде з this брати "i" і збільшувати його на одиницю. Після повертати "i".
 * Використовуйте замикання та bind, щоб встановити змінній "i" різні значення
 * Виведіть результат у консоль
 */

function counter() {
  return this.i + 1;
}

const objA = {
  i: 1,
};

const objB = {
  i: 400,
};

const counterA = counter.bind(objA);
console.log('counterA() :>> ', counterA());

const counterB = counter.bind(objB);
console.log('counterB() :>> ', counterB());
