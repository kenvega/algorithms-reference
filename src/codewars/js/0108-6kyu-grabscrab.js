// 6kyu
// https://www.codewars.com/kata/52b305bec65ea40fe90007a7

// Write a function that will accept a jumble of letters as well as a dictionary
// and output a list of words that have the same letters

// For example:
// grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Should return ["sport", "ports"]

// Return matches in the same order as in the dictionary
// Return an empty array if there are no matches

// my solution
function grabscrab(anagram, dictionary) {
  const indexes = []
  const sortedWord = anagram.split("").sort().join("")
  const words = dictionary.map((word) => word.split("").sort().join(""))
  words.forEach((word, index) => {
    if (word === sortedWord) {
      indexes.push(index)
    }
  })
  return indexes.map((i) => dictionary[i])
}

console.log(grabscrab("trisf", ["first"])) // ["first"], "Should have found 'first'"
console.log(grabscrab("oob", ["bob", "baobab"])) // [], "Should not have found anything"
console.log(grabscrab("ainstuomn", ["mountains", "hills", "mesa"])) // ["mountains"], "Should have found 'mountains'"
console.log(grabscrab("oolp", ["donkey", "pool", "horse", "loop"])) // ["pool", "loop"], "Should have found 'pool' and 'loop'"
console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"])) // ["sport", "ports"], "Should have found 'sport' and 'ports'"
console.log(grabscrab("ourf", ["one", "two", "three"])) // [], "Should not have found anything"

// to remember

// other solution from the internet
function grabscrab2(anagram, dictionary) {
  anagram = anagram.split("").sort().join("")
  return dictionary.filter((a) => a.split("").sort().join("") === anagram)
}

console.log(grabscrab2("trisf", ["first"])) // ["first"], "Should have found 'first'"
console.log(grabscrab2("oob", ["bob", "baobab"])) // [], "Should not have found anything"
console.log(grabscrab2("ainstuomn", ["mountains", "hills", "mesa"])) // ["mountains"], "Should have found 'mountains'"
console.log(grabscrab2("oolp", ["donkey", "pool", "horse", "loop"])) // ["pool", "loop"], "Should have found 'pool' and 'loop'"
console.log(grabscrab2("ortsp", ["sport", "parrot", "ports", "matey"])) // ["sport", "ports"], "Should have found 'sport' and 'ports'"
console.log(grabscrab2("ourf", ["one", "two", "three"])) // [], "Should not have found anything"
