// 6kyu
// https://www.codewars.com/kata/54e6533c92449cc251001667

// Implement the function unique_in_order which takes as argument
// a sequence and returns a list of items without
// any elements with the same value next to each other and
// preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


// my solution
var uniqueInOrder = function(iterable){
  let arraysOfRepeated = []
  let indexAux = -1
  let previousAux

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === previousAux) {
      arraysOfRepeated[indexAux].push(iterable[i])
    } else {
      indexAux++
      arraysOfRepeated[indexAux] = [iterable[i]]
    }
    previousAux = iterable[i]
  }

  return arraysOfRepeated.map(array => array[0])
}

// other solution
function uniqueInOrder(it) {
  var result = []
  var last

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }

  return result
}