// 6kyu
// https://www.codewars.com/kata/title-case

// A string is considered to be in title case if each word in the string is either
// (a) capitalised (that is, only the first letter of the word is in upper case) or
// (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case
// given an optional list of exceptions (minor words).
// The list of minor words will be given as a string with each word separated by a space.
// Your function should ignore the case of the minor words string
//   it should behave in the same way even if the case of the minor word string is changed.

// Arguments
// First argument (required)
//    the original string to be converted
// Second argument (optional)
//    space-delimited list of minor words that must always be lowercase except for the first word in the string
//    the JavaScript/CoffeeScript tests will pass undefined when this argument is unused

// my solution
function titleCase(title, minorWords) {
  if (title === "") {
    return ""
  }

  const wordsToTitleCase = title.split(" ")

  let word = wordsToTitleCase[0]

  let response = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()

  if (minorWords && minorWords.length) {
    minorWords = minorWords.split(" ").map((w) => w.toLowerCase())
  }

  for (let i = 1; i < wordsToTitleCase.length; i++) {
    word = wordsToTitleCase[i]

    if (minorWords && minorWords.includes(word.toLowerCase())) {
      response = `${response} ${word.toLowerCase()}`
    } else {
      response = `${response} ${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`
    }
  }

  return response
}

console.log(titleCase("")) // ''
console.log(titleCase("in")) // 'In'
console.log(titleCase("a clash of KINGS", "a an the of")) // 'A Clash of Kings'
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")) // 'The Wind in the Willows'
console.log(titleCase("the quick brown fox")) // 'The Quick Brown Fox'

// to remember

// other solution from the internet
