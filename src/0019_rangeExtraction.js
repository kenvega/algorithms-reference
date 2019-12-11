// level 4kyu
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

// A format for expressing an ordered list of integers is to use a comma separated list of either
// - individual integers
// - or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")

// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:
// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"


function solution(list) {
  let i = 0;
  let response = '';
  while (i < list.length) {
    const [elements, newIndex] = getElements(list, i);
    response += elements;
    i = newIndex;
  }
  return response;
}

function getElements(list, i) {
  // start to get the elements from the index
  // check 3 times if the next elements are following ones
  //  if so
  //    keep following until you hit something that is not or the end of the array
  //    then return that range
  //    return the new index as well
  //  if not
  //    just return the element you were at
  //    return index + 1
  let j = i;
  let counter = 1;
  while () { // there is still length
    if (list[j + counter] === list[j] + counter) {
      counter++;
    } else {
      if (counter >= 3) return [ , ]; // TODO: complete
      else return [list[i].toString(), i+1];
    }
  }

}


console.log(solution([1, 2, 3, 5, 7, 8, 9, 10])); // '1-3,5,7-10'
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])); // '-6,-3-1,3-5,7-11,14,15,17-20'
