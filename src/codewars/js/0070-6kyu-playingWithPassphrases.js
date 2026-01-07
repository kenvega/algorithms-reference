// 6kyu
// https://www.codewars.com/kata/559536379512a64472000053/javascript

// get your passphrases stronger by

// 1. shift each letter by a given number but the transformed letter must be a letter (circular shift)
// 2. replace each digit by its complement to 9
// 3. keep such as non alphabetic and non digit characters
// 4. downcase each letter in odd position, upcase each letter in even position (first character is in position 0)
// 5. reverse the whole result

// Example:
// your text: "BORN IN 2015!", shift with number 1
// 1 + 2 + 3 -> "CPSO JO 7984!"
// 4 "CpSo jO 7984!"
// 5 "!4897 Oj oSpC"


// my solution
function playPass(phrase, n) {
  let aux = phrase.split('')
  const abc = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < aux.length; i++) {
    if (abc.includes(aux[i].toLowerCase())) {
      aux[i] = shifting(aux[i], n)

      if (i % 2 === 0) {
        aux[i] = aux[i].toUpperCase()
      } else {
        aux[i] = aux[i].toLowerCase()
      }
    }

    if (!isNaN(parseInt(aux[i])) && parseInt(aux[i]) >= 0 && parseInt(aux[i]) <= 9) {
      aux[i] = complement(aux[i])
    }
  }

  return aux.reverse().join('')
}

const shifting = (letter, number) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz'

  const isLowercase = letter.toLowerCase() === letter

  let newIndex = abc.indexOf(letter.toLowerCase()) + number

  if (newIndex < abc.length) {
    return isLowercase ? abc[newIndex] : abc[newIndex].toUpperCase()
  } else {
    newIndex = newIndex % abc.length
    return isLowercase ? abc[newIndex] : abc[newIndex].toUpperCase()
  }
}

const complement = (number) => {
  return 9 - number
}

console.log('playPass("I LOVE YOU!!!", 1): ', playPass("I LOVE YOU!!!", 1)); // "!!!vPz fWpM J"
console.log('playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2): ', playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)); // "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"

// to remember
//  Number(' ') will give you 0. so it's better to use parseInt(' ') in this case because it will return NaN


// other solution from the internet

