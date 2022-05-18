// todo Інлайн стрілочні функції

/*
 * Виконайте рефакторинг коду задачі 3 за допомогою стрілочних функцій. */

const each = (array, callback) => {
  const newArray = [];

  for (const number of array) {
    newArray.push(callback(number));
  }

  return newArray;
};

console.log(each([64, 49, 36, 25, 16], value => value * 2));
console.log(each([64, 49, 36, 25, 16], value => value - 10));
console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
