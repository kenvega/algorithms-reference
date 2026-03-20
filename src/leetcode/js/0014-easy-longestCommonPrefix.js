// easy
// https://leetcode.com/problems/longest-common-prefix/

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// my solution
//  you create a common string based on the first comparison between string 1 and string 2
//  then you use that common for comparing with the next strings
//  you go letter by letter to see if they have less in common so that you can reduce common
//  if at some point common is "" your return early
function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return ""
  }
  if (strings.length === 1) {
    return strings[0]
  }

  let common = ""
  const first = strings[0]
  const second = strings[1]

  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      common += first[i]
    } else {
      break
    }
  }

  if (common.length === 0) {
    return ""
  }
  if (strings.length === 2) {
    return common
  }

  for (let i = 2; i < strings.length; i++) {
    const string = strings[i]

    if (string === "") {
      return ""
    }

    for (let j = 0; j < string.length; j++) {
      // TODO: fix logic here. when common is greater than string here there is an error
      if (common[j] !== string[j]) {
        common = common.slice(0, j)
        break
      }
    }

    if (common === "") {
      break
    }
  }

  return common
}

console.log(longestCommonPrefix([""])) // ""
console.log(longestCommonPrefix(["cir", "car"])) // "c"
console.log(longestCommonPrefix(["abab", "aba", ""])) // ""
console.log(longestCommonPrefix(["ac", "ac", "a", "a"])) // "" // TODO: needs fix here
console.log(longestCommonPrefix(["flower", "flow", "flight"])) // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])) // ""
