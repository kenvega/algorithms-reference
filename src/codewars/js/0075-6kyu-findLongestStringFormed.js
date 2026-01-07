// 6kyu
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/javascript

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// 'n' being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// my solution
function longestConsec(strarr, k) {
  let formedStrings = []
  const allStrings = []

  for (let i = 0; i < strarr.length - k + 1; i++) {
    for (let j = i; j < k + i; j++) {
      formedStrings.push(strarr[j])
    }
    allStrings.push(formedStrings)
    formedStrings = []
  }

  let maxLength = 0
  let maxString = ""
  let aux

  for (let i = 0; i < allStrings.length; i++) {
    aux = allStrings[i].join("")
    if (aux.length > maxLength) {
      maxLength = aux.length
      maxString = aux
    }
  }

  return maxString
}

console.log(
  longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2),
) // folingtrashy

console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1,
  ),
) // oocccffuucccjjjkkkjyyyeehh

// to remember

// other solution from the internet
