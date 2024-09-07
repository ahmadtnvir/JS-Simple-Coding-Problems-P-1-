// function noDuplicate(arr) {
//   const newArray = [];
//   for (const name of arr) {
//     if (newArray.includes(name)) {
//       continue;
//     } else {
//       newArray.push(name);
//     }
//   }
//   return newArray;
// }
// const friends = noDuplicate([
//   "tesla",
//   "tesla",
//   "mask",
//   "mark",
//   "mask",
//   "jobs",
//   "bill",
//   "bill",
// ]);
// console.log(friends);



// function noDuplicate(arr) {
//   const newArray = [];
//   for (const name of arr) {
//     // Use newArray.includes(name) to check if the name is already in newArray
//     !newArray.includes(name) ? newArray.push(name) : null;
//   }
//   return newArray; // Move return outside the loop
// }

// const friends = noDuplicate([
//   "tesla",
//   "tesla",
//   "mask",
//   "mark",
//   "mask",
//   "jobs",
//   "bill",
//   "bill",
// ]);
// console.log(friends);



function noDuplicate(arr) {
    return [...new Set(arr)];
  }

// function noDuplicate(arr) {
//     return [...new Set(arr)];
//   }
  
  
  const friends = noDuplicate([
    "tesla",
    "tesla",
    "mask",
    "mark",
    "mask",
    "jobs",
    "bill",
    "bill",
  ]);
  console.log(friends);
