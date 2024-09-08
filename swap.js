let a = 5;
let b = 10;

console.log(a, b); // Output: 5 10

let temp = a;

a = b;
b = temp;

console.log(a, b); // Output: 10 5

let x = 15;
let y = 20;

console.log(x, y); // Output: 15 20

[x, y] = [y, x];

console.log(x, y); // Output: 20 15
