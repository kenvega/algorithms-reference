// level 4kyu
// https://www.codewars.com/kata/5324945e2ece5e1f32000370

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:
// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// my solution:
// get the digits
// sum as you learned in school (with carry)
// lessons:
//   thought of the first general solution, but then the special cases took time to handle
//   got a better idea once i used paper to see how the carry is handled in normal sums
//   parseInt can't handle big numbers

function sumStrings(a, b) {
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

console.log(sumStrings('4357', '4045')); // '8402'
console.log(sumStrings('0123', '0456')); // '579' // tricky one
console.log(sumStrings('123', '456')); // '579'
console.log(sumStrings('225', '555')); // '780'
console.log(sumStrings('555', '555')); // '1110'
console.log(sumStrings('316156', '6165163')); // '6481319'
console.log(sumStrings('316156', '6165163123')); // '6165479279'
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')); // '712577413488402631964821329'


// other solution from codewars

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

function sumStrings2(a, b) {
  a = a.reverse(); b = b.reverse();
  let carry = 0;
  let index = 0;
  const sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    const aDigit = index < a.length ? parseInt(a[index]) : 0;
    const bDigit = index < b.length ? parseInt(b[index]) : 0;
    const digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}

// other solution from codewars

function sum(n1, n2) {
  return (parseInt(n1) || 0) + (parseInt(n2) || 0);
}

function sumStrings3(a, b) {
  a = a.split('').reverse();
  b = b.split('').reverse();
  total = [];
  const length = (a.length > b.length) ? a.length : b.length;

  // make the sum digit by digit
  for (let i = 0; i < length; i++) {
    s = sum(a[i], b[i]);
    total[i] = sum(total[i], s);
    if (total[i] > 9) {
      total[i] -= 10;
      total[i + 1] = 1;
    }
  }

  // remove fruitless zero
  if (total[total.length - 1] == 0) { total[total.length - 1] = ''; }

  // reverse the array and return the string
  return total.reverse().join('');
}
