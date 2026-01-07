// 5kyu
// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/javascript

// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// my solution
function alphanumeric(string){
  if (string.length === 0) return false

  let char

  for (let i = 0; i < string.length; i++) {
    char = string[i]

    if (!((char >= '0' && char <= '9') ||
          (char >= 'A' && char <= 'Z') ||
          (char >= 'a' && char <= 'z'))) {
      return false
    }
  }

  return true
}

// to remember
// you can compare characters as if they were numbers

// other solution (not efficient)
const alphanumeric = (str) => {
  if (!str.length) return false;
  const ALLOWED_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  for (let char of str) {
    if (!ALLOWED_CHARS.includes(char)) return false;
  }
  return true;
};


// other solution (more efficient)
const alphanumeric = (str) => {
  if (!str.length) return false;
  const ALLOWED_CHARS = new Set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');

  for (let char of str) {
    if(!ALLOWED_CHARS.has(char)) return false;
  }
  return true;
};

// other solution
function alphanumeric(string){
  for (let char of string) {
    if (
        (char.toUpperCase() === char.toLowerCase()) &&
        (parseInt(char) !== Number(char))
      ) {
      return false;
    }
  }

  return string.length > 0;
}
