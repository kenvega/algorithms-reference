// level : 4kyu
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// my solution:
// if matrix is big enough, reduce it with a pattern (remove borders) while pushing to the solution
// else handle the smalls cases

const snail = multiArray => {
  let result = [];

  let iterationsNeeded = 1;
  const matrixLength = multiArray.length;

  if (matrixLength === 1) iterationsNeeded = 0;
  if (matrixLength > 2) {
    if (matrixLength % 2 === 1) iterationsNeeded = (matrixLength - 1) / 2;
    else iterationsNeeded = matrixLength / 2;
  }

  for (let i = 0; i < iterationsNeeded; i++) {
    const topElements = multiArray.splice(0, 1)[0];
    result = [...result, ...topElements];

    const rightElements = multiArray.map(array => array.splice(array.length - 1, 1)[0]);
    result = [...result, ...rightElements];

    const bottomElements = multiArray.splice(multiArray.length - 1, 1)[0].reverse();
    result = [...result, ...bottomElements];

    const leftElements = multiArray.map(array => array.splice(0, 1)[0]).reverse();
    result = [...result, ...leftElements];
  }

  if (matrixLength % 2 === 1) result = [...result, ...multiArray[0]];

  return result;
};

console.log(snail([[1]])); // [1]

console.log(snail([
  [1, 2],
  [4, 5],
])); // [1, 2, 4, 5]

console.log(snail([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])); // [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(snail([
  [1,  2,  3,  4,  5 ], // eslint-disable-line
  [6,  7,  8,  9,  10], // eslint-disable-line
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
])); // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

console.log(snail([
  [1,  2,  3,   4,  5, 6], // eslint-disable-line
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

// other solution from codewars
// same idea, but reduced usage
// it doesn't use splice, buy shift, concat, push and pop
// uses concat instead of spread operator

const snail2 = array => {
  let result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (let i = 0; i < array.length; i++) { result.push(array[i].pop()); }
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (let i = array.length - 1; i >= 0; i--) { result.push(array[i].shift()); }
  }
  return result;
};

console.log(snail2([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
