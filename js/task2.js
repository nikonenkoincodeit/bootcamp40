// todo Масиви та рядки
/*
 * Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.
 */

const values = '8 11';
const arrayNum = values.split(' ');

const a = Number(arrayNum[0]);
const b = Number(arrayNum[arrayNum.length - 1]);

const square = a * b;

console.log(square);
