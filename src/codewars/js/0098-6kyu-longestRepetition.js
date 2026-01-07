// 6kyu
// https://www.codewars.com/kata/586d6cefbcc21eed7a001155

// For a given string s
// find the character c (or C) with longest consecutive repetition and return:
// [c, l]
// where l (or L) is the length of the repetition.
//
// If there are two or more characters with the same l return the first in order of appearance

// For empty string return:
// ["", 0]

// my solution
function longestRepetition(string) {
  const responses = []
  let consecutivesChars = ""
  let previous = ""
  let current = ""

  for (let i = 0; i < string.length; i++) {
    current = string[i]

    if (current === previous) {
      consecutivesChars += current
      if (i === string.length - 1) {
        responses.push(consecutivesChars)
      }
    } else {
      if (i > 0) {
        responses.push(consecutivesChars)
      }
      consecutivesChars = current
    }
    previous = current
  }

  let max = 0
  let maxLetter = ""

  for (let i = 0; i < responses.length; i++) {
    if (responses[i].length > max) {
      max = responses[i].length
      maxLetter = responses[i][0]
    }
  }

  return [maxLetter, max]
}

// to remember
console.log(longestRepetition("bbbaaabaaaa")) // ["a", 4]
console.log(longestRepetition("aaaabb")) // ["a", 4]
console.log(longestRepetition("cbdeuuu900")) // ["u", 3]
console.log(longestRepetition("abbbbb")) // ["b", 5]
console.log(longestRepetition("aabb")) // ["a", 2]
console.log(longestRepetition("")) // ["", 0]
console.log(longestRepetition("ba")) // ["b", 1]

// other solution from the internet

const longestRepetition2 = (string) => {
  let max = 0
  let char = ""
  let count = 1
  for (let i = 1; i <= string.length; i++) {
    if (string[i] === string[i - 1]) {
      count++
    } else {
      if (count > max) {
        max = count
        char = string[i - 1]
      }
      count = 1
    }
  }
  return [char, max]
}

console.log(longestRepetition2("bbbaaabaaaa")) // ["a", 4]
console.log(longestRepetition2("aaaabb")) // ["a", 4]
console.log(longestRepetition2("cbdeuuu900")) // ["u", 3]
console.log(longestRepetition2("abbbbb")) // ["b", 5]
console.log(longestRepetition2("aabb")) // ["a", 2]
console.log(longestRepetition2("")) // ["", 0]
console.log(longestRepetition2("ba")) // ["b", 1]
