// 6kyu
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/javascript

// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// my solution
function findMissingLetter(array) {
  for (let i = 0; i < array.length; i++ ) {
    if (array[i+1].charCodeAt(0) - array[i].charCodeAt(0) > 1) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1)
    }
  }
}

// to remember
// in a for loop you can early return with just 'return' even inside and if statement
// you can get from a char to a number with 'a'.charCodeAt(0) -> will give you 97
// you can get form a number to a char with String.fromCharCode(97) -> will give you 'a'
