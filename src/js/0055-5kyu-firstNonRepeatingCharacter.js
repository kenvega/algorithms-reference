// 5kyu
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/javascript

// Write a function named firstNonRepeatingLetter that takes a string input, and returns the first character that
// is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't'
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper and lowercase letters are considered the same character
// but the function should return the correct case for the initial letter
// For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// Note: the function is called firstNonRepeatingLetter for historical reasons
// but your function should handle any Unicode character.


// my solution
function firstNonRepeatingLetter(s) {
  let charCounts = {}
  let lowercaseLetter

  for (const letter of s) {
    lowercaseLetter = letter.toLowerCase()

    if (!charCounts[lowercaseLetter]) {
      charCounts[lowercaseLetter] = {
        count: 1,
        firstLowercase: letter === lowercaseLetter
      }
    } else {
      charCounts[lowercaseLetter].count += 1
    }
  }

  for (const letter of s) {
    lowercaseLetter = letter.toLowerCase()

    if (charCounts[lowercaseLetter].count === 1) {
      return charCounts[lowercaseLetter].firstLowercase ? letter : letter.toUpperCase()
    }
  }

  return ''
}

// to remember
// when going through keys of an object with: for (const key in object)
//  you don't iterate those keys in the order as they appear in your object
//  so take that into account
// if you want characters of a string with a for make sure to use 'of' instead of 'in'
//  use: for (const letter of string) instead of for (const letter in string)
//  because the in will give you the indices instead of the characteres of the string

// other solution with more time complexity but shorter in code
function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}