// 6kyu
// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/javascript

// Write a function that takes a string of braces, and determines if the order of the braces is valid.
// It should return true if the string is valid, and false if it's invalid.

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.


// my solution
function validBraces(braces){
  let countPa = 0
  let countCu = 0
  let countBr = 0
  let order = []

  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === '(') { countPa++; order.push(braces[i]) }
    if (braces[i] === '[') { countCu++; order.push(braces[i]) }
    if (braces[i] === '{') { countBr++; order.push(braces[i]) }
    if (braces[i] === ')') {
      countPa--;
      if (order[order.length - 1] !== '(') { return false }
      else { order.pop() }
    }
    if (braces[i] === ']') {
      countCu--;
      if (order[order.length - 1] !== '[') { return false }
      else { order.pop() }
    }
    if (braces[i] === '}') {
      countBr--;
      if (order[order.length - 1] !== '{') { return false }
      else { order.pop() }
    }
  }

  return countPa === 0 && countCu === 0 && countBr === 0
}

// to remember
//  push and pop modify the original array
//  also remember that push and pop don't return the modified array

// other solution
function validBraces2(braces){
  let matches = { '(':')', '{':'}', '[':']' };
  let stack = [];
  let currentChar;

  for (let i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      // opening braces
      stack.push(currentChar);
    } else {
      // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}
