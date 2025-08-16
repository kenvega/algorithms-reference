// 6kyu
// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/javascript

// The function partSums will take as parameter a list ls
// and return a list of the sums of its parts

// example:
// ls = [1, 2, 3, 4, 5, 6]

// its following parts:

// [1, 2, 3, 4, 5, 6] => sum 21
// [2, 3, 4, 5, 6] => sum 20
// [3, 4, 5, 6] => sum 18
// [4, 5, 6] => sum 15
// [5, 6] => sum 11
// [6] => sum 6
// [] => sum 0

// The corresponding sums are (put together in a list): [21, 20, 18, 15, 11, 6, 0]

// Other Examples:
// ls = [0, 1, 3, 6, 10] -> parts_sums(ls) -> [20, 20, 19, 16, 10, 0]

// Notes
// Take a look at performance: some lists have thousands of elements.


// my final solution
function partsSums(array) {
  let sum = array.reduce((acc, cur) => {
    return acc + cur
  }, 0)

  let response = [sum];

  for (let i = 1; i <= array.length; i++) {
    response.push(sum - array[i-1])
    sum = sum - array[i-1]
  }

  return response
}

// first solution (timed out in tests)
function partsSums(array) {
  let sum = array.reduce((acc, cur) => {
    return acc + cur
  }, 0)

  let response = [sum];

  for (let i = 1; i <= array.length; i++) {
    response = response.concat(sum - array[i-1])
    sum = sum - array[i-1]
  }

  return response
}


// to remember
// concat creates a new array and copies all elements over
//  so if concat is inside a for loop then it makes it O(n²)

// push is linear/faster


