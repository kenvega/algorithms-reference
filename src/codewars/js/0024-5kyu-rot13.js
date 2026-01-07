// level 5kyu
// https://www.codewars.com/kata/530e15517bc88ac656000716/

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  return message.split('').map(l => {
    if (isLetter(l)) return shiftLetter(l, 13);
    return l;
  }).join('');
}

function isLetter(l) {
  return l.toLowerCase() !== l.toUpperCase();
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function shiftLetter(l, n) {
  const isUpperCase = l === l.toUpperCase();
  const letterIndex = isUpperCase ? alphabet.indexOf(l.toLowerCase()) : alphabet.indexOf(l);
  const finalIndex = (letterIndex + n > 25) ? letterIndex - 26 + n : letterIndex + n;
  return isUpperCase ? alphabet[finalIndex].toUpperCase() : alphabet[finalIndex];
}

console.log(rot13('test')); // "grfg"
console.log(rot13('Test')); // "Grfg"

// other solution from codewars

function rot13Other(message) {
  const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)]);
}

console.log(rot13Other('test')); // "grfg"
console.log(rot13Other('Test')); // "Grfg"
