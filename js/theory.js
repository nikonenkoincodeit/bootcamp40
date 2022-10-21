//Формат JSON
//JSON – об'єкт. Своєрідний метод зберігання та передачі інформації структурованого характеру.
//За рахунок елементарного синтаксису дозволяє зберігати все, що завгодно:

// рядки;
// масиви;
// числа;
// об'єкти.

//Перелічені елементи будуть представлені у текстовому форматі. JSON є найпростішим для розуміння відкритим
//стандартом.

// Правила синтаксису JSON
// Синтаксис JSON походить від синтаксису запису об'єктів JavaScript:

// Дані записуються у вигляді пар "ім'я/значення"
// Дані поділяються комами
// У фігурних дужках записуються об'єкти
// У квадратних дужках записуються масиви
const person = { name: "John", age: 31, city: "New York" };

// Метод JSON.stringify()
//JSON.stringify() може приймати два додаткові аргументи, перший з яких є функцією reviver,
//а другий — рядкове або числове значення, що використовується як пробіл у рядку, що
//повертається.

// const dataJSON = JSON.stringify(
//   person,
//   (key, value) => {
//     if (key === "name") return;
//     return value;
//   },
//   "....."
// );
// console.log("dataJSON :>> ", dataJSON);

//JSON.parse() може приймати функцію як другий аргумент, який може трансформувати значення
//об'єкта до їх повернення. Тут значення об'єкта трансформуються у верхній регістр у
//об'єкті, що повертається методу parse:
//Метод JSON.parse(data, reviver)

// const user = {
//   name: "Sammy",
//   email: "Sammy@domain.com",
//   plan: "Pro",
//   age: 25,
// };

// const userJSON = JSON.stringify(user);

// console.log("userJSON :>> ", userJSON);
// const obj = {
//   name: "Poly",
//   time: Date.now(),
//   a: {
//     b: {
//       c: 2,
//     },
//   },
// };

// const objJSON = JSON.stringify(obj);
// console.log("objJSON :>> ", objJSON);

//   const user2 = JSON.parse(JSON.stringify(obj));
//   console.log("user2 :>> ", user2);

// console.log(obj);
// console.log(user2);
// console.log(obj === user2);

// Обробка помилок
// try {
//   const userParse = JSON.parse(userJSON, (key, value) => {
//     // if (typeof value === "string") {
//     return value.toUpperCase();
//     // }
//     // return value;
//   });
//   console.log("userParse :>> ", userParse);
// } catch (err) {
//   console.log("err :>> ", err);
// }

//Локальне сховище

// const user = {
//   name: "Sammy",
//   email: "Sammy@domain.com",
//   plan: "Pro",
//   age: 25,
// };

// setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.
// console.log("localStorage :>> ", localStorage);
// localStorage.setItem("user", JSON.stringify(user));
// localStorage.setItem("user2", JSON.stringify(user));
// localStorage.setItem("user3", JSON.stringify(user));

// getItem(key) - повертає зі сховища значення з ключем key.
// const userData = localStorage.getItem("user");
// console.log("userData :>> ", userData);
// removeItem(key) - видаляє зі сховища запис з ключем key.
// localStorage.removeItem("user");
// clear() - повністю очищає всі записи сховища.
// localStorage.clear();
// length - кількість записів у сховищі.
// console.log("length ", localStorage.length);

// console.log("key ", localStorage.key(0));

// const keys = [];
// for (let index = 0; index < localStorage.length; index++) {
//   keys.push(localStorage.getItem(localStorage.key(index)));
// }

// console.log("keys :>> ", keys);
