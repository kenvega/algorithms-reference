// easy
// https://leetcode.com/problems/roman-to-integer/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// example
//  2 is written as II in Roman numeral, just two ones added together
// 12 is written as XII, which is simply X + II
// 27 is written as XXVII, which is XX + V + II

// Roman numerals are usually written largest to smallest from left to right
// However, the numeral for four is not IIII
// Instead, the number four is written as IV
// Because the one is before the five we subtract it making four
// The same principle applies to the number nine, which is written as IX
// There are six instances where subtraction is used:
//  I can be placed before V (5) and X (10) to make 4 and 9
//  X can be placed before L (50) and C (100) to make 40 and 90
//  C can be placed before D (500) and M (1000) to make 400 and 900

// Given a roman numeral, convert it to an integer.

// my solution
//  if you have a letter that has lower value before another letter with a higher value
//   then that is two letters as one value. e.g. IV (1 < 5) -> 5 - 1 -> 4
function romanToInt(string) {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let currentChar = ""
  let nextChar = ""
  let count = 0

  for (let index = 0; index < string.length; index++) {
    currentChar = string[index]
    nextChar = index < string.length - 1 ? string[index + 1] : null

    if (nextChar && dict[currentChar] < dict[nextChar]) {
      count -= dict[currentChar]
    } else {
      count += dict[currentChar]
    }
  }

  return count
}

console.log(romanToInt("III")) // 3
console.log(romanToInt("IV")) // 4
console.log(romanToInt("VIII")) // 8
console.log(romanToInt("XII")) // 12
console.log(romanToInt("XIV")) // 14
console.log(romanToInt("XXVII")) // 27
console.log(romanToInt("L")) // 50
console.log(romanToInt("XL")) // 40
console.log(romanToInt("XC")) // 90
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) // 1994
