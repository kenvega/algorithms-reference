// Write a function that takes an array of Random Integers as the input and returns an array where all the Even numbers are at the beginning and all the Odd numbers are at the end. Extra points for answers with O(n) efficiency and O(1) memory

function evenOddSorter(numbers) {
  const res = [];

  numbers.forEach((n) => {
    if (isEven(n)) {
      pushAtStartOf(res, n);
    } else {
      pushAtEndOf(res, n);
    }
  });

  return res;
}

const numbers = [1, 6, 23, 7, 2, 8, 2, 9, 1];

console.log('numbers: ', numbers);
console.log('sorted: ', evenOddSorter(numbers));

function isEven(number) {
  return number % 2 === 0;
}

function pushAtStartOf(array, number) {
  array.unshift(number);
}

function pushAtEndOf(array, number) {
  array.push(number);
}
