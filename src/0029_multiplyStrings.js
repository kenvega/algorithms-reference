// level 4kyu
// https://www.codewars.com/kata/55911ef14065454c75000062

// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

//     The arguments are passed as strings.
//     The numbers may be way very large
//     Answer should be returned as a string
//     The returned "number" should not start with zeros e.g. 0123 is invalid

function multiply(a, b) {
  a = a.split('').reverse();
  b = b.split('').reverse();

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

  return removeInitialZeros(result.reverse().join(''));
}

const removeInitialZeros = n => {
  while (n[0] === '0') {
    if (n.length === 1) return n;
    n = n.slice(1, n.length);
  }

  return n;
};


console.log(multiply('784', '563')); // 441392
console.log(multiply('0', '30')); // 0
console.log(multiply('1', '1')); // 1
