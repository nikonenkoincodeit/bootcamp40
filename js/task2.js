//todo Example 2 - Деструктуризація
/*
 * Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
 */

function printContactsInfo({ phones, names }) {
  const namesArr = names.split(',');
  const phonesArr = phones.split(',');

  for (let i = 0; i < namesArr.length; i += 1) {
    console.log(`${namesArr[i]} - ${phonesArr[i]}`);
  }
}

// Було
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Очікується
printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
