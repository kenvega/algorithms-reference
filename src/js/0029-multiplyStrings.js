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

// ------------------------------
// a great solution from codewars
// ------------------------------

/**
 * Multiply two very big numbers passed as string.
 * @param {string} rawA
 * @param {string} rawB
 * @return {string}
 */
function multiply2(rawA, rawB) {
  const a = prepareTerm(rawA);
  const b = prepareTerm(rawB);

  return formatResult(carryValues(computeSubProducts(a, b)));
}

/**
 * Convert a string to an array of digits, then reverse its order
 * so the least significant digit comes first (to simplify looping).
 * e.g. '13' => [3, 1]
 * @param {string} num
 * @param {array<number>}
 */
function prepareTerm(num) {
  return num.split('').map(digit => parseInt(digit, 10)).reverse();
}

/**
 * Compute the sums of the subproducts of the two terms.
 * e.g. [3, 2] * [5, 4] => [(3 * 5), (3 * 4) + (2 * 5), (2 * 4)] => [15, 22, 8]
 * @param {array<number>} a
 * @param {array<number>} b
 * @return {array<number>}
 */
function computeSubProducts(a, b) {
  const products = [];

  for (let i = 0; i < a.length; i++) {
    const da = a[i];

    for (let j = 0; j < b.length; j++) {
      const db = b[j];

      const k = i + j;
      if (k >= products.length) products.push(0);

      products[k] += da * db;
    }
  }

  return products;
}

/**
 * Turn the array of sub-products into an array of digits, carrying the values over.
 * Note that the last item in the returned array may be a number rather than a single digit.
 * e.g. [15, 22, 8] => [5, (22 + 1), 8] => [5, 3, (8 + 2)] => [5, 3, 0, 1]
 * @param {array<number>} products
 * return {array<number>}
 */
function carryValues(products) {
  return products.reduce((digits, prod, i) => {
    // Push the current digit
    digits.push(prod % 10);

    // Carry the value
    const val = Math.floor(prod / 10);
    if (i + 1 < products.length) {
      products[i + 1] += val;
    } else {
      digits.push(val);
    }

    return digits;
  }, []);
}

/**
 * Turn the digits array into the expected result string
 * making sure to strip any leading zeros.
 * e.g. [5, 3, 0, 1] => '1035'
 * @param {array<number>} digits
 * @return {string}
 */
function formatResult(digits) {
  // Reverse digits array and turn it into a string
  const result = digits.reverse().map(d => d.toString()).join('');

  // Remove leading zeros
  return result.replace(/^0*(\d+)$/, '$1');
}
