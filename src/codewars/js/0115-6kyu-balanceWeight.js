// 6kyu
// https://www.codewars.com/kata/57fb44a12b53146fe1000136

// Description:
// Each exclamation mark's weight is 2
// each question mark's weight is 3

// Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"
// if the right side is more heavy, return "Right"
// if they are balanced, return "Balance"

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

// my solution
function balance(left, right) {
  const leftWeight = calculateWeight(left)
  const rightWeight = calculateWeight(right)

  if (rightWeight === leftWeight) {
    return "Balance"
  }

  return rightWeight > leftWeight ? "Right" : "Left"
}

function calculateWeight(side) {
  return side.split("").reduce((acc, cur) => {
    if (cur === "!") {
      return acc + 2
    }
    if (cur === "?") {
      return acc + 3
    }
  }, 0)
}

console.log(balance("!!", "??")) //  "Right"
console.log(balance("!??", "?!!")) //  "Left"
console.log(balance("!?!!", "?!?")) //  "Left"
console.log(balance("!!???!????", "??!!?!!!!!!!")) //  "Balance"

// to remember

// other solution from the internet
