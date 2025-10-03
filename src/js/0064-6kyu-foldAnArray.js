// 6kyu
// https://www.codewars.com/kata/57ea70aa5500adfe8a000110/javascript

// Write a method that folds a given array of integers by the middle x-times.
// An example says more than thousand words:
// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\          
//                     4/            4|          4\      
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*


// Fold 2-times:
// [1,2,3,4,5] -> [9,6]
// As you see, if the count of numbers is odd, the middle number will stay.
// Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null.
// The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.
// If an array with one element is folded, it stays as the same array.

// The input array should not be modified!

// my solution
function foldArray(array, runs) {
  let input = [...array]
  let output = []
  let isInputLengthEven
  let current
  let opposite

  while(runs > 0) {
    output = []
    isInputLengthEven = input.length % 2 === 0

    for (let i = 0; i < input.length / 2; i++) {
      current = input[i]
      opposite = input[input.length - 1 - i]

      if (isInputLengthEven) {
        output.push(current + opposite)
      } else {
        if (i === Math.ceil(input.length / 2) - 1) {
          output.push(current)
        } else {
          output.push(current + opposite)
        }
      }
    }

    input = [...output]
    runs--
  }

  return output;
}

const input = [ 1, 2, 3, 4, 5 ];

console.log('foldArray(input, 1): ', foldArray(input, 1)); // [ 6, 6, 3 ]
console.log('foldArray(input, 2): ', foldArray(input, 2)); // [ 9, 6 ]
console.log('foldArray(input, 3): ', foldArray(input, 3)); // [ 15 ]

// to remember
//   you can make the functions much shorter with recursion


// other solution using recursion
function foldArray(array, runs) {
  if (!runs) return array;

  var result = [];
  // new Array
  for (var i = 0; i < Math.ceil(array.length / 2); i++) {
    result[i] = array.length -i - 1 === i ? array[i] : array[i] + array[array.length - i - 1];
  }

  return foldArray(result, runs - 1);
}


// other readable solution
function foldArray (array, runs) {
    let arrayToFold = Array.from(array);
    while (runs > 0) {
        let resultArray = [];
        while (arrayToFold.length > 1) {
            let firstElement = arrayToFold.shift();
            let lastElement = arrayToFold.pop();
            resultArray.push(firstElement + lastElement);
        }
        arrayToFold = [...resultArray, ...arrayToFold];
        runs--;
    }
    return arrayToFold;
};
