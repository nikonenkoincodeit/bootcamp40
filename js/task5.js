// todo Форматування посилання (includes та логічне «І»)
/*
 * Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай у кінець значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.
 */

let link = 'https://my-site.com/about/';

if (!link.endsWith('/') && link.includes('my-site')) {
  link += '/';
  console.log('11111 :>> ', 11111);
}

console.log('link :>> ', link);
