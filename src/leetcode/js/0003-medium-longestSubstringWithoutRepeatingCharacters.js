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

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(string) {
  let noRepeatString = ""
  let maxCount = 0
  let lastMaxCount = 0

  for (let i = 0; i < string.length; i++) {
    console.log(noRepeatString, string[i], lastMaxCount, maxCount)

    if (noRepeatString.includes(string[i])) {
      noRepeatString = string[i]

      if (lastMaxCount > maxCount) {
        maxCount = lastMaxCount
        lastMaxCount = 1
      }
    } else {
      noRepeatString += string[i]
      lastMaxCount++

      if (i === string.length - 1) {
        if (lastMaxCount > maxCount) {
          maxCount = lastMaxCount
        }
      }
    }
  }

  return maxCount
}

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("dvdf")) // 3 // TODO: still fails here. should return 2
console.log(lengthOfLongestSubstring("au")) // 2
console.log(lengthOfLongestSubstring("c")) // 1
