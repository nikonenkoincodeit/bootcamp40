// todo Площа прямокутника
/*
 * Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.
 */

function getRectArea(dimensions) {
  const arr = dimensions.split(' ');
  console.log('arr :>> ', arr);
  return arr[0] * arr[1];
}

console.log(getRectArea('8 11'));
