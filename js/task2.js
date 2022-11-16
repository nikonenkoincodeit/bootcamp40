// todo Масиви та рядки
/*
 * Напишіть функцію copyArr(arr), яка копіює масив, не змінюючи оригінал.
 */

const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// const copyArr = clients.slice();
const copyArr = [...clients];

console.log('copyArr === clients :>> ', copyArr === clients);
console.log('copyArr:>> ', copyArr);
console.log('clients :>> ', clients);
