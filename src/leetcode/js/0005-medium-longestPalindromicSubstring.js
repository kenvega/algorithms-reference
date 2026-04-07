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
  if (string.length <= 2) {
    if (string[0] !== string[1]) {
      return string[0]
    }
    return string
  }

  string = string.split("").join("#").concat("#")

  let longestPalindromeFound = string[0]
  let currentPalindromeFound = ""

  for (let i = 0; i < string.length - 1; i++) {
    // for each character of the string (which already includes the special character '#' to account for even palindromes)
    //   start to expand from each character and check if you have a palindrome
    //     stop if you reach the limits of the string or you don't get a palindrome when expanding
    //     once you stop, check if the palindrome you found is the biggest and update it
    // then go for the next character and start again until you do the same for the last character

    let j = 1

    while (true) {
      if (
        string[i - j] === undefined ||
        string[i + j] === undefined ||
        string[i - j] !== string[i + j]
      ) {
        if (currentPalindromeFound.length > longestPalindromeFound.length) {
          longestPalindromeFound = currentPalindromeFound
        }
        break
      }

      // at this point you have a palindrome
      if (string[i - j] === string[i + j]) {
        currentPalindromeFound = string.slice(i - j, i + j + 1)
      }

      j++
    }
  }

  return longestPalindromeFound.split("#").join("")
}

console.log(longestPalindrome("ac")) // "a"
console.log(longestPalindrome("abb")) // "bb"
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
