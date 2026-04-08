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
//  to account for even palindromes add a special character between every character
//    that way we always can find palindromes (odd or even)
function longestPalindrome(string) {
  if (string.length < 2) return string
  if (string.length === 2) return string[0] === string[1] ? string : string[0]

  string = `#${string.split("").join("#")}#`

  let longestPalindromeFound = ""
  let currentPalindromeFound = ""

  // for each character of the string (which already includes the special character '#' to account for even palindromes)
  //   start to expand from each character and check if you have a palindrome
  //     stop if you reach the limits of the string or you don't get a palindrome when expanding
  //     once you stop, check if the palindrome you found is the biggest and update it
  // then go for the next character and start again until you do the same for the last character
  for (let i = 1; i < string.length - 1; i++) {
    let j = 1

    // keep finding a bigger palindrome while you can with the current center
    while (
      string[i - j] !== undefined &&
      string[i + j] !== undefined &&
      string[i - j] === string[i + j]
    ) {
      currentPalindromeFound = string.slice(i - j, i + j + 1)
      j++
    }

    // check if the biggest palindrome found for this center is bigger than one recorded before
    if (currentPalindromeFound.length > longestPalindromeFound.length) {
      longestPalindromeFound = currentPalindromeFound
    }
  }

  return longestPalindromeFound.split("#").join("")
}

console.log(longestPalindrome("ac")) // "a"
console.log(longestPalindrome("abb")) // "bb"
console.log(longestPalindrome("aba")) // "aba"
console.log(longestPalindrome("abae")) // "aba"
console.log(longestPalindrome("cbabd")) // "bab"
console.log(longestPalindrome("babad")) // "bab"
console.log(longestPalindrome("cbbd")) // "bb"
console.log(longestPalindrome("aabbaaX")) // "aabbaa"
console.log(longestPalindrome("forgeeksskeegfor")) // "geeksskeeg"
console.log(longestPalindrome("racecarannakayak")) // "racecar"
console.log(longestPalindrome("abccbahelloollehxyz")) // "helloolleh"
console.log(longestPalindrome("bbbbbbbbcbbbbbbbb")) // "bbbbbbbbcbbbbbbbb"
console.log(longestPalindrome("abcddcbaeekk")) // "abcddcba"
console.log(longestPalindrome("abacdfgdcaba")) // "aba"
console.log(longestPalindrome("babadada")) // "adada"
