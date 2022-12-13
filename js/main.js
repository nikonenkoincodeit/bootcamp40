// let months = ["Jan", "Feb", "Mar", "Apr", "Aug", "Sep", "Oct", "Nov", "Dec"];

// function sayHi(user) {
//   alert(`Hi, ${user}!`);
// }

//! Named export
//Експорт окремо від оголошення
// let months = ["Jan", "Feb", "Mar", "Apr", "Aug", "Sep", "Oct", "Nov", "Dec"];
// export function sayHi(user) {
//   alert(`Hi, ${user}!`);
// }
// export { sayHi as say };
//Експорт до оголошення
// export let months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// export function sayHi(user) {
//   alert(`Hi, ${user}!`);
// }
//Експортувати "як"

//! Default export
export default function sayHi(user) {
  alert(`Hi, ${user}!`);
}
