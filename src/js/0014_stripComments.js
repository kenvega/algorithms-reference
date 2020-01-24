// level 4kyu
// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
// Any whitespace at the end of the line should also be stripped out.

// Example:  Given an input string of:
// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:
// apples, pears
// grapes
// bananas

// The code would be called like so:
// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

// my solution:
// while you still find `\n` in your current string
//   get the substring from current start to `\n`
//   find the min index of the markers
//   remove from the substring the comment based on the min index of the markers
//   add that to the response, repeat
// return response

// this kata didn't had good tests

function solution(input, markers) {
  let startIndex = 0;
  let finishIndex = input.indexOf('\n');
  let response = '';

  let hasNewLine = input.indexOf('\n', startIndex) !== -1;

  while (hasNewLine) {
    hasNewLine = input.indexOf('\n', startIndex) !== -1;

    const subString = input.slice(startIndex, finishIndex);
    const minIndex = getMinIndex(subString, markers);

    response = response.concat(subString.slice(0, minIndex).trim()).concat('\n');

    startIndex = finishIndex + 1;
    finishIndex = input.indexOf('\n', startIndex);
  }
  return response.trim();
}

const getMinIndex = (input, markers) => {
  let response = 0;
  markers.forEach(marker => {
    if (input.indexOf(marker) > response) response = input.indexOf(marker);
  });
  return response === 0 ? input.length : response;
};

console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!'])); // "apples, pears\ngrapes\nbananas"
console.log(solution('hello! there\nsome test', ['!'])); // "hello\nsome test"
