import { convertMs } from "../helpers/convertMs.js";

const inputDateRef = document.querySelector(".js-input-date");
const timerRef = document.querySelector(".js-timer");
let intervalId = null;

inputDateRef.addEventListener("change", (e) => {
  const value = e.target.value.trim();
  clearInterval(intervalId);
  if (!value) return;

  updateTime(value);
  intervalId = setInterval(() => {
    updateTime(value);
  }, 1000);
});

function updateTime(value) {
  const result = Date.now() - new Date(value).getTime();
  if (result < 1000) {
    clearInterval(intervalId);
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(result);
  timerRef.innerHTML = `Ви народилися ${days} днів, ${hours} годин, ${minutes} хвилин, ${seconds} секунд`;
}
