// 6kyu
// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

// The input is a string str of digits.
// Cut the string into chunks (a chunk here is a substring of the initial string) of size sz
//  ignore the last chunk if its size is less than sz

// If the sum of a chunk's digits is divisible by 2, reverse that chunk
//  otherwise rotate it to the left by one position
// Put together these modified chunks and return the result as a string.

// if sz is <= 0 or if str == "" return ""
// if sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

// Examples:
// ("123456987654", 6) --> "234561876549"
// ("123456987653", 6) --> "234561356789"
// ("66443875", 4) --> "44668753"
// ("66443875", 8) --> "64438756"
// ("664438769", 8) --> "67834466"
// ("123456779", 8) --> "23456771"
// ("", 8) --> ""
// ("123456779", 0) --> ""
// ("563000655734469485", 4) --> "0365065073456944"

// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

// my solution
function revrot(string, size) {
  if (size <= 0 || string.length === 0 || size > string.length) {
    return ""
  }

  const chunks = []
  let chunk = ""
  const response = []

  for (let i = 0; i < string.length; i += size) {
    chunk = string.slice(i, i + size)
    if (chunk.length === size) {
      chunks.push(chunk)
    }
  }

  for (let i = 0; i < chunks.length; i++) {
    chunk = chunks[i]
    if (chunk.split("").reduce((acc, cur) => acc + Number(cur), 0) % 2 === 0) {
      response.push(chunk.split("").reverse().join(""))
    } else {
      response.push(chunk.slice(1, chunk.length) + chunk.slice(0, 1))
    }
  }

  return response.join("")
}

console.log(revrot("123456987654", 6)) // "234561876549"
console.log(revrot("733049910872815764", 5)) // "330479108928157"
console.log(revrot("1234", 0)) // ""
console.log(revrot("", 0)) // ""
console.log(revrot("1234", 5)) // ""

// to remember

// other solution from the internet
