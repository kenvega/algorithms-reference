// 6kyu
// https://www.codewars.com/kata/52de553ebb55d1fca3000371/javascript

// An Arithmetic Progression is defined as one in which there is a constant difference
// between the consecutive terms of a given series of numbers.

// You are provided with consecutive elements of an Arithmetic Progression.
// There is however one hitch:
// exactly one term from the original series is missing
// from the set of numbers which have been given to you.
// The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list
// list size will always be at least 3 numbers
// The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7

// my solution
function findMissing(list) {
  // the first and the last one cannot be the ones that are the missing ones
  // so you just need to get the progression rate between the limits
  // if the list starts with 1 and ends with 4 and there are 3 the rate should 1
  // so you start adding 1 and checking if the number is the correct
  // if not that means that is the number that is left
  // how to get the rate?
  // the rate probably can be like
  // second - first VS last - previousLast
  //  whichever is the lesser one is the rate
  const rate1 = list[1] - list[0]
  const rate2 = list[list.length - 1] - list[list.length - 2]

  const rate = rate1 <= rate2 ? rate1 : rate2

  let previous = list[0]
  let current = list[1]

  for (let i = 1; i < list.length; i++) {
    current = list[i]
    if (previous + rate !== current) {
      return previous + rate
    }
    previous = current
  }
}

console.log(findMissing([1, 3, 4])) // 2
console.log(findMissing([1, 2, 4])) // 3
console.log(findMissing([2, 3, 5])) // 4
console.log(findMissing([2, 4, 8])) // 6
console.log(findMissing([5, 9, 17])) // 13
console.log(findMissing([5, 9, 17, 21])) // 13
console.log(findMissing([1, 2, 3, 5])) // 4

// to remember
//  array.find also stops when it finds what you are looking for

// other solution from the internet
const findMissing2 = (list) => {
  const delta = (list[list.length - 1] - list[0]) / list.length
  return list.find((el, ind) => el !== ind * delta + list[0]) - delta
}
