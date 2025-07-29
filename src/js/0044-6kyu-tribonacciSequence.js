// 6kyu
// https://www.codewars.com/kata/556deca17c58da83c00002db

// basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next

// if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]

// But what if we started with [0, 0, 1] as a signature?
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

// you need to create a fibonacci function that given a signature array/list
//   returns the first n elements - signature included of the so seeded sequence

// Signature will always contain 3 numbers
// n will always be a non-negative number
// if n == 0, then return an empty array
// and be ready for anything else which is not clearly specified ;)

function tribonacci(signature,n){
  if (n === 0) return []
  if (n === 1) return [signature[0]]
  if (n === 2) return [signature[0], signature[1]]

  let nextNumber

  // sums the last three digits to get the next one and update the array
  for (let i = 0; i < n - 3; i++) {
    nextNumber = signature[signature.length - 1] + signature[signature.length - 2] + signature[signature.length - 3]
    signature = signature.concat(nextNumber)
  }

  return signature
}

// things to remember from this problem
//   you can use slice to cut the array as well
//   you can use push instead of concat to avoid reassign. push changes the original array

// other solution found
function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}