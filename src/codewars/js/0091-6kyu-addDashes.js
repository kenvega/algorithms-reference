// 6kyu
// https://www.codewars.com/kata/58223370aef9fc03fd000071

// Given an integer
// return a string with dash '-' marks before and after each odd digit
// but do not begin or end the string with a dash mark

// Examples
// 274 -> '2-7-4'
// 6815 -> '68-1-5'

// my solution
function dashatize(num) {
  if (num < 0) {
    num = num * -1
  }

  const digits = num.toString().split("")
  let digit = "0"

  let response = digits[0]

  if (digits.length === 1) {
    return response
  }

  if (digits[0] % 2 === 1) {
    response = `${response}-`
  }

  for (let i = 1; i < digits.length - 1; i++) {
    digit = digits[i]
    if (digit % 2 === 1) {
      if (response[response.length - 1] === "-") {
        response = `${response}${digit}-`
      } else {
        response = `${response}-${digit}-`
      }
    } else {
      response = `${response}${digit}`
    }
  }

  if (
    digits[digits.length - 1] % 2 === 1 &&
    response[response.length - 1] !== "-"
  ) {
    response = `${response}-${digits[digits.length - 1]}`
  } else {
    response = `${response}${digits[digits.length - 1]}`
  }

  return response
}

console.log(dashatize(274)) // "2-7-4"
console.log(dashatize(5311)) // "5-3-1-1"
console.log(dashatize(86320)) // "86-3-20"
console.log(dashatize(974302)) // "9-7-4-3-02"

console.log(dashatize(907)) // "9-0-7"
console.log(dashatize(-148)) // "1-48"

console.log(dashatize(0)) // "0"
console.log(dashatize(-1)) // "1"
console.log(dashatize(-28369)) // "28-3-6-9"

// to remember

// other solution from the internet
function dashatize2(num) {
  return num
    .toString()
    .split("")
    .map((c) => {
      return c % 2 ? `-${c}-` : c
    })
    .join("")
    .split("-")
    .filter((a) => a !== "")
    .join("-")
}

console.log(dashatize2(274)) // "2-7-4"
console.log(dashatize2(5311)) // "5-3-1-1"
console.log(dashatize2(86320)) // "86-3-20"
console.log(dashatize2(974302)) // "9-7-4-3-02"

console.log(dashatize2(907)) // "9-0-7"
console.log(dashatize2(-148)) // "1-48"

console.log(dashatize2(0)) // "0"
console.log(dashatize2(-1)) // "1"
console.log(dashatize2(-28369)) // "28-3-6-9"
