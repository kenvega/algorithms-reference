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
  let response = '';
  let lastN = null;
  let counterCons = 0;

  for (let i = 0; i < list.length; i++) {
    const isFirstNumber = i === 0;
    const isLastNumber = i === list.length - 1;
    const isCurrentConsecutive = list[i] === list[i - 1] + 1;

    if (isFirstNumber) {
      response += list[i];
    } else if (isCurrentConsecutive) {
      if (isLastNumber) {
        if (counterCons >= 1) {
          response += `-${list[i]}`;
        } else {
          response += `,${list[i]}`;
        }
      } else {
        counterCons++;
        lastN = list[i];
      }
    } else if (counterCons >= 2) {
      response += `-${lastN},${list[i]}`;
      counterCons = 0;
    } else if (counterCons === 1) {
      response += `,${lastN},${list[i]}`;
      counterCons = 0;
    } else {
      response += `,${list[i]}`;
    }
  }

  return response;
}


console.log(solution([1, 2, 4, 5])); // '1,2,4,5'
console.log(solution([1, 2, 4, 5, 6])); // '1,2,4-6'
console.log(solution([1, 2, 4, 5, 6, 7])); // '1,2,4-7'
console.log(solution([1, 2, 4, 5, 6, 7, 8])); // '1,2,4-8'
console.log(solution([1, 3, 4, 5, 7, 8, 9, 10])); // '1,3-5,7-10'
console.log(solution([1, 2, 3, 5, 7, 8, 9, 10])); // '1-3,5,7-10'
console.log(solution([14, 15, 17, 18, 19, 20])); // '14,15,17-20'
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])); // '-6,-3-1,3-5,7-11,14,15,17-20'


// another solution from codewars

function solution2(list) {
  return list
    .reduce((acc, n, i, arr) => {
      if (n !== arr[i - 1] + 1) {
        acc.push([n]);
      } else {
        acc[acc.length - 1].push(n);
      }
      return acc;
    }, [])
    .map(arr => (arr.length > 2 ? `${arr[0]}-${arr[arr.length - 1]}` : arr))
    .join(',');
}

console.log('-----');
console.log(solution2([1, 2, 4, 5])); // '1,2,4,5'
console.log(solution2([1, 2, 4, 5, 6])); // '1,2,4-6'
console.log(solution2([1, 2, 4, 5, 6, 7])); // '1,2,4-7'
console.log(solution2([1, 2, 4, 5, 6, 7, 8])); // '1,2,4-8'
console.log(solution2([1, 3, 4, 5, 7, 8, 9, 10])); // '1,3-5,7-10'
console.log(solution2([1, 2, 3, 5, 7, 8, 9, 10])); // '1-3,5,7-10'
console.log(solution2([14, 15, 17, 18, 19, 20])); // '14,15,17-20'
console.log(solution2([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])); // '-6,-3-1,3-5,7-11,14,15,17-20'


function solution3(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(',');
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  const lastRange = ranges[ranges.length - 1];
  const lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3 ? range.join(',') : `${range[0]}-${range[range.length - 1]}`;
}

console.log('-----');
console.log(solution3([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])); // '-6,-3-1,3-5,7-11,14,15,17-20'
