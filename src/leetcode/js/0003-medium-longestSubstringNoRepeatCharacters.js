// medium
// https://leetcode.com/problems/longest-substring-without-repeating-characters

// Given a string 's'
//  find the length of the longest substring without duplicate characters

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

// my solution v1 (is slow)
// have a 'window' (substring) with no repeating characters
//  move through the string and change the window
//  if a new character repeats in the window
//   remove everything from the start up to that repeating character
//  record the length of the window and update the highest length recorded
function lengthOfLongestSubstring(string) {
  let noRepeatString = ""
  let highestMaxCount = 0
  let previousMaxCount = 0
  let currentCharacter = ""

  for (let i = 0; i < string.length; i++) {
    currentCharacter = string[i]
    console.log(noRepeatString, string[i], previousMaxCount, highestMaxCount)

    if (noRepeatString.includes(currentCharacter)) {
      // find and cut everything before
      noRepeatString = noRepeatString.slice(
        noRepeatString.indexOf(currentCharacter) + 1
      )

      // then add the current character
      noRepeatString += currentCharacter

      // check if previousMaxCount was greater than before
      if (previousMaxCount >= highestMaxCount) {
        highestMaxCount = previousMaxCount
      }

      previousMaxCount = noRepeatString.length
    } else {
      noRepeatString += currentCharacter
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

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("dvdf")) // 3
console.log(lengthOfLongestSubstring("jbpnbwwd")) // 4
console.log(lengthOfLongestSubstring("hkcpmprxxxqw")) // 5
console.log(lengthOfLongestSubstring("c")) // 1
console.log(lengthOfLongestSubstring("au")) // 2

// solution v2 (better variable names)
//   the 'maxCounts' variables should really be considered a window
function lengthOfLongestSubstringv2(string) {
  let currentWindowText = "" // the substring that contains no repeated characters
  let bestWindowLength = 0 // the largest window length that will be recorded
  let currentCharacter = ""

  for (let i = 0; i < string.length; i++) {
    currentCharacter = string[i]

    // find if currentChar appears inside the current window
    const duplicatePositionInWindow =
      currentWindowText.indexOf(currentCharacter)

    // if currentChar is already in the window
    //   remove everything up to and including its previous occurrence
    if (duplicatePositionInWindow !== -1) {
      currentWindowText = currentWindowText.slice(duplicatePositionInWindow + 1)
    }

    // add the current character to the window
    currentWindowText += currentCharacter

    // update the best length
    if (currentWindowText.length > bestWindowLength) {
      bestWindowLength = currentWindowText.length
    }
  }

  return bestWindowLength
}

console.log(lengthOfLongestSubstringv2("abcabcbb")) // 3
console.log(lengthOfLongestSubstringv2("bbbbb")) // 1
console.log(lengthOfLongestSubstringv2("pwwkew")) // 3
console.log(lengthOfLongestSubstringv2("dvdf")) // 3
console.log(lengthOfLongestSubstringv2("jbpnbwwd")) // 4
console.log(lengthOfLongestSubstringv2("hkcpmprxxxqw")) // 5
console.log(lengthOfLongestSubstringv2("c")) // 1
console.log(lengthOfLongestSubstringv2("au")) // 2

// solution v3 (better performance)
//  when checking for the repeating character
//  instead of searching inside the window with .includes or indexOf
//   save the index where the window starts
//   save where each character was last seen (a Map/object/dictionary)
//     so you can ask later have i seen this character before and where? and that search would be faster
//  now when hitting a duplicate we just move the index where the window starts
//  going from O(n²) (because of lookups like .includes inside another loop) to O(n) for the single loop
function lengthOfLongestSubstringv3(string) {}

console.log(lengthOfLongestSubstringv3("abcabcbb")) // 3
console.log(lengthOfLongestSubstringv3("bbbbb")) // 1
console.log(lengthOfLongestSubstringv3("pwwkew")) // 3
console.log(lengthOfLongestSubstringv3("dvdf")) // 3
console.log(lengthOfLongestSubstringv3("jbpnbwwd")) // 4
console.log(lengthOfLongestSubstringv3("hkcpmprxxxqw")) // 5
console.log(lengthOfLongestSubstringv3("c")) // 1
console.log(lengthOfLongestSubstringv3("au")) // 2
