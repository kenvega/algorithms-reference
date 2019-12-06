// level 5kyu
// https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// solution:
// care only if if it's a 0 number then remove it from the array and push it to the end
const moveZeros = function (arr) {
  let counter = 0;
  const aux = arr.filter(e => {
    if (e === 0) {
      counter += 1;
      return false;
    }
    return true;
  });

  for (let i = 0; i < counter; i++) aux.push(0);
  return aux;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // 1 2 1 1 3 1 0 0 0 0
console.log(moveZeros([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])); // 1 2 1 1 3 1 0 0 0 0
console.log(moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])); // [9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// first approach incorrect because the index was moving as i moved the elements
// lesson/reminder : splice when used to remove element/s, gets them in an array too! careful! (even if it is just one)
const moveZerosOld = function (arr) {
  arr.forEach((e, i) => {
    if (e === 0) {
      const el = arr.splice(i, 1);
      arr.push(el[0]);
    }
  });
  return arr;
};

console.log(moveZerosOld([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));

// another solution from codewars
// was able to do it like my first try but iterating from the end
const moveZeros2 = function (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
};
