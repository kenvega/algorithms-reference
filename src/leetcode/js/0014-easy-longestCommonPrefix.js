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

// my solution v1
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
//  instead of building a prefix from the first two strings and then shrink it against the rest
//    - take the first string as reference
//    - check its characters one position at a time
//    - for each position, verify that all other strings have the same character there
//    - stop at the first mismatch
//   basically it's like saying. let's compare column 0 of all strings, then column 1, etc until we get a mismatch
//    this solution would be O(S) in time as well as solutionv1 (Where S is the total number of characters in the input)
//     but closer to O(1) in space as it wouldn't need extra temporary strings
function longestCommonPrefix2(strings) {
  if (strings.length === 0) return ""

  const firstString = strings[0]

  // use the first string as the reference
  // go letter by letter through it
  for (let i = 0; i < firstString.length; i++) {
    const firstStringCurrentLetter = firstString[i]

    // compare every letter position from first string with letters from same positions from the other strings
    for (let j = 1; j < strings.length; j++) {
      const currentString = strings[j]

      // if the current string is shorter then it cannot share this position
      // if the letter at this position is different it means the commonPrefix ends as well
      if (
        i >= currentString.length ||
        currentString[i] !== firstStringCurrentLetter
      ) {
        return firstString.slice(0, i)
      }
    }
  }

  // if we finished checking all letters in the first string
  //  then the whole first string is the commonPrefix
  return firstString
}

console.log(longestCommonPrefix2([""])) // ""
console.log(longestCommonPrefix2(["cir", "car"])) // "c"
console.log(longestCommonPrefix2(["abab", "aba", ""])) // ""
console.log(longestCommonPrefix2(["ac", "ac", "a", "a"])) // "a"
console.log(longestCommonPrefix2(["flower", "flow", "flight"])) // "fl"
console.log(longestCommonPrefix2(["dog", "racecar", "car"])) // ""

// to remember
//  repeated string concatenation like
//    common += first[i]
//    newCommon += common[j]
//  is a bit less efficient than tracking an index and slicing once
