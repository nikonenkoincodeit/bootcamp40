// Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для
// роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати,
// створювати і видаляти елементи, реагувати на дії користувача і багато іншого.
// Тобто з'єднує сторінку з мовою програмування.

//Підключення скриптів

// const itemRef = document.querySelector('input');
// console.log('itemRef :>> ', itemRef);
//Атрибут defer
//Атрибут async

//Пошук елементів

// const refs = {
//   list: document.getElementById('input'),
// };

// const inputRef = document.querySelectorAll('.js-list');

// function getElem() {
//   console.log('inputRef :>> ', inputRef);
// }
// getElem();
// getElem();
// getElem();
// getElem();
// console.log(inputRef);
// document.getElementById чи просто id
// getElementsBy*
// querySelectorAll
// querySelector

//Навігація по DOM
//elem.parentNode
//elem.children
// closest
// const listRef = document.querySelector('.js-list');
// const firstRef = listRef.querySelector('.js-first');

// console.log('listRef :>> ', listRef);
// console.log('firstRef :>> ', firstRef);

// console.log('firstRef.parentNode :>> ', firstRef.closest('body'));
// console.log('inputRef :>> ', inputRef.children[0]);
//Властивості та атрибути
// value - містить поточний текстовий контент елементів форм.
// checked - зберігає стан чекбокса або радіокнопки.
// name - зберігає значення, вказане в HTML-атрибуті name.
// src  - шлях до зображення тегу <img>.
// const inputRef = document.querySelector('.js-input');
// const imgRef = document.querySelector('.js-img');
// const checkboxRef = document.querySelector('.js-checkbox');
// inputRef.value = 'new text';
// console.dir(inputRef.value);
// imgRef.src = 'cat.png';
// console.log(checkboxRef.checked);
//Створення та видалення елементів
//document.createElement(tagName);
// const textRef = document.querySelector('.js-text');
// textRef.textContent = 'new new text';
// textRef.innerText = 'new new text';
// console.log('textRef.textContent :>> ', textRef.textContent);
//Властивість textContent
//Властивість innerHTML
// console.log('textRef.innerHTML :>> ', textRef.innerHTML);
// textRef.innerHTML = ``;

//Властивість classList
// const textRef = document.querySelector('.js-text');

//contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
// console.log(
//   'textRef.classList.contains() :>> ',
//   textRef.classList.contains('js-text3'),
// );
//add(cls) - додає клас cls до списку класів елемента.
// textRef.classList.add('js-text');
//remove(cls) - видаляє клас cls зі списку класів елемента.
// textRef.classList.remove('my-class');
//toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
// textRef.classList.toggle('my-class');
//replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
// textRef.classList.replace('js-text2', 'js-text3');

//Властивість style та cssText
// const textRef = document.querySelector('.js-text');
// textRef.style.color = 'red';
// textRef.style.backgroundColor = 'blue';
// textRef.style.cssText = 'color: pink; background-color: green';

// const imgRef = document.querySelector('.js-img');
// imgRef.src = 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg';
//Атрибути
// elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
// console.log('imgRef.hasAttribute :>> ', imgRef.hasAttribute('name'));
// elem.getAttribute(name) - отримує значення атрибута і повертає його.
// console.log('imgRef.getAttribute :>> ', imgRef.getAttribute('src'));
// elem.setAttribute(name, value) - встановлює атрибут.
// imgRef.setAttribute(
//   'alt',
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corporis, temporibus, molestias asperiores ex a consequatur adipisci magni dicta accusantium minima voluptate repellendus. Laborum iure ad voluptates perferendis voluptatibus quia.',
// );
// // elem.removeAttribute(name) - видаляє атрибут.
// imgRef.removeAttribute('src');
// // elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
// console.log('imgRef.attributes :>> ', imgRef.attributes);

//data-атрибути
const textRef = document.querySelector('.js-text');
// console.log('textRef.getAttribute :>> ', textRef.getAttribute('data-id'));
console.log('textRef.dataset :>> ', textRef.dataset.id);
