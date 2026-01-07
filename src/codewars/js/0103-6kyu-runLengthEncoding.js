// 6kyu
// https://www.codewars.com/kata/546dba39fa8da224e8000467

// write a run-length encoding
// for a given string
//  return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ],
//  such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings

// Your run-length encoding should be minimal
//  ie. for all i the values si and si+1 should differ

// examples
// runLengthEncoding("hello world!")
//  //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]

// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]

// my solution
function runLengthEncoding(string) {
  const response = []
  let char = ""
  let previous = string[0]
  let count = 1

  for (let i = 1; i < string.length; i++) {
    char = string[i]

    if (char === previous) {
      count += 1
    } else {
      response.push([count, previous])
      count = 1
    }

    if (i === string.length - 1) {
      response.push([count, char])
    }

    previous = char
  }

  return response
}

console.log(runLengthEncoding(""))
// []
console.log(runLengthEncoding("abc"))
// [
//   [1, "a"],
//   [1, "b"],
//   [1, "c"]
// ]
console.log(runLengthEncoding("aab"))
// [
//   [2, "a"],
//   [1, "b"]
// ]
console.log(runLengthEncoding("aaabb"))
// [
//   [3, "a"],
//   [2, "b"]
// ]
console.log(runLengthEncoding("hello world!"))
// [
//   [1, "h"],
//   [1, "e"],
//   [2, "l"],
//   [1, "o"],
//   [1, " "],
//   [1, "w"],
//   [1, "o"],
//   [1, "r"],
//   [1, "l"],
//   [1, "d"],
//   [1, "!"]
// ])
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"))
// [
//   [34, "a"],
//   [3, "b"]
// ])
console.log(
  runLengthEncoding(
    "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"
  )
)
//   [
//     [12, "W"],
//     [1, "B"],
//     [12, "W"],
//     [3, "B"],
//     [24, "W"],
//     [1, "B"],
//     [14, "W"]
//   ]
// )

// to remember

// other solution from the internet
function runLengthEncoding2(str) {
  const arr = []
  let counter = 1

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++
    } else {
      arr.push([counter, str[i]])
      counter = 1
    }
  }

  return arr
}
