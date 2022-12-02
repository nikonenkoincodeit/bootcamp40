// todo call() apply()

/*
 * Створіть функцію hostGuests яка поверне ім'я будинку та гостей у ньому
 * Викличте її за допомогою call і apply поставивши контекст і гостей як аргумент
 *  ${Anna, Jack, Jimmy, John} are staying in ${Palace}
 */

const guests = ['Anna', 'Jack', 'Jimmy'];
const guestsText = 'Anna, Jack, Jimmy';

const place1 = {
  house: 'Palace',
};
const place2 = {
  house: 'Barn',
};

function hostGuests(...args) {
  console.log(`${args.join(', ')} are staying in ${this.house}`);
}

hostGuests.call(place1, guestsText);
hostGuests.apply(place2, [guestsText]);
