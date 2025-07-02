// 6kyu
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// The goal of this exercise is to convert a string to a new string where
// each character in the new string is "(" if that character appears only once in the original string
// or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  word = word.toLowerCase()
  const alreadyEncoded = {}
  let result = ''

  for(let i = 0; i < word.length; i++) {
    if (alreadyEncoded[word[i]]) {
      alreadyEncoded[word[i]] += 1
    } else {
      alreadyEncoded[word[i]] = 1
    }
  }

  for(let i = 0; i < word.length; i++) {
    if (alreadyEncoded[word[i]] > 1) {
      result = result + ')'
    } else {
      result = result + '('
    }
  }

  return result
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())" should ignore case
console.log(duplicateEncode("(( @")); // "))(("