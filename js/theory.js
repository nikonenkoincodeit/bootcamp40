//Формат JSON
//JSON (JavaScript Object Notation) - сучасний текстовий формат зберігання і передачі структурованих даних у текстовій формі. Звичний об'єктоподібний синтаксис JSON - дуже зручний. Саме у цьому форматі дані будуть приходити і відправлятися на сервер, зберігатися в локальному сховищі тощо.
//За рахунок елементарного синтаксису дозволяє зберігати:

// string, number, object, array, boolean і null.

//Перелічені елементи будуть представлені у текстовому форматі. JSON є найпростішим для розуміння відкритим стандартом.

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
//   "...."
// );
// console.log("dataJSON :>> ", dataJSON);
//JSON.parse() може приймати функцію як другий аргумент, який може трансформувати значення
//об'єкта до їх повернення.
//Метод JSON.parse(data, reviver)

// const dataJSON = JSON.stringify(person, null, "....");
// console.log("dataJSON :>> ", dataJSON);

// const data = JSON.parse(dataJSON)

// const data = JSON.parse(dataJSON, (key, value) => {
//   if (typeof value === "string") return value.toUpperCase();
//   return value;
// });

// console.log("data :>> ", data);
// Обробка помилок
// try {} catch (err) { }

// const data = JSON.parse(dataJSON);
// console.log("data :>> ", data);
// try {
//   const data = JSON.parse(dataJSON);
// } catch (err) {
//   console.log("err :>> ", err.name);
// }

//Локальне сховище

const user = {
  name: "Sammy",
  email: "Sammy@domain.com",
  plan: "Pro",
  age: 25,
};

// setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.

localStorage.setItem("user", JSON.stringify(user));
localStorage.setItem("users", JSON.stringify(user));
localStorage.setItem("use", JSON.stringify(user));

// getItem(key) - повертає зі сховища значення з ключем key.
// const dataJSON = localStorage.getItem("user1");
// console.log("dataJSON :>> ", dataJSON);

// removeItem(key) - видаляє зі сховища запис з ключем key.
// localStorage.removeItem("user");
// clear() - повністю очищає всі записи сховища.
// localStorage.clear();

// length - кількість записів у сховищі.
// console.log("localStorage.length :>> ", localStorage.length);

console.log("key ", localStorage.key(0));
const keys = [];
for (let index = 0; index < localStorage.length; index++) {
  keys.push(localStorage.key(index));
}

console.log("keys :>> ", keys);
