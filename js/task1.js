setTimeout(() => {
  console.log('setTimeout');
}, 0);

console.log('console.log: 1');

Promise.resolve()
  .then(() => {
    console.log('promise: 1');
  })
  .then(() => {
    console.log('promise: 2');
  });

console.log('console.log: 2');

/*----------------------------------- */

// console.log('console.log: 1');
// console.log('console.log: 2');
// console.log('promise: 1');
// console.log('promise: 2');
// console.log('setTimeout');
