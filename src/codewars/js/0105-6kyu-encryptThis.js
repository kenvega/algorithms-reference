// 6kyu
// https://www.codewars.com/kata/5848565e273af816fb000449

// you want to create secret messages. here are the conditions:

// your message is a string containing space separated words.
// you need to encrypt each word in the message using the following rules:
//  the first letter must be converted to its ASCII code.
//  the second letter must be switched with the last letter

// Note: There are no special characters in the input

// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

// my solution
function encryptThis(text) {
  const words = text.split(" ")

  return words
    .map((word) => {
      if (word.length === 1) {
        return word[0].charCodeAt()
      }
      if (word.length === 2) {
        return word[0].charCodeAt() + word[1]
      }
      return (
        word[0].charCodeAt() +
        word[word.length - 1] +
        word.slice(2, word.length - 1) +
        word[1]
      )
    })
    .join(" ")
}

console.log(encryptThis("A")) // "65"
console.log(encryptThis("Hello")) // "72olle"
console.log(encryptThis("hello world")) // "104olle 119drlo"
console.log(encryptThis("A wise old owl lived in an oak")) // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
console.log(encryptThis("The more he saw the less he spoke")) // "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
console.log(encryptThis("The less he spoke the more he heard")) // "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
console.log(encryptThis("Why can we not all be like that wise old bird")) // "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
console.log(encryptThis("Thank you Piotr for all your help")) // "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"

// to remember
//  slice can also get the last part of a string by using negative numbers (not the only way but it can)
//    const str = "The quick brown fox jumps over the lazy dog.";
//    console.log(str.slice(-4)); // "dog."
//    console.log(str.slice(-9, -5)); // "lazy"

// other solution from the internet
