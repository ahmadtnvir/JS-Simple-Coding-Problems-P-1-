/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

// function repeatCount(arr) {
//   let count = 0;
//   for (const num of arr) {
//     num === 5 ? count++ : null;
//     // if (num === 5) {
//     //     count++;
//     // }
//   }
//   return count;
// }

// const numbers = repeatCount([5, 6, 11, 12, 98, 5]);
// console.log(numbers);

// function repeatCount(arr) {
//   let count = 0;
//   for (const num of arr) {
//     num === 25 ? count++ : null;
//     // if (num === 5) {
//     //     count++;
//     // }
//   }
//   return count;
// }

// const numbers = repeatCount([5, 6, 11, 12, 98, 5]);
// console.log(numbers);

function repeatCount(arr, find) {
  let count = 0;
  for (const num of arr) {
    num === find ? count++ : null;
  }
  return count;
}

const numbers1 = repeatCount([5, 6, 11, 12, 98, 5], 5);
console.log(numbers1);
const numbers2 = repeatCount([5, 6, 11, 12, 98, 5], 25);
console.log(numbers2);
