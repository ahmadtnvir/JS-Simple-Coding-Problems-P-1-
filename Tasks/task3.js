// Write a function to count the number of vowels in a string.

function findVowels(str) {
  // return str;
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (const letter of str) {
    // console.log(letter);
    if (vowels.includes(letter.toLowerCase())) {
      count++;
    }
  }
  return count;
}

const str = findVowels("I am learning Programming to become a programmer");
console.log(str);
