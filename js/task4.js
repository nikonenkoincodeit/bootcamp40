// todo Масиви та цикли
/*
 * Напиши скрипт який виводить у консоль ім'я та телефонний номер користувача. У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';
const namesArr = names.split(',');
const phonesArr = phones.split(',');
// console.log('namesArr :>> ', namesArr);
// console.log('namesArr :>> ', phonesArr);

const length = namesArr.length;

//поганий підхід!
// console.log('namesArr[0] :>> ', namesArr[0]);
// console.log('namesArr[1] :>> ', namesArr[1]);
// console.log('namesArr[2] :>> ', namesArr[2]);
// console.log('namesArr[3] :>> ', namesArr[3]);

for (let index = 0; index < length; index += 1) {
  console.log(`${namesArr[index]} - ${phonesArr[index]}`);
}
