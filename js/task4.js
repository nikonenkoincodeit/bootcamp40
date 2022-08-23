// todo Форматування посилання (endsWith)
/*
 * Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.
 */

let link = 'https://my-site.com/about';

// if (link[link.length - 1] === '/') {
//   console.log('111111 :>> ', 111111);
// }
// if (link.includes('/', link.length - 1)) {
//   console.log('111111 :>> ', 111111);
// }
if (!link.endsWith('/')) {
  link = link + '/';
}
console.log(link);
