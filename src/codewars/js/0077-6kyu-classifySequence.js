// 6kyu
// https://www.codewars.com/kata/5921c0bc6b8f072e840000c0/javascript

// A series or sequence of numbers is usually the product of a function
// and can either be infinite or finite.

// In this kata we will only consider finite series and you are required to return a code according to the type of sequence:

// Code Type Example
// 0 - unordered - [3,5,8,1,14,3]
// 1 - strictly increasing - [3,5,8,9,14,23]
// 2 - not decreasing - [3,5,8,8,14,14]
// 3 - strictly decreasing - [14,9,8,5,3,1]
// 4 - not increasing - [14,14,8,8,5,3]
// 5 - constant - [8,8,8,8,8,8]
// You can expect all the inputs to be non-empty and completely numerical arrays/lists
// no need to validate the data; do not go for sloppy code, as rather large inputs might be tested.

// Try to achieve a good solution that runs in linear time
// also, do it functionally, meaning you need to build a pure function
// or, in even poorer words, do NOT modify the initial input!

// my solution
function sequenceClassifier(array) {
  let previous = array[0]

  let increaseCount = 0
  let decreaseCount = 0
  let equalCount = 0

  let isEqual
  let isIncreasing
  let isDecreasing

  const isConstant = 5
  const isNotIncreasing = 4
  const isStrictlyDecreasing = 3
  const isNotDecreasing = 2
  const isStrictlyIncreasing = 1
  const unordered = 0

  for (let i = 1; i < array.length; i++) {
    const current = array[i]

    isEqual = current === previous
    if (isEqual) {
      equalCount++
    }

    isIncreasing = current > previous
    if (isIncreasing) {
      increaseCount++
    }

    isDecreasing = current < previous
    if (isDecreasing) {
      decreaseCount++
    }

    previous = current
  }

  if (equalCount === array.length - 1) {
    return isConstant
  }

  if (increaseCount === array.length - 1) {
    return isStrictlyIncreasing
  }

  if (decreaseCount === array.length - 1) {
    return isStrictlyDecreasing
  }

  if (equalCount > 0 && increaseCount > 0 && decreaseCount === 0) {
    return isNotDecreasing
  }

  if (equalCount > 0 && decreaseCount > 0 && increaseCount === 0) {
    return isNotIncreasing
  }

  return unordered
}

console.log(sequenceClassifier([3, 5, 8, 1, 14, 3])) // 0
console.log(sequenceClassifier([3, 5, 8, 9, 14, 23])) // 1
console.log(sequenceClassifier([3, 5, 8, 8, 14, 14])) // 2
console.log(sequenceClassifier([14, 9, 8, 5, 3, 1])) // 3
console.log(sequenceClassifier([14, 14, 8, 8, 5, 3])) // 4
console.log(sequenceClassifier([8, 8, 8, 8, 8, 8])) // 5
console.log(sequenceClassifier([8, 9])) // 1
console.log(sequenceClassifier([8, 8, 8, 8, 8, 9])) // 2
console.log(sequenceClassifier([9, 8])) // 3
console.log(sequenceClassifier([9, 9, 9, 8, 8, 8])) // 4

// to remember

// other solution from the internet
