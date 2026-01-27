// easy
// https://leetcode.com/problems/two-sum/

// Given an array of integers 'nums' and an integer target
//   return indices of the two numbers such that they add up to target

// You may assume that each input would have exactly one solution
//  and you may not use the same element twice

// You can return the answer in any order

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// my solution v1
function twoSum(nums, target) {
  let num = 0
  let other = 0

  for (let i = 0; i < nums.length; i++) {
    num = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      other = nums[j]
      if (num + other === target) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum([3, 2, 4], 6)) // [1,2]
console.log(twoSum([3, 3], 6)) // [0,1]
console.log(twoSum([2, 5, 5, 11], 10)) // [1,2]

// when going number by number if I find in the array the other number I need then just return that
// after solution v2: this doesn't really goes from On^2 to On because indexOf also is traversing all the array
function twoSumv2(nums, target) {
  let num = 0
  let other = 0
  let otherIndex = 0

  for (let i = 0; i < nums.length; i++) {
    num = nums[i]
    other = target - num

    otherIndex = nums.indexOf(other, i + 1)
    console.log(i, otherIndex)

    if (otherIndex !== -1) {
      return [i, otherIndex]
    }
  }
}

console.log(twoSumv2([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSumv2([3, 2, 4], 6)) // [1,2]
console.log(twoSumv2([3, 3], 6)) // [0,1]
console.log(twoSumv2([2, 5, 5, 11], 10)) // [1,2]

// if we start saving the numbers we already saw in a map then we can stop doing a On^2
function twoSumv3(nums, target) {}

console.log(twoSumv3([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSumv3([3, 2, 4], 6)) // [1,2]
console.log(twoSumv3([3, 3], 6)) // [0,1]
console.log(twoSumv3([2, 5, 5, 11], 10)) // [1,2]

// to remember
//  when you have a On^2 in time and 1 in space
//  you usually can transform it to a On in time and On in space

// array.indexOf(theElementYouLookFor, theIndexWhereToStartLookingFor)

// other solution from the internet
