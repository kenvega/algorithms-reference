// medium
// https://leetcode.com/problems/integer-to-roman/

// Given an integer, convert it to a Roman numeral

// Symbol -> Value
//      I -> 1
//      V -> 5
//      X -> 10
//      L -> 50
//      C -> 100
//      D -> 500
//      M -> 1000

// Example 1:
//   Input: num = 3749 -> Output: "MMMDCCXLIX"
// Explanation:
//   3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//    700 = DCC as 500 (D) + 100 (C) + 100 (C)
//     40 = XL as 10 (X) less of 50 (L)
//      9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

// Example 2:
// Input: num = 58 -> Output: "LVIII"
// Explanation:
//   50 = L
//    8 = VIII

// Example 3:
// Input: num = 1994 -> Output: "MCMXCIV"
// Explanation:
//   1000 = M
//    900 = CM
//     90 = XC
//      4 = IV

// Constraints:
//   1 <= num <= 3999

// my solution v1
// get the number to an object with properties as decimal places and values as the digits
// could be converted to an array to
// then use the rules to create the roman numeral
function intToRoman(num) {
  const dict = {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX"
  }

  const array = num.toString().split("")

  const roman = array.map((digit) => dict[digit])
  const response = roman
    .reverse()
    .map((rom, i) => {
      if (i === 1) {
        rom = rom.replaceAll("IX", "XC")
        rom = rom.replaceAll("I", "X")
        rom = rom.replaceAll("V", "L")
      }
      if (i === 2) {
        rom = rom.replaceAll("IX", "CM")
        rom = rom.replaceAll("I", "C")
        rom = rom.replaceAll("V", "D")
      }
      if (i === 3) {
        rom = rom.replaceAll("I", "M")
      }

      return rom
    })
    .reverse()

  return response.join("")
}

console.log(intToRoman(3749)) // "MMMDCCXLIX"
console.log(intToRoman(58)) // "LVIII"
console.log(intToRoman(100)) // "MCMXCIV"
console.log(intToRoman(1994)) // "MCMXCIV"

// const dict = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000
// }
