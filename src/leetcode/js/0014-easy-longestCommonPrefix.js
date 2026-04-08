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

// solution v1
//  create a common string based on the first comparison between string 1 and string 2
//   then you use that common string for comparing it with the next strings
//   you go letter by letter to see if they have less in common so that you can reduce the common string
//   if at some point the common string is "" your return early
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

  // build common prefix from the first two strings
  // doesn't matter if second is larger than first, what matters is what is common between both
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      common += first[i]
    } else {
      break
    }
  }

  // if already there is nothing in common between the first two strings you can return early
  if (common === "") {
    return ""
  }

  if (strings.length === 2) {
    return common
  }

  for (let i = 2; i < strings.length; i++) {
    const currentString = strings[i]
    let newCommon = ""

    if (currentString === "") {
      return ""
    }

    const limit = Math.min(common.length, currentString.length)

    for (let j = 0; j < limit; j++) {
      if (common[j] === currentString[j]) {
        newCommon += common[j]
      } else {
        break
      }
    }

    common = newCommon

    if (common === "") {
      return ""
    }
  }

  return common
}

console.log(longestCommonPrefix([""])) // ""
console.log(longestCommonPrefix(["cir", "car"])) // "c"
console.log(longestCommonPrefix(["abab", "aba", ""])) // ""
console.log(longestCommonPrefix(["ac", "ac", "a", "a"])) // "a"
console.log(longestCommonPrefix(["flower", "flow", "flight"])) // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])) // ""

// solution v2
//
