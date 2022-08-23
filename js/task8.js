// todo Дедлайн здачі проекту (switch)
/*
 * Виконай рефакторинг коду задачі номер 7, використовуючи switch.
 */

const daysUntilDeadline = 3;
let message;

switch (daysUntilDeadline) {
  case 0:
    message = 'Сьогодні';
    break;
  case 1:
    message = 'Сьогодні';
    break;
  case 2:
    message = 'Післязавтра';
    break;
  default:
    message = 'Дата в майбутньому';
}

console.log('message :>> ', message);
