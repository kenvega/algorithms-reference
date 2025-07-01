// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// my solution:
// counters for every time i find a number
// can store them in an object with keys as the numbers and values as the number of times they have appeared
// then just is a find in that

function findOdd(array) {
  const obj = {};

  array.forEach(e => {
    if (obj[e] === undefined) {
      obj[e] = 1;
    } else {
      obj[e] += 1;
    }
  });

  const oddTimesNumber = Object.keys(obj).find(e => obj[e] % 2 === 1);

  return parseInt(oddTimesNumber, 10) || 0;
}

console.log('findOdd', findOdd([1, 2, 1, 1, 2, 4])); // 1
console.log('findOdd', findOdd([1, 2, 1, 1, 1, 2, 4])); // 4
console.log('findOdd', findOdd([1, 2, 1, 2])); // 0

// other solution from codewars using bit wise operator
function findOdd2(arr) {
  return arr.find(item => arr.filter(el => el === item).length % 2);
}
console.log('findOdd2', findOdd2([1, 2, 1, 1, 2, 4])); // 1
console.log('findOdd2', findOdd2([1, 2, 1, 1, 1, 2, 4])); // 4
