// todo Інлайн стрілочні функції

/*
 * Виконайте рефакторинг коду задачі 3 за допомогою стрілочних функцій. */

const each = (array = [], callback) => {
    const result = [];
    array.forEach((item)  => {
      result.push(callback(item));
    });
  
    return result;
  }
  
  console.log(
    each([64, 49, 36, 25, 16], function (value) {
      return value * 2;
    }),
  );
  console.log(
    each([64, 49, 36, 25, 16], function (value) {
      return value - 10;
    }),
  );
  console.log(
    each([64, 49, 36, 25, 16], function (value) {
      return Math.sqrt(value);
    }),
  );
  console.log(
    each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
      return Math.ceil(value);
    }),
  );
  console.log(
    each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
      return Math.floor(value);
    }),
  );
  