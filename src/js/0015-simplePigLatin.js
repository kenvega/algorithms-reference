// level 5kyu
// https://www.codewars.com/kata/520b9d2ad5c005041100000f

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  return str.split(' ').map(w => {
    const firstChar = w[0];
    const isLetter = firstChar.toLowerCase() !== firstChar.toUpperCase();
    if (!isLetter) return w;
    return `${w.slice(1, w.length) + firstChar}ay`;
  }).join(' ');
}

console.log(pigIt('Pig latin is cool')); // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')); // 'hisTay siay ymay tringsay'
console.log(pigIt('Hello world !')); // 'elloHay orldway !'

// another solution from codewars
// uses substr, but don't handle the puncutation case. requirement could be added later
const pigIt2 = s => s.split(' ').map(e => `${e.substr(1) + e[0]}ay`).join(' ');
console.log(pigIt2('This is my string')); // 'hisTay siay ymay tringsay'
console.log(pigIt2('Hello world !')); // 'elloHay orldway !'
