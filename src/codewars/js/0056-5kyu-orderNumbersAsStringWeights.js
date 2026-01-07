// 5kyu
// https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript

// Order a list by giving a "weight" to numbers
// The weight of a number will be from now on the sum of its digits.
// For example 99 will have "weight" 18
// 100 will have "weight" 1 so in the list 100 will come before 99.

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:
// "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight"
// let us class them as if they were strings (alphabetical ordering) and not numbers:
// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces
// and more than a unique whitespace between two consecutive numbers

// my solution
function orderWeight(strng) {
  strng = strng.trim()

  let newList = strng.split(' ')

  newList = newList.sort((a,b) => {
    const firstNumber = a.split('').reduce((acc,cur) => parseInt(acc) + parseInt(cur) , 0)
    const secondNumber = b.split('').reduce((acc,cur) => parseInt(acc) + parseInt(cur) , 0)

    if (firstNumber === secondNumber) {
      // to order as strings when the weights are the same
      if (a < b) {
        return -1
      } else if ( a > b ) {
        return 1
      } else {
        return 0
      }
    } else {
      return firstNumber - secondNumber
    }
  })

  return newList.join(' ')
}

// to remember
// for the sort method could just "(a, b) => a - b" to sort numbers in ascending order
// but if you need custom rules to sort remember
// return a negative value to indicate that 'a' goes before 'b'
// return a positive value to indicate that 'a' goes after 'b'
// return 0 or NaN to indicate that 'a' and 'b' are considered equal

// to make comparison between strings you can use .localeCompare or the signs '<' and '>'
//  localeCompare has more options (e.g. can compare with case insensitive)


