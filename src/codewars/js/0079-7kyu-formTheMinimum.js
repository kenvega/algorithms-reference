// 7kyu
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/javascript

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

// Examples
// [1, 3, 1] ==> 13
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679

// my original solution
function minValue(values) {
  const counts = values.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1
    } else {
      acc[cur] += 1
    }
    return acc
  }, {})

  return Number(
    Object.keys(counts)
      .sort((a, b) => a - b)
      .join(""),
  )
}

// to remember
//  if you are going to count characters to filter repetitive ones
//   prefer to use a Set instead of reduce and an aux object

// other solution from the internet
function minValue2(values) {
  const arr = Array.from(new Set(values))
  return Number(arr.sort().join(""))
}
