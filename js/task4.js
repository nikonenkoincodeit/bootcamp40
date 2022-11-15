// todo Форматування посилання (endsWith)
/*
 * Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.
 */

let link = 'https://my-site.com/about/';

// if (link[link.length - 1] !== '/') {
//   link += '/';
// }
console.log('link :>> ', link);
// if (!link.includes('/', link.length - 1)) {
//   link += '/';
// }

if (!link.endsWith('/')) {
  link += '/';
}

console.log('link :>> ', link);
