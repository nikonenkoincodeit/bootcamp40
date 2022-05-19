/*
 * Вам дан массив. Значения в массиве будут либо числами, либо строками, либо их комбинацией. Ваша задача - вернуть массив, в котором будут идти сначала числа, отсортированные в порядке возрастания, а затем строки, отсортированные в алфавитном порядке.Значения должны сохранить свой исходный тип. Если на входе была строка, то и вернуться должна строка, если число - число.
 */

// Приклад:
// example([6, 2, 3, 4, 5]) = > [2, 3, 4, 5, 6]
// example([14, 32, 3, 5, 5]) = > [3, 5, 5, 14, 32]
// example([1, 2, 3, 4, 5]) = > [1, 2, 3, 4, 5]
// example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]) = > [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']

// const sortArray = array => {
// const numbers = [];
// const strings = [];
// array.forEach(element => {
//   typeof element === 'string' ? strings.push(element) : numbers.push(element);
// });
// return [
//   ...numbers.sort((a, b) => a - b),
//   ...strings.sort((a, b) => a.localeCompare(b)),
// ];
// return array
//   .reduce((acc, element) => {
//     typeof element === 'string' ? acc.push(element) : acc.unshift(element);
//     return acc;
//   }, [])
//   .sort((a, b) => (typeof a === 'string' ? a.localeCompare(b) : a - b));
// };

// console.log(sortArray([6, 2, 3, 4, 5]));
// console.log(sortArray([14, 32, 3, 5, 5]));
// console.log(sortArray([1, 2, 3, 4, 5]));
// console.log(sortArray(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));

/*
Є багатомірний масив. Треба зробити його розгладити
*/

const arr = [
  12,
  [34, [2, [[[[[[[[33]]]]]]]]]],
  34,
  [23],
  'hello',
  ['five', ['some arr', ['last arr'], { name: 'John' }]],
];

// example = [12,34,2,33,34,23,'hello','five','some arr','last arr', { name: 'John' }]

const getFlatArr = array => {
  let result = [];

  array.forEach(element => {
    if (Array.isArray(element)) {
      result = [...result, ...getFlatArr(element)];
    } else {
      result.push(element);
    }
  });

  return result;
};

console.log(getFlatArr(arr));
