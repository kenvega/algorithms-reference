// level 5kyu
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

/**
 * get the number after the zeros
 * sum 1
 * handle cases: reduce zeros if needed
 */

function incrementString(strng) {
  let nString = '';
  let digitIndex = null;

  for (let i = 0; i < strng.length; i++) {
    if (isDigit(strng[i])) {
      // first element to be a number between 1 and 9
      nString = strng.slice(i, strng.length);
      digitIndex = i;
      break;
    }
  }

  if (nString === '') {
    // if last one is zero, change it
    if (strng[strng.length - 1] === '0') return `${strng.slice(0, strng.length - 1)}1`;
    // else just add the one
    return `${strng}1`;
  }

  const initL = nString.length;
  nString = (parseInt(nString, 10) + 1).toString();
  const finalL = nString.length;

  // handle adding one to the number while maintaining zeros
  if (initL === finalL) return strng.slice(0, digitIndex) + nString;
  if (strng[digitIndex - 1] === '0') return strng.slice(0, digitIndex - 1) + nString;
  return strng.slice(0, digitIndex) + nString;
}

function isDigit(char) {
  return parseInt(char, 10) > 0 && parseInt(char, 10) < 10;
}

console.log(incrementString('')); // "1"
console.log(incrementString('9')); // "10"
console.log(incrementString('0')); // "1"
console.log(incrementString('foo')); // "foo1"
console.log(incrementString('foobar000')); // "foobar001"
console.log(incrementString('foobar001')); // "foobar002"
console.log(incrementString('foobar98')); // "foobar99"
console.log(incrementString('foobar99')); // "foobar100"
console.log(incrementString('foobar099')); // "foobar100"
console.log(incrementString('foobar999')); // "foobar1000"
console.log(incrementString('foobar098')); // "foobar099"

// another solution from codewars (most of them were using regex)

function incrementString2(str) {
  const c = str[str.length - 1];
  switch (c) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8': return str.substring(0, str.length - 1) + (parseInt(c, 10) + 1);
    case '9': return incrementString(str.substring(0, str.length - 1)) + 0;
    default: return `${str}1`;
  }
}

console.log('----');
console.log(incrementString2('')); // "1"
console.log(incrementString2('9')); // "10"
console.log(incrementString2('0')); // "1"
console.log(incrementString2('foo')); // "foo1"
console.log(incrementString2('foobar000')); // "foobar001"
console.log(incrementString2('foobar001')); // "foobar002"
console.log(incrementString2('foobar98')); // "foobar99"
console.log(incrementString2('foobar99')); // "foobar100"
console.log(incrementString2('foobar099')); // "foobar100"
console.log(incrementString2('foobar999')); // "foobar1000"
console.log(incrementString2('foobar098')); // "foobar099"
