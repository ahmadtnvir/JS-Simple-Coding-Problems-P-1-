// Creating a Date Object
const today = new Date();
console.log(today); // Output: 2024-09-08T03:21:29.422Z

const specificDate = new Date("2023-12-31");
console.log(specificDate); // Output: 2023-12-31T00:00:00.000Z

// Current Year
const year = today.getFullYear();
console.log(year); // Outputs: 2024

// Current Month
const month = today.getMonth() + 1;
console.log(month); // Outputs: 9

// Current Day
const day = today.getDate();
console.log(day); // Output: 8

// Current Hour
const hours = today.getHours();
console.log(hours); // Outputs: 9

// Current Minute
const minutes = today.getMinutes();
console.log(minutes); // Outputs: 35

// Setting Date and Time
const date = new Date();
date.setFullYear(2025);
console.log(date); // Output: 2025-09-08T03:38:10.650Z

// Formatting the Date
console.log(today.toLocaleDateString()); // Output: 9/8/2024
console.log(today.toLocaleTimeString()); // Output: 9:46:41 AM

// Working with Time (Timestamps)
const timeStamps = today.getTime();
console.log(timeStamps); // Output: 1725767201673

// Date Arithmetic
const futureDate = new Date();
futureDate.setDate(today.getDate() + 10);
console.log(futureDate); // Output: 2024-09-18T03:46:41.799Z
