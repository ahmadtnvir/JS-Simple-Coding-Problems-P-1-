/**
 * Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming


 */

function findLargeWord(str) {
  // return str;
  const words = str.split(" ");
  //   console.log(words);
  let longestWord = "";
  for (const word of words) {
    // console.log(word);
    word.length > longestWord.length ? (longestWord = word) : null;
  }
  return longestWord;
}

const str = findLargeWord("I am learning Programming to become a programmer");
console.log(str);
