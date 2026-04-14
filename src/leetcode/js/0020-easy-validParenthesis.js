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

// solution v1
//  the correct approach is to have an stack
//   loop through the string and when you hit a closing bracket
//    make sure that the previous bracket that was opened matches the one closing
//     if not you can safely say it is invalid
function isValid(string) {}

console.log(isValid("([)]")) // false
console.log(isValid("([])")) // true
console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("(){}}{")) // false

// old solution
//  incorrect approach that uses counting
//   this approach cannot distinguish order
//  the correct approach is a stack
function isValidIncorrectApproach(string) {
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

console.log(isValidIncorrectApproach("([)]")) // false
console.log(isValidIncorrectApproach("([])")) // true // should return true but it's returning false. cannot distinguish between '([])' and '([)]'
console.log(isValidIncorrectApproach("()")) // true
console.log(isValidIncorrectApproach("()[]{}")) // true
console.log(isValidIncorrectApproach("(]")) // false
console.log(isValidIncorrectApproach("(){}}{")) // false
