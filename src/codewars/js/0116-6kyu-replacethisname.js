// 6kyu
// https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061

// Write a function that returns the count of characters that have to be removed
// in order to get a string with no consecutive repeats

// Note: This includes any characters

// Examples
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1

// my solution
function countRepeats(string) {
  let current = ""
  let next = ""
  let totalCount = 0
  let count = 0

  for (let i = 0; i < string.length; i++) {
    current = string[i]
    next = string[i + 1]

    while (current === next) {
      count++
      next = string[i + 1 + count]
    }

    totalCount += count
    i += count
    count = 0
  }

  return totalCount
}

console.log(countRepeats("abbbbc")) // 3
console.log(countRepeats("abbcca")) // 2
console.log(countRepeats("ab cca")) // 1
console.log(countRepeats("AABCCD")) // 2
console.log(countRepeats("AABCCDA")) // 2
console.log(countRepeats("AaBBCCC")) // 3

// to remember

// other solution from the internet
function countRepeats2(str) {
  let count = 0

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      count++
    }
  }

  return count
}

console.log(countRepeats2("abbbbc")) // 3
console.log(countRepeats2("abbcca")) // 2
console.log(countRepeats2("ab cca")) // 1
console.log(countRepeats2("AABCCD")) // 2
console.log(countRepeats2("AABCCDA")) // 2
console.log(countRepeats2("AaBBCCC")) // 3
