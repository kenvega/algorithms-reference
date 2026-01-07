// level 5kyu
// https://www.codewars.com/kata/54d81488b981293527000c8f

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// lesson/reminder: object and Set have faster lookups than arrays

// form the object in the loop
// check if the current sums the sum with any of the already tracked
// if so, return those numbers
const sum_pairs = (numbers, sum) => {
  const aux = new Set([numbers[0]]);

  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];

    if (aux.has(sum - current)) {
      return [sum - current, current];
    }

    aux.add(current);
  }
};

console.log(sum_pairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8)); // [1, 7]
console.log(sum_pairs([1, -2, 3, 0, -6, 1], -6)); // [0, -6]
console.log(sum_pairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]


// first solution used indexOf, was slow because of linear lookup
const sum_pairs_first_solution = (numbers, sum) => {
  const aux = [];

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    if (aux.length > 0) {
      const complementIndex = aux.indexOf(sum - current);
      if (complementIndex !== -1) {
        return [aux[complementIndex], current];
      }
    }
    aux.push(current);
  }
};

console.log(sum_pairs_first_solution([11, 3, 7, 5], 10)); // [3, 7]
console.log(sum_pairs_first_solution([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sum_pairs_first_solution([1, 4, 8, 7, 3, 15], 8)); // [1, 7]
console.log(sum_pairs_first_solution([1, -2, 3, 0, -6, 1], -6)); // [0, -6]
console.log(sum_pairs_first_solution([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
