//Масиви
// Масив - структура даних для зберігання і маніпулювання колекцією індексованих значень.
// Використовується для зберігання впорядкованих колекцій даних, наприклад, списку курортів,
// товарів, клієнтів в готелі тощо.

//Створення
// 1
// const arr = [12, null, { name: 'Poly' }, [12, [25]], 'Poly'];
// // 2
// const arr2 = new Array(12, null, { name: 'Poly' }, [12, [25]], 'Poly');
// console.log('arr :>> ', arr);
// console.log('arr2 :>> ', arr2);
//Доступ до елементів

// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients[2], clients[0]);

//Перевизначення
// const clients = ['Mango', 'Poly', 'Ajax'];
// clients[0] = 25;
// console.log('clients :>> ', clients);

//Довжина масиву
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log('clients :>> ', clients);
// console.log('clients :>> ', clients.length);

//Індекс останнього елемента
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients.length - 1);
// //1
// console.log(clients[clients.length - 1]);
// //2
// console.log(clients.at(-2));

//clear array
// let clients = ['Mango', 'Poly', 'Ajax'];
//1
// clients = [];
//2
// clients.length = 0;
// console.log('clients :>> ', clients);

//Ітерація по
// let clients = ['Mango', 'Poly', 'Ajax'];

// const arrLength = clients.length;

// for (let i = 0; i < arrLength; i++) {
//   const element = clients[i];
//   console.log('element :>> ', element);
// }

//Цикл for...of
// let clients = ['Mango', 'Poly', 'Ajax'];

// for (const element of clients) {
//   console.log('element :>> ', element);
// }

//Присвоєння за посиланням і за значенням

//Усі примітивні типи присвоюються за значенням, тобто створюється копія.
//boolean
//undefined
//null
//string
//number

// const a = 'Hello';
// let b = a;
// b += ', world!';
// console.log('a :>> ', a);
// console.log('b :>> ', b);

// let clients = ['Mango', 'Poly', 'Ajax'];
// const clients2 = clients;

// console.log(clients === clients2);
// clients2[0] = 24;
// console.log('clients2 :>> ', clients2);
// console.log('clients :>> ', clients);

//copy array
// const clients2 = clients.slice();
// const clients2 = [...clients];
// console.log([1] === [1]);
// clients2[0] = 24;
// console.log('clients2 :>> ', clients2);
// console.log('clients :>> ', clients);

//Складні типи - об'єкти, масиви, функції присвоюються за посиланням, тобто змінна
//просто отримує посилання на вже існуючий об'єкт.
//array
//object

//Методи split() і join()
// const str =
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. / Architecto sunt excepturi / consequatur et pariatur nisi / sed quisquam nostrum nihil perspiciatis, ut quae doloribus temporibus ipsa esse praesentium ipsam, molestias voluptatem!';
// const array = str.split(' ');
// // console.log('array :>> ', array);
// const newStr = array.join(' ');
// console.log('newStr :>> ', newStr);

//Метод indexOf()
// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log('clients.indexOf() :>> ', clients.indexOf('Poly1'));
//Метод includes()
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log('clients.includes() :>> ', clients.includes('Poly'));

//Методи push() і pop()
// const clients = ['Mango', 'Poly', 'Ajax'];

// const arrLength = clients.push('Max', 25);
// console.log('arrLength :>> ', arrLength);
// const lastElement = clients.pop();
// console.log('clients :>> ', clients);
// console.log('lastElement :>> ', lastElement);

//Методи unshift() і shift()
// const clients = ['Mango', 'Poly', 'Ajax'];
// clients.unshift('Max', 25);
// console.log('clients :>> ', clients);
// const firstElement = clients.shift();
// console.log('clients :>> ', clients);
// console.log('firstElement :>> ', firstElement);

//Метод slice()
// const clients = ['Mango', 'Poly', 'Ajax'];
// const copyClients1 = clients.slice();
// const copyClients2 = clients.slice(1);
// const copyClients3 = clients.slice(1, 2);
// console.log('copyClients :>> ', copyClients3);
// console.log(copyClients1 === clients);

//Метод splice()
// const clients = ['Mango', 'Poly', 'Ajax'];
// - Видалення
//   splice(position, num)
// clients.splice(1, 1);
// console.log('clients :>> ', clients);

// - Додавання
//   splice(position, 0, new_element_1, new_element_2, ...)
// clients.splice(1, 0, 'Max');
// console.log('clients :>> ', clients);

// - Заміна
//   splice(position, num, new_element_1, new_element_2, ...)
// clients.splice(0, 1, 'Max', 'Jquery');
// console.log('clients :>> ', clients);

//Метод concat()
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const clients = oldClients.concat(
//   newClients,
//   ['Monkong', 'Singu'],
//   ['Monkong', 'Singu'],
// );

// console.log('clients :>> ', clients);
