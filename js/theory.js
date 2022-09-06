// Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для
// роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати,
// створювати і видаляти елементи, реагувати на дії користувача і багато іншого.
// Тобто з'єднує сторінку з мовою програмування.

//Пошук елементів
// document.getElementById чи просто id
// getElementsBy*
// querySelectorAll
// querySelector
// closest

// const refs = {
//     list: document.getElementById('list')
// }
// const listRef = document.getElementById('list');
// const liRers = document.getElementsByTagName('li');
// const itemRef = document.getElementsByClassName('js-item');
// const imgRef = document.querySelector('.js-item');
// const imgRefs = document.querySelectorAll('.js-item');
// console.log(imgRefs);
// console.dir(listRef);

//Навігація по DOM
//elem.parentNode
//elem.children
// const listRef = document.querySelector('.js-list');
// console.log(listRef.children);
// console.log(listRef.children.length);
// const itemRef = document.querySelector('.js-first');
// console.log(itemRef);
// console.log(itemRef.parentElement);
// console.log(itemRef.parentNode);

// const spanRef = document.querySelector('.js-span-el');
// console.log(spanRef.parentElement);
// console.log(spanRef.parentNode);

//Властивості та атрибути
// value - містить поточний текстовий контент елементів форм.
// checked - зберігає стан чекбокса або радіокнопки.
// name - зберігає значення, вказане в HTML-атрибуті name.
// src  - шлях до зображення тегу <img>.

// const imgRef = document.querySelector('.js-img');
// console.log(imgRef.src);
// imgRef.alt = 'Кіт Барсик!';
// console.log(imgRef.alt);
// console.log(imgRef.width);
// const user = {
//   name: 'Mango',
// };
// user.name;

// const inputRef = document.querySelector('.js-input');
// inputRef.value = ' Привіт!!!';
// console.log('inputRef.value :>> ', inputRef.value);

//Властивість textContent
// const textRef = document.querySelector('.js-text');
// console.log('textRef.textContent :>> ', textRef.textContent);
// textRef.textContent = 'Hello, Poly 222222222222222222222';
// console.log('textRef.innerText :>> ', textRef.innerText);
// textRef.innerText = 'Hello, Poly';
//Властивість classList

// const listRef = document.querySelector('#list');
// console.log(listRef);
// console.log('listRef.contains :>> ', listRef.classList.contains('js-list1'));

//contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
//add(cls) - додає клас cls до списку класів елемента.
// listRef.classList.add('my-class');
//remove(cls) - видаляє клас cls зі списку класів елемента.
// listRef.classList.remove('js-list');
//toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
// listRef.classList.toggle('js-list');
// listRef.classList.toggle('js-list');
//replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
// listRef.classList.replace('js-list', 'js-list-new');

// listRef.className = 'js-list-new item';

//Властивість style та cssText

// const listRef = document.querySelector('#list');
// // listRef.style.backgroundColor = 'red';
// // listRef.style.color = 'blue';
// listRef.style.cssText = 'color: red; background-color: blue';

//Атрибути
// const imgRef = document.querySelector('.js-img');
// elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
// console.log(imgRef.hasAttribute('title'));
// elem.getAttribute(name) - отримує значення атрибута і повертає його.
// console.log(imgRef.getAttribute('alt'));
// elem.setAttribute(name, value) - встановлює атрибут.
// imgRef.setAttribute('title', 'Кіт Барсик!!!');
// // elem.removeAttribute(name) - видаляє атрибут.
// imgRef.removeAttribute('src');
// // elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
// console.log(imgRef.attributes);

//data-атрибути
// const listRef = document.querySelector('#list');
// console.log(listRef.dataset);
// console.log(listRef.dataset.id);
// console.log(listRef.dataset.user);
