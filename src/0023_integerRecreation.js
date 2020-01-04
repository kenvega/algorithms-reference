// 5kyu
// https://www.codewars.com/kata/55aa075506463dac6600010d/

// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// #Examples:

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

function listSquared(m, n) {
  const response = [];
  for (let i = m; i < n; i++) {
  // get divisors
    const divisors = getDivisors(i);
    // square them
    const divisorsSquared = divisors.map(x => x * x);
    // sum them
    const sum = divisorsSquared.reduce((acc, cur) => acc + cur, 0);
    // check if square
    const isSumASquare = isSquare(sum);
    // add them to response if square
    if (isSumASquare) response.push([i, sum]);
  }
  return response;
}

const getDivisors = n => {
  const response = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) response.push(i);
  }
  return response;
};

const isSquare = n => Number.isInteger(Math.sqrt(n));

console.log('listSquared(1, 250): ', listSquared(1, 250));
