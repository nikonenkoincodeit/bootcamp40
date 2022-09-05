//Класи JavaScript були введені в ECMAScript 2015 і являють собою синтаксичний цукор над існуючим в JavaScript механізмом прототипного успадкування.

//Оголошення класу:
// 1 class declaration
// class Rectangle {}

//2 class expression
// const Rectangle = class {};

// Метод constructor — спеціальний метод, необхідний створення та ініціалізації об'єктів, створених, з допомогою класу. У класі може бути лише один метод з ім'ям конструктора.

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// const square = new Rectangle(10, 10);
// console.log('square :>> ', square);

//Методи прототипу

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);
// console.log('square :>> ', square);
// console.log('square :>> ', square.calcArea());

//Статичні методи та властивості
//Ключове слово static визначає статичний метод або властивості для класу.
//Статичні методи та властивості викликаються без інстанцування (en-US) їхнього класу,
//і не можуть бути викликані у екземплярів (instance) класу.

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static displayName = 'Крапка';
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy); //повертає квадратний корінь суми квадратів
//   }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
// console.log('p1.displayName :>> ', Point.displayName);

//Публічні поля
// class Rectangle {
//   height = 0;
//   width;
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// const rectangle = new Rectangle(52, 45);
// console.log('rectangle :>> ', rectangle);
//Приватні поля

// class Rectangle {
//   #height = 0;
//   #width;
//   constructor(height, width) {
//     this.#height = height;
//     this.#width = width;
//   }
// }

// const rectangle = new Rectangle(52, 45);
// console.log('rectangle.#width :>> ', rectangle);

//Спадкування класів за допомогою extends
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   speak() {
//     console.log(`${this.name} видає звук.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, age) {
//     super(name, age);
//   }
//   speak() {
//     super.speak();
//     // console.log(`${this.name} гавкає.`);
//     // console.log(`Вік ${this.name} ${this.age}`);
//   }
// }

// let dog = new Dog('Барон', 25);
// dog.speak();

//Геттери і сеттери

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//     console.log('newRole :>> ', newRole);
//   }
// }

// const user = new User({
//   email: 'mango@mail.com',
//   role: 'ADMIN',
// });

// user.role('USER');
// console.log('user :>> ', user.role);

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   speak() {
//     console.log(`${this.name} видає звук.`);
//   }
// }

// function Animal(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Animal.prototype.speak = function () {
//   console.log(`${this.name} видає звук.`);
// };

// const animal = new Animal('Барон', 25);
// console.log('animal :>> ', animal);
// animal.speak();
