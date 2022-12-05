//Процедурне програмування - набір не пов'язаних явно функцій і змінних для зберігання і
//обробки інформації. Цей підхід - простий і прямолінійний, і може використовуватись для
//задач, в яких немає тісно пов'язаних сутностей (даних і функцій для їх обробки).

//Об'єктно - орієнтоване програмування (ООП) – це модель програмування яка базується на
//стверджені того, що програма це сукупність об’єктів які взаємодіють між собою.
//Кожен об’єкт в цій моделі є незалежним, і він здатний отримувати, обробляти дані та
//відправляти ці дані іншим об’єктам. В ООП використано моделі успадкування, модульності,
//поліморфізму та інкапсуляції.

//- Інкапсуляція або приховування даних. Зміст інкапсуляції полягає у
//приховуванні від зовнішнього користувача деталей реалізації об'єкта, замість цього
//надаючи інтерфейс взаємодії з ним

//- Успадкування. Це означає, що об'єкти (класи) можуть переймати деякі властивості у
//своїх прабатьків.

//Поліморфізмом - у мовах програмування та теорії типів поліморфізмом називається здатність функції обробляти дані різних типів.

//Сутності ООП

//Клас - спосіб опису сутності, що визначає стан і поведінку, яка залежить від цього стану,
//а також правила для взаємодії з цією сутністю (контракт).

//Екземпляр (об'єкт) - це окремий представник класу, який має конкретний стан і поведінку,
//що повністю визначається класом. Це те, що створено за кресленням, тобто на підставі
//опису з класу.

//Інтерфейс - це набір властивостей і методів класу, доступних для використання у роботі з
//екземпляром.

//Прототипне наслідування

//Прототип об'єкта Object.create(obj)

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Бобік';
// console.log('dog :>> ', dog);
// console.log(dog.legs);
// //Метод hasOwnProperty()
// console.log('dog.hasOwnProperty() :>> ', dog.hasOwnProperty('name'));
// console.log('dog.hasOwnProperty() :>> ', dog.hasOwnProperty('legs'));

//Класи JavaScript були введені в ECMAScript 2015 і являють собою синтаксичний цукор над
//існуючим в JavaScript механізмом прототипного успадкування.

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.calcArea = function () {
//   return this.height * this.width;
// };

// const rectangle = new Rectangle(300, 150);
// console.log('rectangle :>> ', rectangle);

//Оголошення класу:
// 1 class declaration
// class Rectangle {}

//2 class expression
// const Rectangle = class {};

// Метод constructor — спеціальний метод, необхідний створення та ініціалізації об'єктів, створених, з допомогою класу. У класі може бути лише один метод з ім'ям конструктора.

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
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
//   foo = () => {
//     console.log(this);
//   };
// }

// const square = new Rectangle(10, 10);
// console.log('square :>> ', square);
// square.foo();
// console.log('square :>> ', square.calcArea());

//Статичні методи та властивості
//Ключове слово static визначає статичний метод або властивості для класу.
//Статичні методи та властивості викликаються без інстанцування їхнього класу,
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
// console.log('p1.displayName :>> ', p1.displayName);
// console.log('Point.displayName :>> ', Point.displayName);
// const p2 = new Point(10, 10);
// console.log('Point.displayName :>> ', Point.displayName);

//Публічні поля
// class Rectangle {
//   //   height = 0;
//   //   width;
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// const rectangle = new Rectangle(52, 45);
// console.log('rectangle :>> ', rectangle);
// console.log('rectangle.height :>> ', rectangle.height);
// console.log('rectangle.width :>> ', rectangle.width);

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
// console.log('rectangle:>> ', rectangle);
// console.log('rectangle.#width :>> ', rectangle.#width);

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
//   newSpeak() {
//     console.log('111 :>> ', 111);
//     super.speak();
//     // console.log(`${this.name} гавкає.`);
//     // console.log(`Вік ${this.name} ${this.age}`);
//   }
// }

// let dog = new Dog('Барон', 25);
// console.log('dog :>> ', dog);
// dog.newSpeak();

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
//     if (newRole.length < 5) {
//       alert('Рядок повинен бути не меньше 5 символів!');
//     } else {
//       this.#role = newRole;
//       console.log('newRole :>> ', newRole);
//     }
//   }
// }

// const user = new User({
//   email: 'mango@mail.com',
//   role1: 'ADMIN',
// });

// user.role = 'USER';
// console.log('user :>> ', user.role);
