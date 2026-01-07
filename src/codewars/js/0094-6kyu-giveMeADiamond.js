// 6kyu
// https://www.codewars.com/kata/5503013e34137eeeaa001648

// You need to return a string that looks like a diamond shape when printed on the screen
// using asterisk (*) characters

// trailing spaces should be removed (spaces at the end of every line)
// and every line must be terminated with a newline character (\n)

// Return null if the input is an even number or negative
// as it is not possible to print a diamond of even or negative size

// Examples
// A size 3 diamond:
//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:
//   *
//  ***
// *****
//  ***
//   *
// ...that is: "  *\n ***\n*****\n ***\n  *\n"

// my solution
function diamond(n) {
  if (n % 2 === 0 || n < 0) {
    return null
  }
  const response = new Array(n)

  let asterisks = ""
  let spaces = ""

  for (let i = 0; i < n; i++) {
    if (i < n / 2) {
      asterisks = "*".repeat(2 * i + 1)
      spaces = " ".repeat((n - 1) / 2 - i)
    } else {
      asterisks = "*".repeat(n * 2 - i * 2 - 1)
      spaces = " ".repeat(i - Math.floor(n / 2))
    }

    response[i] = `${spaces}${asterisks}\n`
  }

  return response.join("")
}

console.log(diamond(1)) // "*\n"
console.log(diamond(3)) // " *\n***\n *\n"
console.log(diamond(5)) // "  *\n ***\n*****\n ***\n  *\n"
console.log(diamond(7))
console.log(diamond(9))

// to remember
//  to 'multiply' a string a few times use .repeat() on strings

// other solution from the internet
function diamond2(n) {
  if (n <= 0 || n % 2 === 0) return null
  let str = ""
  for (let i = 0; i < n; i++) {
    const len = Math.abs((n - 2 * i - 1) / 2)
    str += " ".repeat(len)
    str += "*".repeat(n - 2 * len)
    str += "\n"
  }
  return str
}
