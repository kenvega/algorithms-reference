// 6kyu
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript

// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram
//   because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.

// my solution
function isPangram(string){
  const hash = {}
  let current

  for(let i = 0; i < string.length; i++) {
    current = string[i]

    if (!isNaN(Number(current))) continue; // character numbers like '5' not considered
    if (current === ',' || current === '.' || current === ' ' && current === "'" && current === "?") continue;

    current = current.toLowerCase()

    if (!hash[current]) {
      hash[current] = 1
    }
  }

  return Object.keys(hash).length === 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.length;
}

// things to remember
// strings don't have the array methods like forEach, map, reduce, etc
// seems that you can compare characters with '>' or '<' as if they were numbers
// 

// other solution

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every(ch => string.toLowerCase().includes(ch));
}


// suggested better solution

function isPangram(str){
  const seen = new Set();
  for (const ch of str.toLowerCase()){
    if (ch >= 'a' && ch <= 'z'){
      seen.add(ch);
      if (seen.size === 26) return true;       // early exit
    }
  }
  return false;
}