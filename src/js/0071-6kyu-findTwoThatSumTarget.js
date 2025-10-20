// 6kyu
// https://www.codewars.com/kata/52c31f8e6605bcc646000082

// Write a function that takes an array of numbers (integers for the tests) and a target number.
// It should find two different items in the array that, when added together, give the target value.
// The indexes of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid

// Numbers will be an array of length 2 or greater and all of the items will be numbers

// Target will always be the sum of two different items from that array

// Based on: https://leetcode.com/problems/two-sum/

// my solution
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j]
      }
    }
  }

  return [null, null]
}

console.log('twoSum([1, 2, 3], 4): ', twoSum([1, 2, 3], 4)); // returns [0, 2] or [2, 0]
console.log('twoSum([3, 2, 4], 6): ', twoSum([3, 2, 4], 6)); // returns [1, 2] or [2, 1]

// to remember

// other solution from the internet

