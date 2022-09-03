// todo call() apply()

/*
 * Створіть функцію hostGuests яка поверне ім'я будинку та гостей у ньому
 * Викличте її за допомогою call і apply поставивши контекст і гостей як аргумент
 *  Anna, Jack, Jimmy, John are staying in Palace
 */

const guests = ['Anna', 'Jack', 'Jimmy'];

const place1 = {
  house: 'Palace',
};
const place2 = {
  house: 'Barn',
};

function hostGuests(...currentGuest) {
  console.log(`${currentGuest.join(', ')} are staying in ${this.house}`);
}

hostGuests.call(place1, ...guests);
hostGuests.apply(place1, guests);
console.log('============================:>> ');
hostGuests.call(place2, ...guests);
hostGuests.apply(place2, guests);
