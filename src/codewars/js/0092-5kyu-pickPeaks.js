// 5kyu
// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

// write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array

// example
//   the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// the output will be returned as an object with two properties: pos and peaks
//   both of these properties should be arrays

// if there is no peak in the given array
//   then the output should be { pos: [], peaks: [] }

// example
//   pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])
//     should return { pos: [3, 7], peaks: [6, 3] }

// all input arrays will be valid integer arrays (although it could still be empty)
//   so you won't need to validate the input

// the first and last elements of the array will not be considered as peaks
//  in the context of a mathematical function, we don't know what is after and before
//    therefore, we don't know if it is a peak or not

// also, beware of plateaus:
//   [1, 2, 2, 2, 1] has a peak
// while
//   [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not

// in case of a plateau-peak
//   please only return the position and value of the beginning of the plateau

// example:
//  pickPeaks([1, 2, 2, 2, 1])
//    returns { pos: [1], peaks: [2] }

// my logic
// chequea cada numero
// checa si el anterior es menor
// si sí, entonces checa si el siguiente es menor tambien
// si ambos casos se dan entonces estas en un peak no?

// pero puede ser que tengas un plateu-peak
// es el caso en el que el sgte numero es igual al current
// en ese caso tienes que seguir buscando el siguiente numero hasta encontrar uno diferente
// y luego evaluar si ese numero es menor
// si es menor entonces estabas en un plateu-peak

// my solution
function pickPeaks(arr) {
  if (arr.length <= 2) {
    return { pos: [], peaks: [] }
  }

  const response = { pos: [], peaks: [] }

  let previous = arr[0]
  let current = arr[1]
  let next = arr[2]

  let farNext = 0
  let j = 0

  for (let i = 1; i < arr.length - 1; i++) {
    previous = arr[i - 1]
    current = arr[i]
    next = arr[i + 1]

    if (previous < current) {
      if (current > next) {
        response.pos.push(i)
        response.peaks.push(current)
      }
      if (current === next) {
        farNext = arr[i + 2 + j]
        while (current === farNext && i + 2 + j < arr.length) {
          j++
          farNext = arr[i + 2 + j]
        }
        if (current > farNext) {
          response.pos.push(i)
          response.peaks.push(current)
        }
        i += j
        j = 0
      }
    }
  }

  return response
}

console.log(pickPeaks([])) // { pos:[], peaks:[] })
console.log(pickPeaks([1, 1, 1, 1])) // { pos:[],peaks:[] })
console.log(pickPeaks([0, 1, 2, 5, 1, 0])) // { pos:[3], peaks:[5] }
console.log(pickPeaks([1, 2, 2, 2, 1])) // { pos:[1], peaks:[2] }
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])) // { pos:[3,7], peaks:[6,3] })
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1])) // { pos:[2], peaks:[3] })

console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1])) // { pos:[3,7], peaks:[6,3] })
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1])) // { pos:[3,7,10], peaks:[6,3,2] })
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1])) // { pos:[2,4], peaks:[3,2] })
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2])) // { pos:[2], peaks:[3] })
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6])) // { pos:[2], peaks:[3] })
// console.log(
//   pickPeaks([
//     1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
//   ]),
// ) // { pos:[2,7,14,20], peaks:[5,6,5,5] })

// my solution

// to remember

// other solution from the internet
