// todo Дедлайн здачі проекту (switch)
/*
 * Виконай рефакторинг коду задачі номер 7, використовуючи switch.
 */

const daysUntilDeadline = 2;
let message;

switch (daysUntilDeadline) {
  case 0:
    console.log('Сьогодні');
    break;
  case 1:
    console.log('Завтра');
    break;
  case 2:
    console.log('Післязавтра');
    break;
  default:
    console.log('Дата в майбутньому');
}
