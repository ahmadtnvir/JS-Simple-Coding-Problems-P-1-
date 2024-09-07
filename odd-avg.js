// function oddAvg(num) {
//   let oddArr = [];
//   let sum = 0;
//   for (const oddNum of num) {
//     if (oddNum % 2 !== 0) {
//       oddArr.push(oddNum);
//       sum += oddNum;
//     }
//   }
//   return (sum / oddArr.length).toFixed(2);
// }
// const arr = oddAvg([1, 2, 3, 4, 5, 6, 7, 8, 9, 105]);
// console.log(arr);

function oddAvg(num) {
  let sum = 0;
  let count = 0;
  for (const oddNum of num) {
    if (oddNum % 2 !== 0) {
      sum += oddNum;
      count++;
    }
  }
  return count === 0 ? "No odd numbers" : (sum / count).toFixed(2);
}
// const arr = oddAvg([1, 2, 3, 4, 5, 6, 7, 8, 9, 105]);
const arr = oddAvg([2, 4, 6, 8]);
console.log(arr);
