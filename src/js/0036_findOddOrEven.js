// level 6kyu
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// Description:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers){
  let arrayIsEven = (isEven(integers[0]) && isEven(integers[1])) ||
                    (isEven(integers[0]) && isEven(integers[2])) ||
                    (isEven(integers[1]) && isEven(integers[2]));

  let i = 0;

  for(; i < integers.length; i++) {
    if (arrayIsEven) {
      if (!isEven(integers[i])) break;
    } else {
      if (isEven(integers[i])) break;
    }
  }

  return integers[i]
}

function isEven(number) {
  return number % 2 === 0
}


// another solution from codewars
// no so efficient. it's a O(2n) when the description said it could be a very large array

function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

