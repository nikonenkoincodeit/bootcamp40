function sayHi(name) {
  console.log("Hello, ", name);
}

function sayBye(name) {
  console.log("Bye, ", name);
}

const name = "Poly";
export { name, sayHi as hi, sayBye as bye };
