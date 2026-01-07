// 6kyu
// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014

// Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

// If the second string isn't a valid rotation of the first string, the method returns -1.
// Examples:
// "coffee", "eecoff" => 2
// "eecoff", "coffee" => 4
// "moose", "Moose" => -1
// "isn't", "'tisn" => 2
// "Esham", "Esham" => 0
// "dog", "god" => -1

// my solution
function shiftedDiff(first, second) {
  if (first === second) {
    return 0
  }

  if (first.length !== second.length) {
    return -1
  }

  const shifts = first.split("").map((_char, index) => {
    return `${first.slice(index)}${first.slice(0, index)}`
  })

  const foundIndex = shifts.findIndex((shift) => shift === second)

  if (foundIndex === -1) {
    return foundIndex
  }

  return shifts.length - shifts.findIndex((shift) => shift === second)
}

console.log(shiftedDiff("coffee", "eecoff")) // 2
console.log(shiftedDiff("Moose", "moose")) // -1
console.log(shiftedDiff("isn't", "'tisn")) // 2
console.log(shiftedDiff("Esham", "Esham")) // 0
console.log(shiftedDiff(" ", " ")) // 0
console.log(shiftedDiff("hoop", "pooh")) // -1
console.log(shiftedDiff("  ", " ")) // -1
console.log(shiftedDiff("eecoff", "coffee")) // 4

// to remember

// other solution from the internet
function shiftedDiff2(first, second) {
  if (first.length !== second.length) return -1
  return (second + second).indexOf(first)
}

console.log(shiftedDiff2("coffee", "eecoff")) // 2
console.log(shiftedDiff2("Moose", "moose")) // -1
console.log(shiftedDiff2("isn't", "'tisn")) // 2
console.log(shiftedDiff2("Esham", "Esham")) // 0
console.log(shiftedDiff2(" ", " ")) // 0
console.log(shiftedDiff2("hoop", "pooh")) // -1
console.log(shiftedDiff2("  ", " ")) // -1
console.log(shiftedDiff2("eecoff", "coffee")) // 4
