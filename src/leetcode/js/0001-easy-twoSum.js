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
// after solution v2: this doesn't really goes from On^2 to On because indexOf is also traversing all the array
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

// if we save the numbers we already saw in a Map then we can stop doing a O(n^2)
// because if later we know we need a specific number we already know where that number is in the Map
// it could be a Map or an object like 'seen'
// the important part that improves the time is the lookup in the object
//   which is a faster lookup than indexOf in an array
function twoSumv3(nums, target) {
  let num = 0
  let other = 0
  const seen = {}

  for (let i = 0; i < nums.length; i++) {
    num = nums[i]
    other = target - num

    if (seen[other] !== undefined) {
      return [seen[other], i]
    }

    seen[num] = i
  }
}

console.log(twoSumv3([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSumv3([3, 2, 4], 6)) // [1,2]
console.log(twoSumv3([3, 3], 6)) // [0,1]
console.log(twoSumv3([2, 5, 5, 11], 10)) // [1,2]

// solution with a Map
function twoSumv4(nums, target) {
  const seen = new Map()

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    const need = target - x

    if (seen.has(need)) {
      return [seen.get(need), i]
    }

    seen.set(x, i)
  }
}

console.log(twoSumv4([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSumv4([3, 2, 4], 6)) // [1,2]
console.log(twoSumv4([3, 3], 6)) // [0,1]
console.log(twoSumv4([2, 5, 5, 11], 10)) // [1,2]

// to remember
//  when you have a O(n^2) in time and O(1) in space
//  you usually can transform it to a O(n) in time and O(n) in space
//  we generally prefer to improve time because it is easy to increase the space in memory

// array.indexOf(theElementYouLookFor, theIndexWhereToStartLookingFor)

// other solution from the internet
