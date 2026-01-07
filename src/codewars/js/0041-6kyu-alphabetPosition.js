// 6kyu
// https://www.codewars.com/kata/546f922b54af40e1e90001da

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
  text = text.toLowerCase()

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  let result = ''
  let alphabetPosition

  for (let i = 0; i < text.length; i++) {
    alphabetPosition = alphabet.indexOf(text[i]) + 1
    if (alphabetPosition) {
      result = `${result} ${alphabetPosition}`
    }
  }

  return result.trim();
}

// things to remember from this problem
//   trim() to remove trailing whitespaces of a string (at the start and end)