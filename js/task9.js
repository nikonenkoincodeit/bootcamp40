// todo Метод forEach

/*
 * Виконайте рефакторинг коду, використовуючи метод для Each і стрілочні функції.
 */

const calculateAverage = (...args) => {
  let total = 0;

  args.forEach(number => {
    total += number;
  });

  return total / args.length;
};

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

function foo() {
  let count = 0;

  return function () {
    return (count += 1);
  };
}

const counter = foo();
const counter2 = foo();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter2());
console.log(counter2());
console.log(counter2());
