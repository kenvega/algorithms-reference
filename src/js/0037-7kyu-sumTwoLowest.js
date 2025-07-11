// level 7kyu
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  let lowest = Infinity
  let secondLowest = Infinity

  numbers.forEach((number) => {
    if (number < secondLowest) {
      if (number < lowest) {
        secondLowest = lowest
        lowest = number
      } else {
        secondLowest = number
      }
    }
  })

  return lowest + secondLowest
}


// other solutions i found
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
