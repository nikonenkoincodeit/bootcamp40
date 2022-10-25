export const convertMs = (ms) => {
  // Кількість мілісекунд в одиницю часу
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  // Залишок днів
  const years = Math.floor(ms / year);
  const days = Math.floor(ms / day);
  // Залишок годин
  const hours = Math.floor((ms % day) / hour);
  // Залишок хвилин
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Залишок секунд
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { years, days, hours, minutes, seconds };
};
