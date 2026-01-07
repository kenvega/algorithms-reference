// 6kyu
// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8

// Remove the parentheses

// "example(unwanted thing)example"

// Your task is to remove everything inside the parentheses as well as the parentheses themselves

// The example above would return:

// "exampleexample"

// Notes
// Other than parentheses only letters and spaces can occur in the string.
// Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.
// The parentheses can be nested.

// my solution
function removeParentheses(string) {
  let response = ""
  let char = ""
  let count = 0
  let startIndex = 0

  for (let i = 0; i < string.length; i++) {
    char = string[i]
    if (char === "(") {
      if (count === 0) {
        response += string.slice(startIndex, i)
        startIndex = i
      }
      count++
    }

    if (char === ")") {
      count--
      if (count === 0) {
        startIndex = i + 1
      }
    }

    if (i === string.length - 1) {
      response += string.slice(startIndex)
    }
  }

  return response
}

console.log(removeParentheses("example(unwanted thing)example")) // "exampleexample"
console.log(removeParentheses("example (unwanted thing) example")) // "example  example"
console.log(
  removeParentheses("hello example (words(more words) here) something")
) // "hello example  something"
console.log(removeParentheses("a (bc d)e")) // "a e"
console.log(removeParentheses("a(b(c))d")) // "ad"
console.log(removeParentheses("a(b(c))")) // "a"
console.log(removeParentheses("(first group) (second group) (third group)")) // "  "

// to remember

// other solution from the internet
function removeParentheses2(s) {
  let result = ""
  let count = 0
  let letter = ""

  for (let index = 0; index < s.length; index++) {
    letter = s[index]

    if (letter === "(") {
      count += 1
    }
    if (count === 0) {
      result += letter
    }
    if (letter === ")") {
      count -= 1
    }
  }

  return result
}

console.log(removeParentheses2("example(unwanted thing)example")) // "exampleexample"
console.log(removeParentheses2("example (unwanted thing) example")) // "example  example"
console.log(
  removeParentheses2("hello example (words(more words) here) something")
) // "hello example  something"
console.log(removeParentheses2("a (bc d)e")) // "a e"
console.log(removeParentheses2("a(b(c))d")) // "ad"
console.log(removeParentheses2("a(b(c))")) // "a"
console.log(removeParentheses2("(first group) (second group) (third group)")) // "  "

function removeParentheses3(s, d = 0) {
  return s
    .split("")
    .filter((e) => {
      switch (e) {
        case "(": {
          d++
          return false
        }
        case ")": {
          d--
          return false
        }
        default: {
          return d < 1
        }
      }
    })
    .join("")
}

console.log(removeParentheses3("example(unwanted thing)example")) // "exampleexample"
console.log(removeParentheses3("example (unwanted thing) example")) // "example  example"
console.log(
  removeParentheses3("hello example (words(more words) here) something")
) // "hello example  something"
console.log(removeParentheses3("a (bc d)e")) // "a e"
console.log(removeParentheses3("a(b(c))d")) // "ad"
console.log(removeParentheses3("a(b(c))")) // "a"
console.log(removeParentheses3("(first group) (second group) (third group)")) // "  "
