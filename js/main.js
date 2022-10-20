//Експорт до оголошення
export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

//Експорт окремо від оголошення
// function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

// export { sayHi, sayBye };

export default function sayHi(user) {
  alert(`Hello, ${user}!`);
}
