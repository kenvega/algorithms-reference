// level 5kyu
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:
//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered

// Input strings s1 and s2 are null terminated.

// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  if (str1.length < str2.length) return false;

  const obj1 = buildMetadata(str1);
  const obj2 = buildMetadata(str2);

  const keys2 = Object.keys(obj2);

  for (let i = 0; i < keys2.length; i++) {
    const currentLetter = keys2[i];
    if (!obj1[currentLetter]) return false;
    if (obj2[currentLetter] > obj1[currentLetter]) return false;
  }
  return true;
}

const buildMetadata = str => str.split('').reduce((acc, cur) => {
  if (!acc[cur]) acc[cur] = 1;
  else acc[cur] += 1;
  return acc;
}, {});

console.log(scramble('rkqodlw', 'world')); // true
console.log(scramble('rkqodlw', 'worlda')); // false
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // true
console.log(scramble('katas', 'steak')); // false
console.log(scramble('scriptjava', 'javascript')); // true
console.log(scramble('scriptingjava', 'javascript')); // true
console.log(scramble('scriptsjava', 'javascripts')); // true
console.log(scramble('jscripts', 'javascript')); // false
console.log(scramble('aabbcamaomsccdd', 'commas')); // true


// other solution from codewars

function scramble2(str1, str2) {
  let hashtab = [...new Array(256)].map(() => 0);

  str2.split('').forEach(ele => hashtab[ele.charCodeAt(0)]++);
  str1.split('').forEach(ele => hashtab[ele.charCodeAt(0)]--);

  hashtab = hashtab.filter(x => x > 0);

  return hashtab.length === 0;
}

console.log(scramble2('rkqodlw', 'world')); // true
