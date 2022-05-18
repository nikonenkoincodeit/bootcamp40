// todo Метод forEach

/*
 * Виконайте рефакторинг коду, використовуючи метод для Each і стрілочні функції.
 */

function logItems(items) {
  console.log(items);
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
