// todo Метод forEach

/*
 * Виконайте рефакторинг коду, використовуючи метод для forEach і стрілочні функції.
 */

const logItems = items => {
  items.forEach((item, index) => {
    console.log(`${index + 1}) - ${item}`);
  });
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//1) Mango
//2) Poly
//...
