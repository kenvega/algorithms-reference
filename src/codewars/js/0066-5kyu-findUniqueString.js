// 5kyu
// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/javascript

// There is an array of strings.
// All strings contains similar letters except one.
// Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces.
// Spaces are not significant, only non-spaces symbols matters.
// E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.


// my solution
function findUniq(arr) {
  // console.log('arr: ', arr);
  return arr
}


console.log("case 1: ", findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])); // 'BbBb'
console.log("case 2: ", findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); // 'foo'
console.log("case 3: ", findUniq(['silvia', 'vasili', 'victor'])); // 'victor'
console.log("case 4: ", findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter'])); // 'Harry Potter'
console.log("case 5: ", findUniq(['    ', 'a', ' '])); // 'a'


// to remember
