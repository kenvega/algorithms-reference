// 6kyu
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/javascript

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.


// my solution
function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map((digit, index) => {
      if (digit === "0") { return null }
      return `${digit}` + "0".repeat(num.toString().length - index - 1)
    })
    .filter((number) => number)
    .join(" + ");
}

