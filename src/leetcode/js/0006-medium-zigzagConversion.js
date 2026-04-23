// medium
// https://leetcode.com/problems/zigzag-conversion/

// The string "PAYPALISHIRING" is written in a zigzag pattern
//   on a given number of rows like this:
//      P   A   H   N
//      A P L S I I G
//      Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:
//   string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"

// Explanation:
//   P     I    N
//   A   L S  I G
//   Y A   H R
//   P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:
// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

// solution v1
// create the format with arrays as you need, then join the results
function convert(string, numberRows) {
  if (numberRows === 1) return string

  const formatted = Array.from({ length: numberRows }, () => [])
  let indexToSave = 0
  let difference = 1

  for (let i = 0; i < string.length; i++) {
    // console.log(formatted, i, indexToSave, formatted[indexToSave])
    formatted[indexToSave].push(string[i])

    indexToSave += difference
    if (indexToSave === numberRows - 1 || indexToSave === 0) {
      difference *= -1
    }
  }

  return formatted
}

console.log(convert("A", 1)) // "A"
console.log(convert("AB", 1))
console.log(convert("PAYPALISHIRING", 3)) // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)) // "PINALSIGYAHRPI"
// TODO: fix with words that already include a ',' in the original string
