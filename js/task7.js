// todo Дедлайн здачі проекту (if...else)
/*
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

* Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
* Якщо до дедлайну 1 день - виведи рядок "Завтра"
* Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
* Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"
 */

const daysUntilDeadline = 3;
let message;

if (daysUntilDeadline === 0) {
  message = 'Сьогодні';
} else if (daysUntilDeadline === 1) {
  message = 'Завтра';
} else if (daysUntilDeadline === 2) {
  message = 'Післязавтра';
} else if (daysUntilDeadline >= 3) {
  message = 'Дата в майбутньому';
}

console.log('message :>> ', message);
