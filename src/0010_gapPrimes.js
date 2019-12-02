// level: 5kyu
// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4

// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for
// m (integer > 2) which gives the start of the search (m inclusive)
// n (integer >= m) which gives the end of the search (n inclusive)

// In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

// So this function should return the FIRST pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise nil or null or None or Nothing (depending on the language).


/**
 * my solution:
 * a for loop
 */

function gap(g, m, n) {
  let min = 0;
  for (let i = m; i <= n; i++) {
    if (isNumberPrime(i)) {
      if (i - min === g) return [min, i];
      min = i;
    }
  }
  return null;
}

function isNumberPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(gap(2, 100, 110)); // [101, 103]
console.log(gap(4, 100, 110)); // [103, 107]
console.log(gap(8, 300, 400)); // [359, 367]
console.log(gap(10, 300, 400)); // [337, 347]
console.log(gap(6, 100, 110)); // null
