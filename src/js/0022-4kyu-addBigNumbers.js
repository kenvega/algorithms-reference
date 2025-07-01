// level 4kyu
// https://www.codewars.com/kata/525f4206b73515bffb000b21

// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
  const number1 = getDigits(a);
  const number2 = getDigits(b);

  const maxLength = number1.length > number2.length ? number1.length : number2.length;

  let carry = 0;
  let currentSum = 0;
  const response = [];
  for (let i = 0; i < maxLength; i++) {
    currentSum = (number1[i] ? number1[i] : 0) + (number2[i] ? number2[i] : 0);

    if (currentSum + carry >= 10) {
      response[i] = currentSum + carry - 10;
      carry = 1;
    } else {
      response[i] = currentSum + carry;
      carry = 0;
    }
  }
  if (carry === 1) response.push(1);

  return response.reverse().reduce((acc, cur) => `${acc}${cur}`, '');
}

const getDigits = n => {
  if (n === '') return [0];
  const response = n.split('').map(e => parseInt(e, 10));
  const index = response.findIndex(e => e !== 0);
  return response.slice(index, response.length).reverse();
};

console.log(add('123123123', '234234')); // 123357357

// other solutions

function add2(a, b) {
  let res = '';
  let c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res;
}
