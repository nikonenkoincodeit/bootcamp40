//todo Основи об'єктів
/*
 * Напиши скрипт, який, для об'єкта user, послідовно:

* додає поле mood зі значенням 'happy'
* замінює значення hobby на 'skydiving'
* замінює значення premium на false
* виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
 */

const user = {
  name: 'John',
  age: 21,
  hobby: 'css',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

// console.table(user);

for (const key of Object.keys(user)) {
  console.log(`${key} - ${user[key]}`);
}

// for (const key of Object.entries(user)) {
//   console.log(key[0], key[1]);
// }
