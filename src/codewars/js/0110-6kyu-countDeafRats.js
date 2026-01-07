// 6kyu
// https://www.codewars.com/kata/598106cb34e205e074000031

// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.
// But some of the rats are deaf and are going the wrong way!

// Kata Task

// How many deaf rats are there?

// Legend

// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right

// Examples

// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

// my solution
function countDeafRats(town) {
  let count = 0
  let current = ""
  const wherePiedPiper = town.indexOf("P")

  for (let i = 0; i < wherePiedPiper; i++) {
    current = town[i]

    if (current === "~") {
      // primero encontre cola
      // entonces es una rata mirando para derecha
      i = i + 1
    }

    if (current === "O") {
      // primero encontre cara
      // entonces es una rata mirando para izquierda
      count++
      i = i + 1
    }
  }

  for (let i = wherePiedPiper + 1; i < town.length; i++) {
    current = town[i]

    if (current === "O") {
      // primero encontre cara
      // entonces es una rata mirando para izquierda
      i = i + 1
    }

    if (current === "~") {
      // primero encontre cola
      // entonces es una rata mirando para derecha
      count++
      i = i + 1
    }
  }

  return count
}

console.log(countDeafRats("~O P")) // 0
console.log(countDeafRats("O~ P")) // 1
console.log(countDeafRats("O~O~ P")) // 2
console.log(countDeafRats("O~ O~ P")) // 2
console.log(countDeafRats("O~O~O~ P")) // 3
console.log(countDeafRats("O~ O~ O~ P")) // 3
console.log(countDeafRats("O~~O P")) // 1
console.log(countDeafRats("O~ ~O P")) // 1
console.log(countDeafRats("O~O~~O P")) // 2
console.log(countDeafRats("O~ O~ ~O P")) // 2
console.log(countDeafRats("O~O~O~~O P")) // 3
console.log(countDeafRats("O~ O~ O~ ~O P")) // 3
console.log(countDeafRats("~OO~O~ P")) // 2
console.log(countDeafRats("~O O~ O~ P")) // 2
console.log(countDeafRats("~O~O~OO~ P")) // 1
console.log(countDeafRats("~O ~O ~O O~ P")) // 1

console.log(countDeafRats("~O~O~OO~ P")) // 1

console.log(countDeafRats("~O~O~O~O P")) // 0

console.log(countDeafRats("P O~ O~ ~O O~")) // 1

console.log(countDeafRats("~O~O~O~OP~O~OO~")) // 2

// to remember

// other solution from the internet
function countDeafRats2(town) {
  town = town.split(" ").join("").split("")

  const localFlautista = town.indexOf("P")
  const antesFlautista = town.slice(0, localFlautista)
  const depoisFlautista = town.slice(localFlautista + 1)

  let ratosSurdos = antesFlautista.filter(
    (v, i) => v === "~" && i % 2 === 1
  ).length

  ratosSurdos += depoisFlautista.filter(
    (v, i) => v === "~" && i % 2 === 0
  ).length

  return ratosSurdos
}

console.log(countDeafRats2("~O ~O ~O O~ P")) // 1

console.log(countDeafRats2("~O~O~OO~ P")) // 1

console.log(countDeafRats2("~O~O~O~O P")) // 0

console.log(countDeafRats2("P O~ O~ ~O O~")) // 1

console.log(countDeafRats2("~O~O~O~OP~O~OO~")) // 2
