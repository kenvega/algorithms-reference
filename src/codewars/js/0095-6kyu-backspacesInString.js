// 6kyu
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

// Description:

// Assume "#" is like a backspace in string
// This means that string "a#bc#d" actually is "bd"
// Your task is to process a string with "#" symbols

// Examples

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// my solution
function cleanString(string) {
  let char = ""
  let response = ""
  for (let i = 0; i < string.length; i++) {
    char = string[i]

    if (char === "#") {
      response = response.slice(0, response.length - 1)
    } else {
      response = response.concat(char)
    }
  }
  return response
}

console.log(cleanString("a#bc#d")) // "bd"
console.log(cleanString("abc#d##c")) // "ac"
console.log(cleanString("abc####d##c#")) //  ""

console.log(cleanString("abc##d######")) // ""
console.log(cleanString("#######")) // ""
console.log(cleanString("")) // ""

// to remember

// other solution from the internet
function cleanString2(s) {
  const result = []
  for (const c of s) {
    if (c === "#") {
      result.pop()
    } else {
      result.push(c)
    }
  }
  return result.join("")
}
