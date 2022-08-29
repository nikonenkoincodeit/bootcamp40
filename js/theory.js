//Створення об'єкта

// const a = { name: 'Poly' };

const b = new Object({ a: 'hi' });
// console.log('a :>> ', a);
// console.log('b :>> ', b);

//Вкладені властивості

// const a = {
//   b: [1, 2, 3],
//   c: {},
// };
// console.log('a :>> ', a);
//Звернення до властивостей через крапку
//Звернення до вкладених властивостей
// console.log('a :>> ', a.c?.d?.w);

//Звернення до властивостей через квадратні дужки
// const key = 'b';

// console.log('a[key] :>> ', a[key]);
// console.log('a.c :>> ', a.c);

//Зміна значення властивості

// const user = {
//   name: 'Poly',
// };
// console.log('user :>> ', user);
// user.name = 'Ajax';

// console.log('user :>> ', user);

//Додавання властивостей

// const user = {
//   name: 'Poly',
// };
//user.age = 25;
// user['age'] = 25;
// console.log('user :>> ', user);
//Короткі властивості

// const name = 'Poly';
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// const user = {
//   name,
//   age,
// };

// console.log('user :>> ', user);
//Обчислювальні властивості user[propName] = "Генрі Сибола";

// function createObj(key, value = '') {
//   return {
//     [key]: value,
//   };
// }

// console.log('createObj(key, value = ) :>> ', createObj('name', 'Poly'));

//Методи об'єкта

// const user = {
//   name: 'Poly',
//   age: 25,
// };

// console.log('Object.keys(user) :>> ', Object.keys(user));
// console.log('Object.values(user) :>> ', Object.values(user));
// console.log('Object.entries(user) :>> ', Object.entries(user));

//Доступ до властивостей об'єкта в методах

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     console.log(this.books);
//   },
//   // getBooks: () => {
//   //   console.log(this.books);
//   // },
// };

// console.log('bookShelf.getBooks() :>> ', bookShelf.getBooks());

//Перебирання об'єкта Цикл for...in Метод hasOwnProperty()

const user = {
  name: 'Poly',
  age: 25,
  getName() {
    return this.name;
  },
};

const a = Object.create(null);
// const a = Object.create(user);
a.sport = true;
// console.log('a :>> ', a);
// console.log('a.getName() :>> ', a.getName());

// for (const key in a) {
//   console.log('a.hasOwnProperty(key) :>> ', a.hasOwnProperty(key));
//   if (a.hasOwnProperty(key)) {
//     console.log('key :>> ', key);
//   }
// }
