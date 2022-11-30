// todo Метод forEach

/*
 * Виконайте рефакторинг коду, використовуючи метод для forEach і стрілочні функції.
 */

const printContactsInfo = ({ names, phones }) => {
  const namesList = names.split(',');
  const phonesList = phones.split(',');

  // for (let i = 0; i < namesList.length; i++) {
  //   console.log(`${namesList[i]} - ${phonesList[i]}`);
  // }
  namesList.forEach((name, index) => {
    console.log(`${name} - ${phonesList[index]}`);
  });
};

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
