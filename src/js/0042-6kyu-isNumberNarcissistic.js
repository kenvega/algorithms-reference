// 6kyu
// https://www.codewars.com/kata/5287e858c6b5a9678200083c

// A Narcissistic Number (or Armstrong Number) is a positive number
// which is the sum of its own digits, each raised to the power of the number of digits in a given base.
// In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// The Challenge:
// Your code must return true or false (not 'true' and 'false')
// depending upon whether the given number is a Narcissistic number in base 10.

function narcissistic(value) {
  operation = value.toString().split('').reduce((acc, cur, _, digits) => {
    return acc + Math.pow(cur, digits.length)
  }, 0)

  return value === operation
}

// things to remember from this problem
//   for reduce the syntax is reduce((acc, cur, index, array) => { ... })
//
//   Math.pow(3, 2) === 9 // true // also it parses strings into numbers

