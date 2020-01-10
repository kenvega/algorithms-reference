// level 5kyu
// https://www.codewars.com/kata/54d81488b981293527000c8f

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

const sum_pairs = (ints, s) => {
  const response = {};
  for (let index1 = 0; index1 < ints.length; index1++) {
    const index2 = ints.findIndex((n, i) => s - ints[index1] === n && i > index1);
    if (index2 !== -1) {
      if (!response[index2 - index1]) {
        response[index2 - index1] = [ints[index1], ints[index2]];
      }
    }
  }

  if (response.length === 0) return undefined;

  const resIndex = Math.min(...Object.keys(response).map(n => parseInt(n)));
  return response[resIndex];
};

console.log(sum_pairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8)); // [1, 7]
console.log(sum_pairs([1, -2, 3, 0, -6, 1], -6)); // [0, -6]
console.log(sum_pairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]

// still getting timeout error
