// 6kyu
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript

// Count the number of Duplicates
// Write a function that will return the count of
//   distinct case-insensitive alphabetic characters
//   and numeric digits that occur more than once in the input string
// The input string can be assumed to contain
//   only alphabets (both uppercase and lowercase) and numeric digits

// Examples
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// my solution
function duplicateCount(text) {
  let char = ""
  const counts = {}

  for (let i = 0; i < text.length; i++) {
    char = text[i].toLowerCase()
    if (!counts[char]) {
      counts[char] = 1
    } else {
      counts[char] += 1
    }
  }

  return Object.entries(counts).filter((element) => {
    if (element[1] > 1) {
      return true
    }
  }).length
}

console.log(duplicateCount("")) // 0
console.log(duplicateCount("abcde")) // 0
console.log(duplicateCount("aabbcde")) // 2
console.log(duplicateCount("aabBcde")) // 2, "should ignore case"
console.log(duplicateCount("indivisibility")) // 1
console.log(duplicateCount("Indivisibility")) // 1
console.log(duplicateCount("Indivisibilities")) // 2 - "characters may not be adjacent"

// to remember

// other solution from the internet (coding garden #11) (does it in one single loop)
function duplicateCount2(text) {
  const counts = {}
  const duplicates = {}
  let numDuplicates = 0

  for (let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase()
    counts[letter] = counts[letter] || 0
    counts[letter]++

    if (counts[letter] > 1 && !duplicates[letter]) {
      numDuplicates++
      duplicates[letter] = true
    }
  }

  return numDuplicates
}

console.log(duplicateCount2("")) // 0
console.log(duplicateCount2("abcde")) // 0
console.log(duplicateCount2("aabbcde")) // 2
console.log(duplicateCount2("aabBcde")) // 2, "should ignore case"
console.log(duplicateCount2("indivisibility")) // 1
console.log(duplicateCount2("Indivisibility")) // 1
console.log(duplicateCount2("Indivisibilities")) // 2 - "characters may not be adjacent"
