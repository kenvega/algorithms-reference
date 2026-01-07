// 5kyu
// https://www.codewars.com/kata/52756e5ad454534f220001ef

// Write a function LCS that accepts two sequences
//  and returns the longest subsequence common to the passed in sequences.

// Subsequence
//  is different from a substring
//  the terms of a subsequence need not be consecutive terms of the original sequence ("ac" on "abc" from example below)

// Example subsequence
//  Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

// examples
//  LCS( "abcdef" , "abc" ) => returns "abc"
//  LCS( "abcdef" , "acf" ) => returns "acf"
//  LCS( "132535365" , "123456789" ) => returns "12356"

// Notes
//  Both arguments will be strings
//  Return value must be a string
//  Return an empty string if there exists no common subsequence
//  Both arguments will have one or more characters
//  All tests will only have a single longest common subsequence
//   Don't worry about cases such as LCS( "1234", "3412" )
//    which would have two possible longest common subsequences: "12" and "34"

// my solution

// Agarras la primera letra del primer string (A)
// luego la encuentras en el segundo string
// Si la encuentras, entonces eso ya es la primera letra del primer subconjunto de Common Subsequences
// Luego lo que pasa es la siguiente.
// Vas a ver la siguiente letra del primer string (N)
//  y buscas si es que está a partir del índex de la primera letra que encontraste
// Si no la encuentras
//   AUN no has acabado de conseguir el mayor subsequence que puede empezar con la primera letra del 1er string (A)
//   pasas a la siguiente letra del primer string (O)
// Si la encuentras en lo que quedaba, entonces lo pones para el Common Subsequence.
// Sino, pasas a la siguiente. T
// Y luego así lo buscas desde ahí.
// Si este, por ejemplo, si la encontraste, entonces pasas a la siguiente. Luego buscas H. Y H tendrías que encontrarla desde el nuevo índex que analizas a T. Y si la encuentras, entonces pasas. T. Y H tendrías que encontrarla desde el primer string. T. Y listo
// hasta que ya no quedan letras para el primer string

// luego de eso recien ya puedes decir que encontraste el substring mas largo que aparezca para la PRIMERA LETRA

function LCS(string1, string2) {
  if (
    string1.length === 1 &&
    string2.length === 1 &&
    string1[0] === string2[0]
  ) {
    return string1[0]
  }

  const commonSubsequences = []
  let currentSubsequence = ""
  let char1 = ""
  let char2 = ""

  let startIndex = 0

  const originalString1 = string1
  let originalString2 = string2

  while (string1.length > 1) {
    for (let i = 0; i < string1.length; i++) {
      char1 = string1[i]

      for (let j = startIndex; j < string2.length; j++) {
        char2 = string2[j]

        if (char1 === char2) {
          currentSubsequence += char2
          startIndex = j + 1
          break
        }
      }
    }

    string1 = string1.slice(1, string1.length)

    commonSubsequences.push(currentSubsequence)
    currentSubsequence = ""

    startIndex = 0
  }

  while (originalString2.length > 1) {
    for (let i = 0; i < originalString2.length; i++) {
      char1 = originalString2[i]

      for (let j = startIndex; j < originalString1.length; j++) {
        char2 = originalString1[j]

        if (char1 === char2) {
          currentSubsequence += char2
          startIndex = j + 1
          break
        }
      }
    }

    originalString2 = originalString2.slice(1, originalString2.length)

    commonSubsequences.push(currentSubsequence)
    currentSubsequence = ""

    startIndex = 0
  }

  if (commonSubsequences.length === 0) {
    return ""
  }

  return commonSubsequences.sort((a, b) => b.length - a.length)[0]
}

console.log(LCS("anothertest", "notatest")) // "nottest"
console.log(LCS("notatest", "anothertest")) // "nottest"
console.log(LCS("finaltest", "zzzfinallyzzz")) // "final"
console.log(LCS("zzzfinallyzzz", "finaltest")) // "final"
console.log(LCS("132535365", "123456789")) // "12356"
console.log(LCS("123456789", "132535365")) // "12356"
console.log(LCS("nothardlythefinaltest", "zzzfinallyzzz")) // "final"
console.log(LCS("a", "b")) // ""
console.log(LCS("a", "a")) // "a"
console.log(LCS("abcdef", "abc")) // "abc"
console.log(LCS("abcdef", "acf")) // "acf"

// console.log(LCS("abcdnopq", "apcdnobq")) // "acdnoq"
// console.log(LCS("apcdnobq", "abcdnopq")) // "acdnoq"

// to remember

// other solution from the internet
function LCS2(xstr, ystr) {
  if (xstr === "" || ystr === "") {
    return ""
  }

  const xp = xstr[0]
  const xrest = xstr.slice(1, xstr.length)
  const yp = ystr[0]
  const yrest = ystr.slice(1, ystr.length)

  if (xp === yp) {
    return xp + LCS2(xrest, yrest)
  }

  const lcs1 = LCS2(xstr, yrest)
  const lcs2 = LCS2(xrest, ystr)

  return lcs1.length > lcs2.length ? lcs1 : lcs2
}

console.log(LCS2("anothertest", "notatest")) // "nottest"
console.log(LCS2("notatest", "anothertest")) // "nottest"
console.log(LCS2("finaltest", "zzzfinallyzzz")) // "final"
console.log(LCS2("zzzfinallyzzz", "finaltest")) // "final"
console.log(LCS2("132535365", "123456789")) // "12356"
console.log(LCS2("123456789", "132535365")) // "12356"
console.log(LCS2("a", "b")) // ""
console.log(LCS2("a", "a")) // "a"
console.log(LCS2("abcdef", "abc")) // "abc"
console.log(LCS2("abcdef", "acf")) // "acf"
console.log(LCS2("abcdnopq", "apcdnobq")) // "acdnoq"
