/*
 * Methods:

 * Promise.race(array) - повертає перший успішно виконаний або відхилений проміс, зі значенням чи причиною відхилення цього промісу.
 *
 * Promise.all(array) - повертає проміс, який виконається тоді, коли будуть успішно виконані всі проміси, або відхилено будь-який з них.
 *
 * Promise.allSettled(array) - повертає проміс, який виконується коли всі отримані проміси завершені (успішно виконані або відхилені), міститиме масив результатів отриманих промісів (status і value для успішних, status та reason для неуспішних)
 *
 * Promise.any(array) - як тільки один із промісів виконається успішно, метод поверне значення виконаного промісу. Якщо жоден із промісів не завершиться успішно, тоді повернутий Promise буде відхилено
 */

/*
 * Зробіть 3 проміси - по одному для кожного фреймворку з масиву.
 * У кожному розташована функція setTimeout із випадковою затримкою від 0 до 2 секунд.
 * Зробити так, щоб проміси і резолвилися, і реджектилися випадково.
 * Нехай кожен проміс своїм результатом повертає цю затримку та ім'я фреймворку, а при помилці ще й текст помилки 'Promise error'.
 */

const frameworks = ['React', 'Vue', 'Angular'];

const getRandomDelay = () => Math.ceil(Math.random() * 2000);

const makePromise = framework => {
  const delay = getRandomDelay();
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 1) {
        res({ framework, delay });
      } else {
        rej({ framework, delay, error: 'Promise error' });
      }
    }, delay);
  });
};

// const promises = frameworks.map(framework => makePromise(framework));
const promises = frameworks.map(makePromise);
// console.log('promises :>> ', promises);
/*
 * За допомогою Promise.race дочекайтеся завантаження першого промісу, що спрацював, і виведіть результат його роботи на екран: `✅ ${Framework_name} won with ${delay} ms`
 * або результат помилки: `❌ ${error}! ${name} rejected in ${delay} ms`
 */

// const handleSuccess = ({ framework, delay }) =>
//   console.log(`✅ ${framework} won with ${delay} ms`);

// const handleError = ({ framework, delay, error }) =>
//   console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);

// Promise.race(promises).then(handleSuccess).catch(handleError);

/*
 * За допомогою Promise.all отримайте масив результатів
 * Виведіть на екран інформацію, з якою затримкою виконався проміс для кожного фреймфорка: `✅ ${Framework_name} fulfilled in ${delay} ms`
 * Або з якою затримкою зареджектився один із них: `❌ ${error}! ${Framework_name} rejected in ${delay} ms`
 */

// const handleSuccessAll = ({ framework, delay }) =>
//   console.log(`✅ ${framework} fulfilled in ${delay} ms`);

// const handleError = ({ framework, delay, error }) =>
//   console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);

// Promise.all(promises)
//   .then(response => {
//     response.forEach(item => handleSuccessAll(item));
//   })
//   .catch(error => handleError(error));

/*
 * За допомогою Promise.allSettled отримайте масив результатів.
 * Виведіть на екран інформацію, з яким результатом виконався проміс для кожного фреймфорка:
 * `✅ ${Framework_name} fulfilled in ${delay} ms`
 * `❌ ${error}! ${Framework_name} rejected in ${delay} ms`
 *
 * Приклад відповіді:
 * {status: "fulfilled", value: 99},
 * {status: "rejected", reason: Error: an error}
 */

// const handleSuccessAll = ({ framework, delay }) =>
//   console.log(`✅ ${framework} fulfilled in ${delay} ms`);

// const handleError = ({ framework, delay, error }) =>
//   console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);
// Promise.allSettled(promises).then(response => {
//   console.log('response :>> ', response);
//   response.forEach(obj => {
//     if (obj.status === 'fulfilled') handleSuccessAll(obj.value);
//     else handleError(obj.reason);
//   });
// });

/*
 * За допомогою Promise.any дочекайтеся завантаження першого успішного промісу та виведіть результат його роботи на екран: `✅ ${Framework_name} won with ${delay} ms` або результат помилки кожного промісу в catch: `❌ ${error}! ${name} rejected in ${delay} ms`
 * Приклад об'єкта помилки в catch:
 * {
 * errors: (3) [{…}, {…}, {…}]
 * message: "All promises were rejected"
 * stack: "AggregateError: All promises were rejected"
 * }
 */

// const handleSuccess = ({ framework, delay }) =>
//   console.log(`✅ ${framework} won with ${delay} ms`);

// const handleError = ({ framework, delay, error }) =>
//   console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);
// console.log('promises :>> ', promises);
// Promise.any(promises)
//   .then(response => handleSuccess(response))
//   .catch(error => console.log('error :>> ', error));
