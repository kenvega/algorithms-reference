// medium
// https://leetcode.com/problems/container-with-most-water/description/

// You are given an integer array height of length 'n'
//  There are 'n' vertical lines drawn such that
//   the two endpoints of the ith line are (i, 0) and (i, height[i])

// Find two lines that together with the x-axis form a container
//  such that the container contains the most water

// Return the maximum amount of water a container can store

// Notice that you may not slant the container

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]
//               In this case, the max area of water (blue section)
//                the container can contain is 49

// Constraints:
// n == height.length
// 2 <= n <= 10^5
// 0 <= height[i] <= 10^4

// solution v2 (correct approach)
//  choose the first and last one as the vertical lines to calculate the area
//  then try to get a larger area by moving the left or the right vertical line
//  width would be reduced by doing that but we could hopefully get a bigger vertical line
//  to decide which vertical line to move just move the shorter one
//  because moving the larger line could be even taller but in that best case the shorter one still defines the vertical area
//  then loop doing that until the vertical lines meet
//  TODO: what happens if both vertical heights are the same at some point?
function maxAreav2(heights) {
  if (heights.length === 2) {
    return Math.min(heights[0], heights[1])
  }

  let maxAreaRecorded = 0

  let left = 0
  let right = heights.length - 1

  while (right - left > 1) {
    const shorterVerticalLine = Math.min(heights[left], heights[right])
    const currentArea = (right - left) * shorterVerticalLine

    if (currentArea > maxAreaRecorded) {
      maxAreaRecorded = currentArea
    }

    if (shorterVerticalLine === heights[left]) {
      left++
    } else {
      right--
    }
  }

  return maxAreaRecorded
}

console.log(maxAreav2([1, 1])) // 1
console.log(maxAreav2([8, 7, 2, 1])) // 7 // TODO: fix this case. should return 7 but it's returning 4
console.log(maxAreav2([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49

// solution v1 (too slow because of O(n^2) time. not accepted as solution in leetcode)
// go through every possible case to calculate the area and record the max
// double for to get every possible combination i think
function maxArea(heights) {
  let max = 0
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i]
    for (let j = 1; j < heights.length; j++) {
      const otherHeight = heights[j]
      const area = (j - i) * Math.min(height, otherHeight)
      if (area > max) {
        max = area
      }
    }
  }

  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
