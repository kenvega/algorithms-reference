// 6kyu
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/javascript

// Given an array of integers, find an index N where
//   the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1.

// Example 1:
// Let's say you are given the array { 1, 2, 3, 4, 3, 2, 1 }:
// Your function will return the index 3, because the sum of left side of the index ({1, 2, 3}) and the sum of the right side of the index ({3, 2, 1}) both equal 6.

// Example 2:
// You are given the array {1, 100, 50, -51, 1, 1}:
// Your function will return the index 1, because the sum of left side of the index ({1}) and the sum of the right side of the index ({50, -51, 1, 1}) both equal 1.

// Example 3:
// You are given the array {20, 10, -80, 10, 10, 15, 35}
// At index 0 the left side is {}
// The right side is {10, -80, 10, 10, 15, 35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most languages the index of an array starts at 0.

// Input
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note
// If you are given an array with multiple answers, return the lowest correct index.

// my solution
function findEvenIndex(arr) {
  const sum = arr.reduce((acc,cur) => acc + cur, 0)
  let auxTotal = 0
  let left = 0
  let right = 0

  for (let i = 0; i < arr.length; i++) {
    auxTotal += arr[i]

    left = auxTotal - arr[i]
    right = sum - left - arr[i]

    if (left === right) {
      return i
    }
  }

  return -1;
}

// to remember
// 

// solution from someone else
function findEvenIndex(arr) {
  let left = 0;
  let right = arr.reduce((s,n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}
