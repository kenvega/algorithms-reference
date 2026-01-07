// 6kyu
// https://www.codewars.com/kata/5375f921003bf62192000746

// my solution
function abbreviate(string) {
  if (string.length < 4) {
    return string
  }

  const words = []
  let word = ""
  const symbols = []

  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    const charNumber = char.charCodeAt()
    if (
      (charNumber >= 65 && charNumber <= 90) ||
      (charNumber >= 97 && charNumber <= 122)
    ) {
      word += char
      if (i === string.length - 1) {
        words.push(word)
      }
    } else {
      words.push(word)
      symbols.push(string[i])
      word = ""
    }
  }

  return words
    .map((word, index) => {
      if (word.length <= 3) {
        return `${word}${symbols[index] ? symbols[index] : ""}`
      }
      return `${word[0] + (word.length - 2).toString() + word.slice(-1)}${symbols[index] ? symbols[index] : ""}`
    })
    .join("")
}

console.log(abbreviate("")) // ""
console.log(abbreviate("Go")) // "Go"
console.log(abbreviate("accessibility")) // "a11y"
console.log(abbreviate("internationalization")) // "i18n"
console.log(abbreviate("elephant-rides are really fun!")) // e6t-r3s are r4y fun!
console.log(abbreviate(":;=;:")) // ":;=;:"
console.log(abbreviate("{Benxxdfwxtt Z}")) // "B9t"

// to remember

// other solution from the internet
