// 6kyu
// Write a method (or function, depending on the language)
// that converts a string to camelCase
//   all words must have their first letter capitalized
//   and spaces must be removed

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

// my solution
function camelCase(string) {
  return string.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join('')
}

console.log(camelCase("test case")) // "TestCase"
console.log(camelCase("camel Case method")) // "CamelCaseMethod"
console.log(camelCase("say hello")) // "SayHello"
console.log(camelCase("camel case word")) // "CamelCaseWord"
console.log(camelCase("")) // ""

// to remember

// other solution from the internet



