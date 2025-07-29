// 6kyu
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript

// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of 'abad' is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// my solution
function high(wordsString){
  const words = wordsString.split(' ')
  let highestScore = 0
  let highestScoreIndex = 0
  let currentScore = 0

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      currentScore += words[i][j].charCodeAt(0) - 96
    }

    if (currentScore > highestScore) {
      highestScore = currentScore
      highestScoreIndex = i
    }

    currentScore = 0
  }

  return words[highestScoreIndex]
}

// to remember
// charCodeAt to pass a character to a number. 'a'.charCodeAt(0) as 97
// you can also use for(let word of words) instead of for(let i = 0; i < words.length; i++). more readable altough you lose the index


// solution from someone else - no use of charCodeAt
function high(x){
  let alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  let words = x.split(" ");
  let highestScore = 0;
  let highestScoreWord = "";

  for (let word of words) {
    let lettersSum = 0;

    for (let letter of word) {
      lettersSum += alphabets.indexOf(letter) + 1;
    }

    if (lettersSum > highestScore) {
      highestScore = lettersSum;
      highestScoreWord = word;
    }
  }

  return highestScoreWord;
}