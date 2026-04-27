// medium
// https://leetcode.com/problems/string-to-integer-atoi/

// Implement the myAtoi(string s) function
//   which converts a string to a 32-bit signed integer.
//   the algorithm for myAtoi(string s) is as follows:

// Whitespace:
//   Ignore any leading whitespace (" ").
// Signedness:
//   Determine the sign by checking if the next character is '-' or '+'
//     assuming positivity if neither present.
// Conversion:
//   Read the integer by skipping leading zeros
//     until a non-digit character is encountered or the end of the string is reached
//   If no digits were read, then the result is 0.
// Rounding:
//   If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1]
//     then round the integer to remain in the range.
//   Specifically, integers less than -2^31 should be rounded to -2^31,
//     and integers greater than 2^31 - 1 should be rounded to 2^31 - 1.

// Return the integer as the final result.

// Example 1:
//   Input: s = "42" -> Output: 42
//   Explanation:
//     The underlined characters are what is read in and the caret is the current reader position.
//     Step 1: "42" (no characters read because there is no leading whitespace)
//              ^
//     Step 2: "42" (no characters read because there is neither a '-' nor '+')
//              ^
//     Step 3: "42" ("42" is read in)
// Example 2:
//   Input: s = " -042" -> Output: -42
//   Explanation:
//     Step 1: "   -042" (leading whitespace is read and ignored)
//                 ^
//     Step 2: "   -042" ('-' is read, so the result should be negative)
//                 ^
//     Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
//                   ^
// Example 3:
//   Input: s = "1337c0d3"
//   Explanation:
//     Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
//              ^
//     Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
//              ^
//     Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
//                  ^
// Example 4:
//   Input: s = "0-1" -> Output: 0
//   Explanation:
//     Step 1: "0-1" (no characters read because there is no leading whitespace)
//              ^
//     Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
//              ^
//     Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
//               ^
// Example 5:
//   Input: s = "words and 987" -> Output: 0
//   Explanation:
//     Reading stops at the first non-digit character 'w'.

function myAtoi(string) {
  // ignore whitespace
  string = string.trim()
  let isNegative = false

  // get if it is positive (remove the positive sign)
  if (string[0] === "+") {
    if (string[1] === "-") return 0
    string = string.slice(1)
  }

  // get if it is negative
  if (string[0] === "-") {
    if (string[1] === "+") return 0
    isNegative = true
    string = string.slice(1)
  }

  // read until non-digit found
  for (let i = 0; i < string.length; i++) {
    if (string[i] < "0" || string[i] > "9") {
      string = string.slice(0, i)
      break
    }
  }

  if (string === "") {
    return 0
  }

  // skip leading zeros
  if (string[0] === "0" && string.length > 1) {
    let zeroIndex
    for (let i = 1; i < string.length; i++) {
      if (string[i] !== "0") {
        zeroIndex = i
        break
      }
    }
    string = string.slice(zeroIndex)
  }

  if (isNegative) {
    string = `-${string}`
  }

  const response = Number(string)

  if (response >= 2 ** 31) {
    return 2 ** 31 - 1
  }

  if (response < (-2) ** 31) {
    return (-2) ** 31
  }

  return Number(string)
}

console.log(myAtoi("42")) // 42
console.log(myAtoi("+1")) // 1
console.log(myAtoi("-+12")) // 0
console.log(myAtoi("+-12")) // 0
console.log(myAtoi("-91283472332")) // -2147483648
console.log(myAtoi("21474836460")) // -2147483647
console.log(myAtoi("2147483648")) // 2147483647
console.log(myAtoi("1337c0d3")) // 1337
console.log(myAtoi("words and 987")) // 0
console.log(myAtoi("0-1")) // 0
console.log(myAtoi("   -042")) // -42
console.log(myAtoi("-0")) // -0
console.log(myAtoi("   +0 123")) // 0
