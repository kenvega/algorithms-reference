// 4kyu
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

// Given an n x n array
//  return the array elements arranged from outermost elements to the middle element
//  traveling clockwise

// array = [[1, 2],
//          [4, 5]]
// snail(array) =>  [1, 2, 5, 4]

// array = [[1, 2, 3],
//          [4, 5, 6],
//          [7, 8, 9]]
// snail(array) => [1, 2, 3, 6, 9, 8, 7, 4, 5]

// array = [[1 , 2 , 3 , 4 ],
//          [5 , 6 , 7 , 8 ],
//          [9 , 10, 11, 12],
//          [13, 14, 15, 16]]
// snail(array) => [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

// array = [[1,  2,  3,  4,  5 ],
//          [6,  7,  8,  9,  10],
//          [11, 12, 13, 14, 15],
//          [16, 17, 18, 19, 20],
//          [21, 22, 23, 24, 25]]
// snail(array) => [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

// array = [[1,  2,  3,  4,  5,  6 ],
//          [7,  8,  9,  10, 11, 12],
//          [13, 14, 15, 16, 17, 18],
//          [19, 20, 21, 22, 23, 24],
//          [25, 26, 27, 28, 29, 30],
//          [31, 32, 33, 34, 35, 36]]
// snail(array) => [1, 2, 3, 4, 5, 6, 12, 18, 24, 30, 36, 35, 34, 33, 32, 31, 25, 19, 13, 7, 8, 9, 10, 11, 17, 23, 29, 28, 27, 26, 20, 14, 15, 16, 22, 21]

// array = [[1,  2,  3,  4,  5,  6 ],
//          [20, 21, 22, 23, 24, 7 ],
//          [19, 32, 33, 34, 25, 8 ],
//          [18, 31, 36, 35, 26, 9 ],
//          [17, 30, 29, 28, 27, 10],
//          [16, 15, 14, 13, 12, 11]]
// snail(array) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

// my solution
function snail(multiarray) {
  if (multiarray[0].length === 0) {
    return []
  }

  const response = []

  while (multiarray.length > 2) {
    // extract first row
    response.push(...multiarray.shift())

    // extract last ones from middle arrays
    for (let i = 1; i <= multiarray.length - 1; i++) {
      const array = multiarray[i - 1]
      response.push(array.pop())
    }

    // extract last row
    response.push(...multiarray.pop().reverse())

    // extract first ones from middle arrays
    for (let i = multiarray.length; i >= 1; i--) {
      const array = multiarray[i - 1]
      response.push(array.shift())
    }
  }

  if (multiarray.length === 1) {
    response.push(multiarray[0][0])
  }
  if (multiarray.length === 2) {
    response.push(...multiarray.shift())
    response.push(...multiarray.pop().reverse())
  }

  return response
}

console.log(
  snail([
    [1, 2],
    [4, 5],
  ]),
) // [1, 2, 5, 4]

// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
// ) // [1, 2, 3, 6, 9, 8, 7, 4, 5]

// console.log(
//   snail([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25],
//   ]),
// ) // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

// console.log(
//   snail([
//     [1, 2, 3, 4, 5, 6],
//     [7, 8, 9, 10, 11, 12],
//     [13, 14, 15, 16, 17, 18],
//     [19, 20, 21, 22, 23, 24],
//     [25, 26, 27, 28, 29, 30],
//     [31, 32, 33, 34, 35, 36],
//   ]),
// ) // [1, 2, 3, 4, 5, 6, 12, 18, 24, 30, 36, 35, 34, 33, 32, 31, 25, 19, 13, 7, 8, 9, 10, 11, 17, 23, 29, 28, 27, 26, 20, 14, 15, 16, 22, 21]

// console.log(
//   snail([
//     [1, 2, 3, 4, 5, 6],
//     [20, 21, 22, 23, 24, 7],
//     [19, 32, 33, 34, 25, 8],
//     [18, 31, 36, 35, 26, 9],
//     [17, 30, 29, 28, 27, 10],
//     [16, 15, 14, 13, 12, 11],
//   ]),
// ) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

// to remember

// other solution from the internet
