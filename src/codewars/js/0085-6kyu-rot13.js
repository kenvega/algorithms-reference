// 5kyu
// https://www.codewars.com/kata/52223df9e8f98c7aa7000062

// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.
// https://en.wikipedia.org/wiki/ROT13

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."
// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

// my solution
function rot13(str) {
  const firstPart = "abcdefghijklm"
  const secondPart = "nopqrstuvwxyz"

  let response = ""
  let char = ""

  for (let i = 0; i < str.length; i++) {
    char = str[i]
    if (firstPart.includes(char.toLowerCase())) {
      if (char === char.toLowerCase()) {
        response += secondPart[firstPart.indexOf(char)]
      } else {
        response +=
          secondPart[firstPart.indexOf(char.toLowerCase())].toUpperCase()
      }
    } else if (secondPart.includes(char.toLowerCase())) {
      if (char === char.toLowerCase()) {
        response += firstPart[secondPart.indexOf(char)]
      } else {
        response +=
          firstPart[secondPart.indexOf(char.toLowerCase())].toUpperCase()
      }
    } else {
      response += char
    }
  }

  return response
}

console.log(rot13("EBG13 rknzcyr.")) // "ROT13 example."
console.log(rot13("This is my first ROT13 excercise!")) // "Guvf vf zl svefg EBG13 rkprepvfr!"

// to remember

// other solution from the internet
