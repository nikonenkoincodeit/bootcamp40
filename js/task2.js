// todo Менше з чисел
/*
 * Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
 */
console.log(min(5, 10, 14, 1, 5));
console.log(min(2, 0, 1, 5));

function min() {
  const arr = Array.from(arguments);
  // const arr = [...arguments]
  // console.log('arr :>> ', arr);
  // return Math.min(...arguments);

  let min = arguments[0];
  for (const item of arr) {
    if (item < min) {
      min = item;
    }
  }
  return min;
}

//console.dir(min);
