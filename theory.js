//! Протокол HTTP
//HyperText Transfer Protocol (протокол передачі гіпертексту) - широко розповсюджений
//протокол для передачі веб-ресурсів різних типів: html, css, javascript, зображень,
//аудіо та відео тощо.
// HTTP ґрунтується на структурі клієнт-сервер і моделі запит-відповідь

//!Запит відбувається у кілька етапів:
// DNS-запит - пошук найближчого DNS-сервера, щоб перетворити адресу (наприклад google.com)
//в її числове вираження, IP-адресу (74.125.87.99).
// З'єднання - встановлення з'єднання з сервером за отриманою IP-адресою.
// Передача даних - пересилання пакетів з клієнта на сервер.
// Очікування відповіді - очікування, доки пакети даних дійдуть до сервера, він їх
//обробить і відповідь повернеться назад.
// Отримання даних - пакети надійшли, можна отримувати з них дані.

//! Протокол HTTPS
//HyperText Transfer Protocol Secure - це налаштування над протоколом HTTP, в якій всі
//повідомлення між клієнтом і сервером шифруються з метою підвищення безпеки.

//API (інтерфейс прикладного програмування) - набір чітко визначених правил зв'язку між
//різними програмними компонентами. Інтерфейс описує, що можна попросити програму зробити
//і що буде в результаті.

//REST (representational state transfer) - стиль бекенд-архітектури, ґрунтується на наборі
//принципів, які описують, яким чином визначаються і адресуються мережеві ресурси.

//REST API - бекенд побудований за принципом REST. Слугує прошарком між веб-застосунком і
//базою даних. Має стандартний інтерфейс для звернення до ресурсів. Працює як веб-сайт,
//ми посилаємо HTTP-запит з клієнта на сервер, а у відповідь, замість HTML-сторінки,
//отримуємо дані в JSON-форматі.

//!Формат запиту
//REST-сервіс вимагає, щоб клієнт робив запит на додавання, видалення або зміну даних.
//Запит може складатися з наступних частин.

// HTTP-метод	Визначає, яку операцію виконувати.
// HTTP-заголовки	Дозволяє клієнту передавати службову інформацію про запит.
// Шлях	Шлях до ресурсу. Доступні шляхи описуються в документації бекенду.
// Тіло	Блок запиту, що містить дані.

//! HTTP-методи
// Виділяють кілька основних HTTP-методів для роботи з REST-сервісом.

// POST	Створити новий ресурс
// GET	Отримати набір ресурсів або один ресурс
// PUT	Оновити існуючий або створити новий ресурс
// PATCH	Оновити існуючий ресурс
// DELETE	Видалити ресурс

//! HTTP-заголовки
//Заголовки містять службову інформацію, що стосується контенту запиту. Наприклад, тип
//контенту, який клієнт може обробити у відповіді від сервера (заголовок Accept) або,
//який описує тип ресурсу, який клієнт відправляє серверу або сервер відправляє клієнту
//(заголовок Content-Type).
// Accept: text/html
// Content-Type: application/json

//! Шляхи
// Запити повинні містити шлях до ресурсу, над яким виконується операція. Доступні шляхи
//(ендпоінти, ресурси) описуються в документації бекенду.

// GET https://bookstore.com/api/orders?page=1

//! Коди відповідей
//На запит клієнта сервер відправляє відповідь, яка містить код стану, щоб інформувати
//клієнта про результат операції. Коди діляться на групи.
//developer.mozilla.org/ru/docs/Web/HTTP/Status

//! AJAX
//AJAX (Asynchronous JavaScript and XML) - метод отримання або відправлення даних з
//подальшим оновленням інтерфейсу за цими даними, без потреби перезавантаження сторінки.
//Завдяки цьому зменшується час відгуку і веб-сторінка стає інтерактивнішою.
//Цей процес можна розібрати на прикладі завантаження даних.

//! Fetch API
//fetch(url, options)
//https://jsonplaceholder.typicode.com/

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     console.log("response:>> ", response);
//     return response.json();
//   })
//   .then(console.log);

//! Перевірка відповіді

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     // return Promise.reject(response.statusText)
//     throw new Error(response.statusText);
//   })
//   .then(console.log);

//! Параметри рядка запиту
// const url = "https://jsonplaceholder.typicode.com/users?_limit=9&_sort=name";

// fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     // return Promise.reject(response.statusText)
//     throw new Error(response.statusText);
//   })
//   .then(console.log);

//! Клас URLSearchParams
const searchParams = new URLSearchParams({
  //   fields: "name,capital,currencies",
  _limit: 5,
  _sort: "name",
});
// console.log("searchParams :>> ", searchParams.toString());

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     // return Promise.reject(response.statusText)
//     throw new Error(response.statusText);
//   })
//   .then(console.log);

//! HTTP-заголовки

//! Клас Headers
// Клас Headers дозволяє виконувати різні дії в заголовках HTTP-запиту і відповіді.
//До цих дій належать діставання, налаштування, додавання і видалення заголовків.

// const headers = new Headers({
//   "Content-Type": "application/json",
//   "X-Custom-Header": "custom value",
// });

// headers.append("Content-Type", "text/bash");
// headers.append("X-Custom-Header", "custom value");
// headers.has("Content-Type"); // true
// headers.get("Content-Type"); // "text/bash"
// headers.set("Content-Type", "application/json");
// headers.delete("X-Custom-Header");

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// fetch(url, {
//   headers,
//   // headers: {
//   //   "Content-Type": "application/json",
//   // },
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     // return Promise.reject(response.statusText)
//     throw new Error(response.statusText);
//   })
//   .then(console.log);

//Крос-доменні запити
//За замовчуванням HTTP-запит можна робити тільки в рамках поточного сайту.
//При спробі запиту на інший домен, порт або протокол, тобто виконати крос-доменний запит -
//браузер видає помилку. Це зроблено з міркувань безпеки і права доступу налаштовуються на
//бекенді. Якщо бекенд не підтримує крос-доменні запити, фронтенд-розробник нічого не
//зможе з цим зробити у своєму коді.

const url = `https://jsonplaceholder.typicode.com/users`;
fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    // return Promise.reject(response.statusText)
    throw new Error(response.statusText);
  })
  .then(console.log);

//http://web/api/index.php
//https://cors-anywhere.herokuapp.com/corsdemo
