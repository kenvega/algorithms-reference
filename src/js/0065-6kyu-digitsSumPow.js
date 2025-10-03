// 6kyu
// https://www.codewars.com/kata/5552101f47fc5178b1000050/javascript

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given two positive integers 'n' and 'p'
//   we want to find a positive integer 'k'
//     if it exists, such that
//       the sum of the digits of 'n' raised to consecutive powers starting from 'p' is equal to 'k' * 'n'

// In other words, writing the consecutive digits of 'n' as 'a', 'b', 'c', 'd' ..., is there an integer 'k' such that:

// ( a^p + b^(p+1) + c^(p+2) + d^(d+3) + ... ) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples:
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1
// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k
// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


// my solution
function digPow(n, p){
  const digits = n.toString().split('').map((c) => parseInt(c))
  let sum = 0

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(digits[i], p + i)
  }

  if ( (sum / n) % 1 === 0 ) {
    return sum / n
  } else {
    return -1
  }
}

console.log('digPow(89, 1): ', digPow(89, 1)); // 1
console.log('digPow(114, 3): ', digPow(114, 3)); // 9
console.log('digPow(135, 1): ', digPow(135, 1)); // 1
console.log('digPow(175, 1): ', digPow(175, 1)); // 1
console.log('digPow(518, 1): ', digPow(518, 1)); // 1
console.log('digPow(46288, 3): ', digPow(46288, 3)); // 51

console.log('digPow(92, 1): ', digPow(92, 1)); // -1
console.log('digPow(8930146, 9): ', digPow(8930146, 9)); // -1
console.log('digPow(46288, 5): ', digPow(46288, 5)); // -1
console.log('digPow(1918093, 10): ', digPow(1918093, 10)); // -1
console.log('digPow(7297273, 8): ', digPow(7297273, 8)); // -1



// to remember
