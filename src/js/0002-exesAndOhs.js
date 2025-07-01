// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// examples
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// my solution:
function XO(str) {
  const numberOfX = str.split('').filter((e) => e.toLowerCase() === 'x').length;
  const numberOfO = str.split('').filter((e) => e.toLowerCase() === 'o').length;
  return numberOfX === numberOfO;
}

console.log('XO on ooxx', XO('ooxx'));
console.log('XO on xooxx', XO('xooxx'));
console.log('XO on ooxXm', XO('ooxXm'));

// other solution from codewars using regex:
function XO2(str) {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
