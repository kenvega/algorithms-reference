// 6kyu
// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

// You are given a secret message you need to decipher
// Here are the things you need to know to decipher it:

// For each word:
// - the second and the last letter is switched (e.g. Hello becomes Holle)
// - the first letter is replaced by its character code (e.g. H becomes 72)
// - there are no special characters used, only letters and spaces
// - words are separated by a single space
// - there are no leading or trailing spaces

// Examples
// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'

// my solution
function decipherThis(string) {
  let words = string.split(" ")

  words = words.map((word) => {
    const number = parseInt(word)
    const restLetters = word.slice(number.toString().length)
    let newWord = String.fromCharCode(number) + restLetters
    if (newWord.length < 3) {
      return newWord
    }
    newWord =
      newWord.slice(0, 1) +
      newWord[newWord.length - 1] +
      newWord.slice(2, newWord.length - 1) +
      newWord.slice(1, 2)
    return newWord
  })

  return words.join(" ")
}

console.log(decipherThis("72olle 103doo 100ya")) // "Hello good day"
console.log(decipherThis("82yade 115te 103o")) // "Ready set go"
console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
) // "Have a go at this and see how you do"
console.log(decipherThis("65 119esi 111dl 111lw 108dvei 105n 97n 111ka")) // "A wise old owl lived in an oak"
console.log(decipherThis("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp")) // "The more he saw the less he spoke"
console.log(decipherThis("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare")) // "The less he spoke the more he heard"
console.log(
  decipherThis("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri")
) // "Why can we not all be like that wise old bird"
console.log(decipherThis("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple")) // "Thank you Piotr for all your help"

// to remember
//  you can use parseInt in a string like '123abc' to get 123 out of it (works only when number is at the start)
//  you go from character 'a' to number like 97 with 'a'.charCodeAt()
//  you go from number like 97 to a character like 'a' with String.fromCharCode(97)

// other solution from the internet
const decipherThis2 = (text) => {
  return text
    .split(" ")
    .map((e) => {
      const num = parseFloat(e) || ""
      const word = e.split(num)[1]

      if (word.length === 1) {
        return String.fromCharCode(num) + word
      }

      return (
        String.fromCharCode(num) +
        word.slice(-1) +
        word.slice(1, -1) +
        word.slice(0, 1)
      )
    })
    .join(" ")
}

console.log(decipherThis2("72olle 103doo 100ya")) // "Hello good day"
console.log(decipherThis2("82yade 115te 103o")) // "Ready set go"
