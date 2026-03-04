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
//  consider every middle character as a possible center
//  try expanding with every center so you get all possible palindromes
//  record the highest palindrome while doing that to return it at the end
function longestPalindrome(string) {
  let longestPalindromeFound = string[0]
  let currentPalindromeFound = string[0]
  let currentCenter = ""

  for (let i = 1; i < string.length - 1; i++) {
    currentCenter = string[i]
    currentPalindromeFound = currentCenter
    // expand from the center and check if it is palindrome
    // if it is, then check if it is the longest to see if you need to update it
    // then keep doing the same until you get to an extreme of the string
    for (let j = 1; j < i; j++) {
      // TODO: fix logic
      currentPalindromeFound =
        string[i - j] + currentPalindromeFound + string[i + j]
      if (currentPalindromeFound.length > longestPalindromeFound.length) {
        longestPalindromeFound = currentPalindromeFound
      }
    }
  }

  return longestPalindromeFound
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
