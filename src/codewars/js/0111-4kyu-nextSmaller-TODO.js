// 4kyu
// https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript

// Write a function that takes a positive integer
// and returns the next smaller positive integer containing the same digits

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017

// Return -1 when there is no smaller number that contains the same digits
// Also return -1 when the next smaller number with the same digits would require the leading digit to be zero

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

// my solution
function nextSmaller(number) {
  // So what we should do is just convert it to string, then split the characters,
  // then compare some of the characters, for example starting from right to left.
  // and say okay if this character is lower than the other character then you just
  // need to change the order of those and that will be the new number.

  const numberString = number.toString()
  const characters = numberString.split("")
  console.log(characters)

  let previous = characters[0]
  let wentUp = false
  let neverWentDownAgain = false
  let current
  let indexWentUp = 0
  let indexLastTimeWentDown = 0

  for (let i = 0; i < characters.length; i++) {
    current = characters[i]

    console.log(previous)
    console.log(current)

    if (current > previous && !wentUp && i === characters.length - 1) {
      // if it only went up on the last digit
      // then insert the last digit in the second index
      return Number(
        numberString.slice(0, 1) +
          numberString[numberString.length - 1] +
          numberString.slice(1, numberString.length - 1)
      )
    }

    if (current < previous && neverWentDownAgain === false) {
      indexLastTimeWentDown = i
    }

    if (current > previous) {
      wentUp = true
      neverWentDownAgain = true
      indexWentUp = i
    }

    if (current < previous && wentUp === true) {
      neverWentDownAgain = false
    }

    previous = current
  }

  if (wentUp && neverWentDownAgain) {
    // if the number starts goign down and then goes up and then never stops
    // then you just put the last character of that at the last time it went down
    return Number(
      numberString.slice(0, indexWentUp - 1) +
        numberString[numberString.length - 1] +
        numberString.slice(indexWentUp - 1, numberString.length - 1)
    )
  }

  if (!wentUp) {
    // if the number always go down in value, just change the last two characters
    return Number(
      numberString.slice(0, numberString.length - 2) +
        numberString[numberString.length - 1] +
        numberString[numberString.length - 2]
    )
  }

  // If the numbers start to grow up after going down, after always going down, then something has to change there as well.

  // 4312 -> 4231
  // 4123 -> 3421

  return 0
}

console.log(nextSmaller(543)) // 534
console.log(nextSmaller(531)) // 513
console.log(nextSmaller(21)) // 12
console.log(nextSmaller(321)) // 312

// console.log(nextSmaller(231)) // 213

console.log(nextSmaller(4312)) // 4231
console.log(nextSmaller(4231)) // 4213
console.log(nextSmaller(4213)) // 4132
console.log(nextSmaller(4132)) // 4123

// console.log(nextSmaller(4123)) // 3421
// console.log(nextSmaller(3421)) // 3412
// console.log(nextSmaller(3412)) // 3241

// console.log(nextSmaller(312)) // 231
// console.log(nextSmaller(534)) // 453
// console.log(nextSmaller(907)) // 790

// console.log(nextSmaller(135)) // -1
// console.log(nextSmaller(2071)) // 2017
// console.log(nextSmaller(1027)) // -1
// console.log(nextSmaller(414)) // 144

// console.log(nextSmaller(123456798)) // 123456789
// console.log(nextSmaller(123456789)) // -1
// console.log(nextSmaller(1234567908)) // 1234567890

// to remember

// other solution from the internet

function nextSmaller2(n) {
  if (!Number.isInteger(n) || n <= 0) return -1

  const digits = String(n)
    .split("")
    .map((d) => Number(d))
  const len = digits.length

  let i = len - 2
  while (i >= 0 && digits[i] <= digits[i + 1]) i--
  if (i < 0) return -1

  let j = -1
  let best = -1
  for (let k = i + 1; k < len; k++) {
    if (digits[k] < digits[i] && digits[k] > best) {
      best = digits[k]
      j = k
    }
  }

  ;[digits[i], digits[j]] = [digits[j], digits[i]]

  const left = digits.slice(0, i + 1)
  const right = digits.slice(i + 1).sort((a, b) => b - a)
  const resultDigits = left.concat(right)

  if (resultDigits[0] === 0) return -1

  return Number(resultDigits.join(""))
}
