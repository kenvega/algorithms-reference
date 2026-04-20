// medium
// https://leetcode.com/problems/reverse-integer/

// Given a signed 32-bit integer x
// return x with its digits reversed

// If reversing x causes the value to go outside
//   the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -2^31 <= x <= 2^31 - 1

// solution v2
//  same approach, reduced duplication
function reversev2(number) {
  const MIN = (-2) ** 31
  const MAX = 2 ** 31 - 1

  const sign = number < 0 ? -1 : 1
  const reversed =
    Number(Math.abs(number).toString().split("").reverse().join("")) * sign

  if (reversed < MIN || reversed > MAX) {
    return 0
  } else {
    return reversed
  }
}

console.log(reversev2(123)) // 321
console.log(reversev2(-123)) // -321
console.log(reversev2(120)) // 21
console.log(reversev2(1534236469)) // 0

// my solution v1
//  convert the number to an string then array then reverse it and then return it back
function reverse(number) {
  const MIN = (-2) ** 31
  const MAX = 2 ** 31 - 1

  let string
  if (number < 0) {
    string = number.toString()
    string = string.slice(1, string.length)
    string = string.split("").reverse().join("")
    number = Number(`-${string}`)
    if (number < MIN) {
      return 0
    }

    return number
  }

  string = number.toString().split("").reverse().join("")
  number = Number(string)

  if (number > MAX) {
    return 0
  }

  return number
}

console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
console.log(reverse(120)) // 21
console.log(reverse(1534236469)) // 0
