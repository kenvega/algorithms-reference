// easy
// https://leetcode.com/problems/valid-parentheses/

// Given a string 's'
// containing just the characters '(', ')', '{', '}', '[' and ']'
// determine if the input string is valid

// An input string is valid if:
// - Open brackets must be closed by the same type of brackets.
// - Open brackets must be closed in the correct order.
// - Every close bracket has a corresponding open bracket of the same type.

// Example 1:
//  Input: s = "()"
//  Output: true

// Example 2:
//  Input: s = "()[]{}"
//  Output: true

// Example 3:
//  Input: s = "(]"
//  Output: false

// Example 4:
//  Input: s = "([])"
//  Output: true

// Example 5:
//  Input: s = "([)]"
//  Output: false

function isValid(string) {
  let parenthesisNum = 0
  let bracketNum = 0
  let curlyBracketNum = 0

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i]
    if (currentChar === "(") {
      parenthesisNum += 1
    }
    if (currentChar === "[") {
      bracketNum += 1
    }
    if (currentChar === "{") {
      curlyBracketNum += 1
    }
    if (currentChar === ")") {
      if (bracketNum > 0 || curlyBracketNum > 0 || parenthesisNum === 0) {
        return false
      }
      parenthesisNum -= 1
    }
    if (currentChar === "]") {
      if (parenthesisNum > 0 || curlyBracketNum > 0 || bracketNum === 0) {
        return false
      }
      bracketNum -= 1
    }
    if (currentChar === "}") {
      if (bracketNum > 0 || parenthesisNum > 0 || curlyBracketNum === 0) {
        return false
      }
      curlyBracketNum -= 1
    }
  }

  return parenthesisNum === 0 && bracketNum === 0 && curlyBracketNum === 0
}

console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("([)]")) // false
console.log(isValid("(){}}{")) // false
console.log(isValid("([])")) // true // TODO: fix logic. should return true but it's returning false
