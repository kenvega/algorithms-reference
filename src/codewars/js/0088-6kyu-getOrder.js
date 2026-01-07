// 6kyu
// https://www.codewars.com/kata/5d23d89906f92a00267bb83d

// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

// my solution
function getOrder(input) {
  const MENU_ITEMS = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ]

  let response = ""
  let index = 0

  for (let i = 0; i < MENU_ITEMS.length; i++) {
    const menuItem = MENU_ITEMS[i]

    index = input.indexOf(menuItem.toLowerCase())

    while (index !== -1) {
      response += `${menuItem} `

      input = input.slice(0, index) + input.slice(index + menuItem.length)

      index = input.indexOf(menuItem.toLowerCase())
    }
  }

  return response.trim()
}

console.log(getOrder("friespizzacoke")) // "Fries Pizza Coke"
console.log(getOrder("pizzafriespizzacoke")) // "Fries Pizza Pizza Coke"
console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich")) // "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"

console.log(
  getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
) // "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// to remember
//  you can get the index of a word in a string with indexOf
//  you can ALSO use split to split a string by a specific word

// other solution from the internet

const getOrder2 = (input) => {
  return [
    "burger",
    "fries",
    "chicken",
    "pizza",
    "sandwich",
    "onionrings",
    "milkshake",
    "coke",
  ]
    .map((menuItem) => {
      return `${menuItem} `.repeat(input.split(menuItem).length - 1)
    })
    .join("")
    .split(" ")
    .map((e) => (e[0] ? e[0].toUpperCase() + e.slice(1) : ""))
    .join(" ")
    .trim()
}

console.log(getOrder2("friespizzacoke")) // "Fries Pizza Coke"
console.log(getOrder2("pizzafriespizzacoke")) // "Fries Pizza Pizza Coke"
console.log(getOrder2("pizzachickenfriesburgercokemilkshakefriessandwich")) // "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"
