// level: 5kyu
// https://www.codewars.com/kata/52774a314c2333f0a7000688

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints
// 0 <= input.length <= 100

// my solution:
// spot the cases where it will always fail
// use a counter
function validParentheses(parens) {
  parens = parens.split('');
  let response = 0;

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === ')' && response === 0) return false;
    if (parens[i] === '(') response++;
    else response--;
  }

  return response === 0;
}

console.log(validParentheses('()')); // true
console.log(validParentheses('(())')); // true
console.log(validParentheses('())(()')); // false // this one was tricky
console.log(validParentheses(')(')); // false
console.log(validParentheses('))((')); // false
console.log(validParentheses('()()')); // true
console.log(validParentheses('())')); // false
console.log(validParentheses(')(()))')); // false
console.log(validParentheses('(())((()())())')); // true

// other solution from codewars:
// split() was not necessary in this case
function validParentheses2(parens) {
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') n++;
    if (parens[i] === ')') n--;
    if (n < 0) return false;
  }

  return n === 0;
}

// old solution:
// return early for obvious cases
// take a counter
function validParenthesesOld(parens) {
  parens = parens.split('');
  if (parens[0] === ')' || parens[parens.length - 1] === '(') return false;

  return parens.reduce((acc, cur) => {
    if (cur === '(') return acc + 1;
    return acc - 1;
  }, 0) === 0;
}
