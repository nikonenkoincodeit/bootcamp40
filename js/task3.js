/*
 * Є функція, яка генерує випадкові числа від 1 до 4.

 * Написати функцію, яка повертає проміс.
 * Зробіть так, щоб згенероване число було затримкою функції setTimeout в секундах.
 * Оберніть все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
 * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`), і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
 */

const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;

const makePromise = () => {
  const delay = getRandomNumber();
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (delay < 3) {
        res(delay);
      }
      rej(delay);
    }, delay * 1000);
  });
};

const handleSuccess = delay => console.warn(`✅ Resolved after ${delay} sec`);
const handleError = delay => console.error(`❌ Rejected after ${delay} sec`);
// makePromise()
//   .then(response => handleSuccess(response))
//   .catch(error => handleError(error));
makePromise().then(handleSuccess).catch(handleError);
