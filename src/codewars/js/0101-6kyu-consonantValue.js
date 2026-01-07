// 6kyu
// https://www.codewars.com/kata/59c633e7dcc4053512000073

// Given a lowercase string that has alphabetic characters only and no spaces
// return the highest value of consonant substrings
// Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiac", let's cross out the vowels. We get: "z - d - - c"

// "zodiac" -> 26
// The consonant substrings are: "z", "d" and "c"
// with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26

// "strength" -> 57
// The consonant substrings are: "str" and "ngth"
// with values "str" = 19 + 20 + 18 = 57  and  "ngth" = 14 + 7 + 20 + 8 = 49
// The highest is 57.

// my solution
function solve(string) {
  const substrings = []
  let aux = ""

  for (let i = 0; i < string.length; i++) {
    if (!"aeiou".includes(string[i])) {
      aux += string[i]
      if (i === string.length - 1) {
        substrings.push(aux)
      }
    } else {
      if (aux !== "") {
        substrings.push(aux)
      }
      aux = ""
    }
  }

  const values = substrings.map((substring) => {
    return substring
      .split("")
      .reduce((acc, cur) => acc + cur.charCodeAt() - 96, 0)
  })

  return Math.max(...values)
}

console.log(solve("zodiac")) // 26
console.log(solve("chruschtschov")) // 80
console.log(solve("khrushchev")) // 38
console.log(solve("strength")) // 57
console.log(solve("catchphrase")) // 73
console.log(solve("twelfthstreet")) // 103
console.log(solve("mischtschenkoana")) // 80
console.log(solve("az")) // 26

// to remember
//  Math.max(...array) -- used to automatically get the highest value of array
//  charCodeAt() -- to get from string 'a' to number 97 then following letters are 98, and so on
//  instead of doing something like
//   string[i] !== "a" && string[i] !== "e" && ... string[i] !== "u"
//  you can simply do
//   !'aeiou'.includes(string[i])

// other solution from the internet
//  is not needed to save substrings to solve the problem
//  because we need a max only we can just save the current max we've seen
function solve2(word) {
  const letters = "abcdefghijklmnopqrstuvwxyz"
  const vowels = "aeiou"
  let value = 0
  let max = 0

  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    if (vowels.includes(letter)) {
      value = 0
    } else {
      value += letters.indexOf(letter) + 1
      if (value > max) {
        max = value
      }
    }
  }

  return max
}

console.log(solve2("zodiac")) // 26
console.log(solve2("chruschtschov")) // 80
console.log(solve2("khrushchev")) // 38
console.log(solve2("strength")) // 57
console.log(solve2("catchphrase")) // 73
console.log(solve2("twelfthstreet")) // 103
console.log(solve2("mischtschenkoana")) // 80
console.log(solve2("az")) // 26
