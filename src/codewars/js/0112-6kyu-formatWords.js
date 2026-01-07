// 6kyu
// https://www.codewars.com/kata/51689e27fe9a00b126000004

// Complete the method so that it formats the words into a single comma separated value
// The last word should be separated by the word 'and' instead of a comma
// The method takes in an array of strings and returns a single formatted string

// Note:
// Empty string values should be ignored
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned

// Example: (Input --> output)
// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""

// my solution
function formatWords(words) {
  if (!words || words.length === 0) {
    return ""
  }

  words = words.filter((word) => word !== "")

  if (words.length === 1) {
    return words[0]
  }

  return words.reduce((acc, cur, index) => {
    if (index === words.length - 1) {
      return `${acc} and ${cur}`
    } else if (index === 0) {
      return `${cur}`
    } else {
      return `${acc}, ${cur}`
    }
  }, "")
}

console.log(formatWords(["one", "two", "three", "four"])) //  'one, two, three and four'
console.log(formatWords(["one"])) //  'one'
console.log(formatWords(["one", "", "three"])) //  'one and three'
console.log(formatWords(["", "", "three"])) //  'three'
console.log(formatWords(["one", "two", ""])) //  'one and two'
console.log(formatWords([])) // ''
console.log(formatWords(null)) //  ''
console.log(formatWords([""])) //  ''

// to remember

// other solution from the internet
