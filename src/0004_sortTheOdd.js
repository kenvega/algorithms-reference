// level : 6kyu
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// example: sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// my first solution:
// 1. separate the odd from the even numbers in two arrays
// 2. reorder the odds array
// 3. save the indexes where even numbers occur in the original array
// 4. unify the reordered odds array with the evens based on the indexes you found

function sortTheOdd(array) {
  const evenArray = array.filter(e => e % 2 === 0);
  const oddArray = array.filter(e => e % 2 === 1);
  const allEvenIndexes = array.reduce((acc, e, i) => {
    if (e % 2 === 0) acc.push(i);
    return acc;
  }, []);

  const orderedOddArray = oddArray.sort((a, b) => a - b);
  const result = [...orderedOddArray];

  let counter = 0;
  allEvenIndexes.forEach(evenIndex => {
    result.splice(evenIndex, 0, evenArray[counter]);
    counter += 1;
  });

  return result;
}

console.log('sortTheOdd [5, 3, 2, 8, 1, 4]: ', sortTheOdd([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
console.log('sortTheOdd [2, 1, 5, 4, 3, 9]: ', sortTheOdd([2, 1, 5, 4, 3, 9])); // [2, 1, 3, 4, 5, 9]

// other better solution from codewars:
// 1. filter the odd ones and sort them (one line)
// 2. mapping and returning the first sliced element of the odd sorted ones if the current is odd, or the same element if is even
// this solution basically gets rid of the intermediate index

function sortTheOdd2(array) {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b);
  return array.map(x => (x % 2 ? odd.shift() : x));
}

console.log('sortTheOdd2 [5, 3, 2, 8, 1, 4]: ', sortTheOdd2([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
console.log('sortTheOdd2 [2, 1, 5, 4, 3, 9]: ', sortTheOdd2([2, 1, 5, 4, 3, 9])); // [2, 1, 3, 4, 5, 9]
