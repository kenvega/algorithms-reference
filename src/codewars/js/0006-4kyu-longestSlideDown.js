// level : 4kyu
// https://www.codewars.com/kata/551f23362ff852e2ab000037

//    /3/
//   \7\ 4
//  2 \4\ 6
// 8 5 \9\ 3

// 'slide down' is a sum of consecutive numbers from the top to the bottom of the pyramid
// As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// it seems tests cases for had a mistake. other people had the same issue:
// https://www.codewars.com/kata/551f23362ff852e2ab000037/discuss#label-issue
// couldn't see others solutions because of this

// I understood that you could only go down by moving one space to left or right in the slide
//   start always with the top element
//   find the two options you will have, compare and add, then repeat
function longestSlideDown(pyramid) {
  let currentIndex = 0;
  let result = pyramid[0][currentIndex];

  for (let i = 1; i < pyramid.length; i++) {
    const elementLeft = pyramid[i][currentIndex];
    const elementRight = pyramid[i][currentIndex + 1];

    const elementToAdd = elementLeft - elementRight > 0 ? elementLeft : elementRight;
    currentIndex = elementToAdd === elementLeft ? currentIndex : currentIndex + 1;

    result += elementToAdd;
  }

  return result;
}


console.log(longestSlideDown([
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3],
])); // 23

console.log(longestSlideDown([
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]])); // 1064. kata description says 1074 (seems a mistake)
