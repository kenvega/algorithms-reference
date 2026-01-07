// 6kyu
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/javascript

// Task:
// Create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return
//  an array of strings where an uppercase letter is a person standing up.

// Rules:
// 1. The input string will always consist of lowercase letters and spaces,
//      but may be empty, in which case you must return an empty array.
//
// 2. If the character in the string is whitespace
//      then pass over it as if it was an empty seat

// Examples
// "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// " s p a c e s " => [ " S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]

// my solution
function wave(string) {
  const response = []
  let aux = ""
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      continue
    }
    aux =
      string.slice(0, i) +
      string[i].toUpperCase() +
      string.slice(i + 1, string.length)
    response.push(aux)
  }
  return response
}

console.log(wave("hello")) // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("codewars")) // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
console.log(wave("two words")) // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
console.log(wave(" gap ")) // [" Gap ", " gAp ", " gaP "]

// to remember
//  slice has a very intuitive api to use:
//    string.slice(startIndexInclusive, finishIndexInclusive)

// other solution from the internet
