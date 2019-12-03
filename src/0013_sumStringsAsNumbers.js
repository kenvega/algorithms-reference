// level 4kyu
// https://www.codewars.com/kata/5324945e2ece5e1f32000370

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
  const number1 = getDigits(a);
  console.log('number1: ', number1);
  const number2 = getDigits(b);
  console.log('number2: ', number2);

  const maxLength = number1.length > number2.length ? number1.length : number2.length;

  let carret = 0;
  let currentSum = 0;
  const response = [];
  for (let i = 0; i < maxLength; i++) {
    currentSum = (number1[i] ? number1[i] : 0) + (number2[i] ? number2[i] : 0);
    if (currentSum >= 10) {
      currentSum %= 10;
      carret = 1; // having issues with the carret, is for the next number
    } else carret = 0;
    response[i] = currentSum + carret;
  }

  return response;
}

const getDigits = n => n.split('').map(e => parseInt(e, 10)).reverse();

console.log(sumStrings('123', '456')); // '579'
console.log(sumStrings('225', '555')); // '780'
