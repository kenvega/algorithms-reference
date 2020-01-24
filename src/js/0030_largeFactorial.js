// level 4kyu
// https://www.codewars.com/kata/557f6437bf8dcdd135000010

// Write a function that takes an integer n and returns the value of n!.
// The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution
// I have removed the use of require in the javascript language.

function factorial(n) {
  const numbers = getNumbers(n);
  return numbers.reduce((acc, cur) => multiply(acc, cur), 1).toString();
}

const getNumbers = n => {
  const response = [];
  for (let i = 1; i <= n; i++) {
    response.push(i);
  }
  return response;
};

const multiply = (a, b) => {
  a = a.toString().split('').reverse();
  b = b.toString().split('').reverse();

  const result = [];

  // get multiplication results in single array
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (!result[i + j]) {
        result[i + j] = 0;
      }

      result[i + j] += a[i] * b[j];
    }
  }

  // handle the carrys from results
  for (let i = 0; i < result.length; i++) {
    if (result[i] >= 10) {
      if (!result[i + 1]) {
        result[i + 1] = 0;
      }

      result[i + 1] += parseInt(result[i] / 10);
      result[i] %= 10;
    }
  }

  return result.reverse().join('');
};


console.log(factorial(10)); // 3628800

// another solution from codewars

function factorial2(n) {
  const res = [1];
  for (let i = 2; i <= n; ++i) {
    let c = 0;
    for (let j = 0; j < res.length || c !== 0; ++j) {
      c += (res[j] || 0) * i;
      res[j] = c % 10;
      c = Math.floor(c / 10);
    }
  }
  return res.reverse().join('');
}

console.log(factorial2(10)); // 3628800
