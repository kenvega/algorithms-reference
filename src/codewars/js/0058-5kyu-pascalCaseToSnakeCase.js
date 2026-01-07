// 5kyu
// https://www.codewars.com/kata/529b418d533b76924600085d/javascript

// Complete the function/method so that it takes a PascalCase string
// and returns the string in snake_case notation.
// Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

function toUnderscore(string) {
  if (typeof string === 'number') return string.toString()

  let response = ''

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i].toLowerCase()) {
      if (i === 0) {
        response += string[i].toLowerCase()
        continue
      }
      response += '_'
      response += string[i].toLowerCase()
    } else {
      response += string[i]
    }
  }

  return response
}

// to remember
//  to cast a number as a string use .toString()
//  to check if a variable is a number use typeof <variable>

// other solution
const toUnderscore = string => 
  String(string)
    .split('')
    .map((item, index) => item === item.toUpperCase() && isNaN(item) ? ((index === 0 ? '' : '_') + item.toLowerCase()) : item)
    .join('')