// 4kyu
// https://www.codewars.com/kata/55983863da40caa2c900004e/javascript

// Create a function that takes a positive integer
//  and returns the next bigger number
//  that can be formed by rearranging its digits

// For example:
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071

// If the digits can't be rearranged to form a bigger number, return -1
//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

// my solution
function nextBigger(number) {
  const charDigits = number.toString().split("")

  let canRearrange = false
  let currentDigit
  let nextDigit
  let previousDigit
  let rearrangeIndex
  let shouldChangeFirstTwo = false

  for (let i = 0; i < charDigits.length - 1; i++) {
    currentDigit = charDigits[i]
    nextDigit = charDigits[i + 1]

    if (nextDigit > currentDigit) {
      canRearrange = true
    }
  }

  if (!canRearrange) {
    return -1
  }

  for (let i = charDigits.length - 1; i >= 1; i--) {
    currentDigit = charDigits[i]
    previousDigit = charDigits[i - 1]
    i
    previousDigit
    currentDigit

    if (previousDigit < currentDigit) {
      if (i === 1) {
        shouldChangeFirstTwo = true
      }
      rearrangeIndex = i
      break
    }
  }

  shouldChangeFirstTwo
  rearrangeIndex
  charDigits

  console.log(charDigits.slice(0, rearrangeIndex - 1))
  console.log(charDigits[rearrangeIndex])
  console.log(charDigits[rearrangeIndex - 1])
  console.log(charDigits.slice(rearrangeIndex + 1))

  if (shouldChangeFirstTwo) {
    return Number(
      [charDigits[1]]
        .concat(charDigits[0], charDigits.slice(2, charDigits.length))
        .join(""),
    )
  }

  return Number(
    charDigits
      .slice(0, rearrangeIndex - 1)
      .concat(
        charDigits[rearrangeIndex],
        charDigits[rearrangeIndex - 1],
        charDigits.slice(rearrangeIndex + 1, charDigits.length),
      )
      .join(""),
  )
}

// console.log(nextBigger(9)) // -1
// console.log(nextBigger(111)) // -1
// console.log(nextBigger(531)) // -1
// console.log(nextBigger(513)) // 531
// console.log(nextBigger(2017)) // 2071
// console.log(nextBigger(414)) // 441
// console.log(nextBigger(12)) // 21
// console.log(nextBigger(123415)) // 123451
// console.log(nextBigger(1234)) // 1243
// console.log(nextBigger(123)) // 132
// console.log(nextBigger(122)) // 212
// console.log(nextBigger(144)) // 414
// console.log(nextBigger(1666)) // 6166
// console.log(nextBigger(3675)) // 3756
// console.log(nextBigger(168166)) // 168616
// console.log(nextBigger(809)) // 890
console.log(nextBigger(890)) // 908
console.log(nextBigger(7890)) // 7908
// console.log(nextBigger(1234567890)) // 1234567908
// console.log(nextBigger(46170211352750)) // 46170211355027
