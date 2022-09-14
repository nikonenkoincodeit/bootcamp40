//Імпорт *

// 📁 main.js
// import { sayHi } from "./script.js";

// sayHi("John"); // Hello, John!
// sayBye("John"); // Bye, John!

// import * as say from "./script.js";
// console.log("say :>> ", say);
// say.sayHi("John");
// say.sayBye("John");

//Імпорт «як»

// import { sayHi as hi, sayBye as bye } from "./script.js";

// hi("John"); // Hello, John!
// bye("John"); // Bye, John!

// import myF from "./script.js";
// myF();

//Формат JSON
// Метод JSON.stringify()

//JSON.stringify() може приймати два додаткові аргументи, перший з яких є функцією reviver,
//а другий — рядкове або числове значення, що використовується як пробіл у рядку, що
//повертається.

// const user = {
//   name: "Sammy",
//   email: "Sammy@domain.com",
//   plan: "Pro",
//   age: 25,
// };

// const userJSON = JSON.stringify(user, null, "...");
// const userJSON = JSON.stringify(
//   user,
//   (key, value) => {
//     if (key === "name") return;
//     return value;
//   },
//   "/////////////"
// );

// console.log("userJSON :>> ", userJSON);

//JSON.stringify(data, reviver, space);

//JSON.parse() може приймати функцію як другий аргумент, який може трансформувати значення
//об'єкта до їх повернення. Тут значення об'єкта трансформуються у верхній регістр у
//об'єкті, що повертається методу parse:
//Метод JSON.parse(data, reviver)

// const userJSON = JSON.stringify(user);

// console.log("userJSON :>> ", userJSON);

// const userParse = JSON.parse(userJSON, (key, value) => {
//   if (key === "name") return;
//   console.log("value :>> ", value);
//   //  return value.toUpperCase();
// });

// console.log("userParse :>> ", userParse);

// //Обробка помилок
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
const user = {
  name: "Sammy",
  email: "Sammy@domain.com",
  plan: "Pro",
  age: 25,
};
//Локальне сховище
// setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.
// console.log("localStorage :>> ", localStorage);
localStorage.setItem("2222", JSON.stringify(user));
localStorage.setItem("user", JSON.stringify(user));
// localStorage.setItem("user2", JSON.stringify(user));

// getItem(key) - повертає зі сховища значення з ключем key.
// const userData = localStorage.getItem("user2");
// console.log("userData :>> ", userData);
// removeItem(key) - видаляє зі сховища запис з ключем key.
// const result = localStorage.removeItem("user2");
// clear() - повністю очищає всі записи сховища.
// localStorage.clear();
// length - кількість записів у сховищі.
// console.log("length ", localStorage.length);
// console.log("length ", localStorage.key(0));

// const keys = [];
// for (let index = 0; index < localStorage.length; index++) {
//   keys.push(localStorage.key(index));
// }

// console.log("keys :>> ", keys);
