// medium
// https://leetcode.com/problems/longest-substring-without-repeating-characters

// Given a string 's' find the length of the longest substring without duplicate characters

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3
// Note that "bca" and "cab" are also correct answers

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces

// my solution (is slow)
// when you find a reocurring character
// don't throw everything and start again
//   just cut the reocurrance and what was before it
//   and keep going
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(string) {
  let noRepeatString = ""
  let highestMaxCount = 0
  let previousMaxCount = 0

  for (let i = 0; i < string.length; i++) {
    console.log(noRepeatString, string[i], previousMaxCount, highestMaxCount)

    if (noRepeatString.includes(string[i])) {
      // find and cut everything before
      noRepeatString = noRepeatString.slice(
        noRepeatString.indexOf(string[i]) + 1
      )

      // then add the current character
      noRepeatString += string[i]

      if (previousMaxCount >= highestMaxCount) {
        highestMaxCount = previousMaxCount
        previousMaxCount = noRepeatString.length
      }
    } else {
      noRepeatString += string[i]
      previousMaxCount++

      if (i === string.length - 1) {
        if (previousMaxCount > highestMaxCount) {
          highestMaxCount = previousMaxCount
        }
      }
    }
  }

  return highestMaxCount
}

// console.log(lengthOfLongestSubstring("abcabcbb")) // 3
// console.log(lengthOfLongestSubstring("bbbbb")) // 1
// console.log(lengthOfLongestSubstring("pwwkew")) // 3
// console.log(lengthOfLongestSubstring("dvdf")) // 3
console.log(lengthOfLongestSubstring("jbpnbwwd")) // 4
console.log(lengthOfLongestSubstring("hkcpmprxxxqw")) // 5 // TODO: still fails here. should return 4 but it's returning 6
// console.log(lengthOfLongestSubstring("au")) // 2
// console.log(lengthOfLongestSubstring("c")) // 1
