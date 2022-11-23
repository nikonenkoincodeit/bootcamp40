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
//додає поле mood зі значенням 'happy'
user.mood = 'happy';
// console.log('user :>> ', user);
//замінює значення hobby на 'skydiving'
user['hobby'] = 'skydiving';
// console.log('user :>> ', user);

//замінює значення premium на false
user.premium = false;
// console.log('user :>> ', user);
//виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
const keys = Object.keys(user);
// console.log('keys :>> ', keys);

for (const key of keys) {
  console.log(key + ':' + user[key]);
}
