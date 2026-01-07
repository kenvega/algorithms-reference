// 6kyu
// https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript

// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized
// only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// The next words should be always capitalized.
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// my solution
function toCamelCase(str){
  let aux
  let response = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' || str[i] === '_') {
      aux = true;
      continue
    }
    if (aux) {
      response = response + str[i].toUpperCase()
      aux = false
    } else {
      response = response + str[i]
    }
  }

  return response
}

// to remember
// for allows you to skip the current iteration
// it is always toUpperCase and not toUppercase (notice the double capital letter)