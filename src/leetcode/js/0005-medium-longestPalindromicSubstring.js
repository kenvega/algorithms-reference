// medium
// https://leetcode.com/problems/longest-palindromic-substring/description/

// Given a string 's', return the longest palindromic substring in 's'
// palindromic: it reads the same forward and backward

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// solution v1
//  consider every character as a possible center
//  try expanding with every center so you get all possible palindromes
//  record the highest palindrome while doing that to return it at the end
function longestPalindrome(string) {
  let longestPalindromeFound = ""
  let currentPalindromeFound = ""
  let currentCharacter = ""

  for (let i = 0; i < string.length; i++) {
    currentCharacter = array[i]
  }
}

console.log(longestPalindrome("aabbaaX")) // "aabbaa"
console.log(longestPalindrome("forgeeksskeegfor")) // "geeksskeeg"
console.log(longestPalindrome("racecarannakayak")) // "racecar"
console.log(longestPalindrome("abccbahelloollehxyz")) // "helloolleh"
console.log(longestPalindrome("bbbbbbbbcbbbbbbbb")) // "bbbbbbbbcbbbbbbbb"
console.log(longestPalindrome("abcddcbaeekk")) // "abcddcba"
console.log(longestPalindrome("abacdfgdcaba")) // "aba"
console.log(longestPalindrome("babadada")) // "adada"
console.log(longestPalindrome("babad")) // "bab"
console.log(longestPalindrome("cbbd")) // "bb"
