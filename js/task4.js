// todo bind()

/*
 * Створіть метод counter який буде з this брати "i" і збільшувати його на одиницю. Після повертати "i".
 * Використовуйте замикання та bind, щоб встановити змінній "i" різні значення
 * Виведіть результат у консоль
 */

function counter() {
  console.log('this :>> ', this);
  this.i += 1;
  return this.i;
}

const objA = {
  i: 1,
};

const objB = {
  i: 400,
};

console.log(counter());
console.log(counter());

// const counter1 = counter.bind(objA);
// const counter2 = counter.bind(objB);

// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());
