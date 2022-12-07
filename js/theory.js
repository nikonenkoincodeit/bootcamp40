// Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для
// роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати,
// створювати і видаляти елементи, реагувати на дії користувача і багато іншого.
// Тобто з'єднує сторінку з мовою програмування.

//Підключення скриптів
// const elem = document.querySelector('.js-checkbox');
// console.log('elem :>> ', elem);

//Атрибут defer
//Атрибут async

//Навігація по DOM
//elem.parentNode
//elem.children
//closest

// const span = document.querySelector('.js-span-el');
// console.log('span :>> ', span);
// console.log('span.parentNode :>> ', span.parentNode);
// console.log('span.closest :>> ', span.closest('.parent'));

// const list = document.querySelector('.js-list');
// console.log('list :>> ', list);
// console.log('list.children :>> ', list.children);

//Пошук елементів
// getElementById
// getElementsByName
// getElementsByTagName
// getElementsByClassName

// const listRef = document.getElementById('list');
// console.log('listRef :>> ', listRef);
// const divsRef = document.getElementsByTagName('div');
// console.log('divsRef :>> ', divsRef);

// Сучасні методи:
// querySelectorAll
// querySelector
// const listRef = document.querySelector('.list');
// const listEl = document.querySelector('.list');
// const $list = document.querySelector('.list');
// const liRef = document.querySelectorAll('i');
// console.log('liRef :>> ', liRef);

// document.getElementById чи просто id
// const list = document.querySelector('#list');
// const list = document.getElementById('list');
// console.log('list :>> ', list);

// const listRef = document.querySelector('.list');
// // console.log('listRef :>> ', listRef);
// console.dir(listRef);

//Властивості та атрибути

// value - містить поточний текстовий контент елементів форм.
// const inputRef = document.querySelector('input');
// console.log('inputRef :>> ', inputRef);
// console.log('inputRef.value :>> ', inputRef.value);

// checked - зберігає стан чекбокса або радіокнопки.
// const checkboxRef = document.querySelector('.js-checkbox');
// console.log('checkboxRef :>> ', checkboxRef);
// console.log('checkboxRef.checked :>> ', checkboxRef.checked);
// name - зберігає значення, вказане в HTML-атрибуті name.
// const formRef = document.querySelector('form');
// console.log('formRef :>> ', formRef);
// console.log('formRef.elements :>> ', formRef.elements);
// console.log(
//   'formRef.elements["user-name"] :>> ',
//   formRef.elements['user-name'],
// );
// console.log('formRef["user-name"] :>> ', formRef['user-name']);
// console.log('formRef["user-name"] :>> ', formRef['user-name'].form);
// src  - шлях до зображення тегу <img>.
// const imgRef = document.querySelector('img');
// console.log('imgRef.src :>> ', imgRef.src);
// imgRef.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JH9FItirWMwWY0yGy-_rAIAXQYnju6-Xd5lcA9mF&s'

//Створення та видалення елементів
// const pEl = document.createElement('p');
// pEl.textContent = 'Hello world!';
// console.log('pEl :>> ', pEl);

// const pEl = `<p>Hello world</p>`;
// console.log('pEl :>> ', pEl);

// const imgRef = document.querySelector('img');
// imgRef.remove();

//Властивість innerHTML
// const html = document.body.innerHTML;
// console.log('html :>> ', html);
// const pEl = `<p>Hello world</p>`;
// document.body.innerHTML = '';

//Метод insertAdjacentHTML()
// const pEl = `<p>Hello world</p>`;
// document.body.insertAdjacentHTML('beforeend', pEl);

//Властивість classList
const lestRef = document.querySelector('.js-list');
//contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
// console.log(
//   'lestRef.classList.contains("list") :>> ',
//   lestRef.classList.contains('list'),
// );
// console.log(
//   'lestRef.classList.contains("new-list") :>> ',
//   lestRef.classList.contains('new-list'),
// );
//add(cls) - додає клас cls до списку класів елемента.
// lestRef.classList.add('new-list-class');
//remove(cls) - видаляє клас cls зі списку класів елемента.
// lestRef.classList.remove('list');
//toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
// lestRef.classList.toggle('new-list-class');
//replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
// lestRef.classList.replace('list', 'new-list');

//Властивість style та cssText
// const textRef = document.querySelector('.js-text');
// console.log('textRef.style :>> ', textRef.style);
// textRef.style.color = 'red';
// textRef.style.backgroundColor = 'green';

// textRef.style.cssText = 'color: red; background-color: green;';

//Атрибути
const inputRef = document.querySelector('input');
// elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
// console.log('inputRef.hasAttribute :>> ', inputRef.hasAttribute('name2'));
// elem.getAttribute(name) - отримує значення атрибута і повертає його.
// console.log('inputRef.getAttribute :>> ', inputRef.getAttribute('name'));
// elem.setAttribute(name, value) - встановлює атрибут.
// inputRef.setAttribute('data-name', 'poly');
//  elem.removeAttribute(name) - видаляє атрибут.
// inputRef.removeAttribute('class');
//  elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
// console.log('inputRef.attributes :>> ', inputRef.attributes);

//data-атрибути
// const textRef = document.querySelector('[data-id="22222458"]')
// console.log('textRef :>> ', textRef);
// console.log('textRef.dataset :>> ', textRef.dataset);
// console.log('textRef.dataset.id :>> ', textRef.dataset.id);
