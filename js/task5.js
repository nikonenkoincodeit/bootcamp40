// todo Форматування посилання (includes та логічне «І»)
/*
 * Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай у кінець значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.
 */

let link = 'https://my-sit.com/about';

console.log('link :>> ', link);

if (!link.endsWith('/') && link.includes('my-site')) {
  link += '/';
}

console.log('link :>> ', link);
