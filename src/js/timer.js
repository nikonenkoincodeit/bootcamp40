import { convertMs } from "../helpers/convertMs";
import { inputDate, timerDate } from "./refs";

function selectDate(e) {
  const date = Date.now() - new Date(e.target.value).getTime();
  console.log("date :>> ", date);
  if (date < 0) return;

  const { days, hours, minutes, seconds } = convertMs(date);
  const dateStr = `Ви народилися ${days} днів, ${hours} годин, ${minutes} хвилин, ${seconds} секунд`;
  timerDate.innerHTML = dateStr;
  setTimeout(
    (e) => {
      selectDate(e);
    },
    1000,
    e
  );
}
inputDate.addEventListener("change", selectDate);
