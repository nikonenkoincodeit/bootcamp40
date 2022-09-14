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
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye(user) {
  console.log(`Bye, ${user}!`);
}

// export { sayHi, sayBye };

//Експортувати "як"

// export { sayHi as hi, sayBye as bye };

//Default export

export default function myFunc() {
  console.log("myFunc");
}

// export default class MyClass {
//
//   }
