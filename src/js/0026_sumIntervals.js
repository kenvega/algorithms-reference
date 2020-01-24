// level 4kyu
// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

// Write a function called sumIntervals/sum_intervals()
// accepts an array of intervals
// and returns the sum of all the interval lengths.
// Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array.
// The first value of the interval will always be less than the second value.
// Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7.
// Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

function sumIntervals(intervals) {
  let overlapCounter = 0;

  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      console.log('-----------');
      console.log('will compare', intervals[i], 'with', intervals[j]);

      const intervalA = intervals[i];
      const intervalB = intervals[j];

      if (intervalA[0] < intervalB[0]) {
        if (intervalA[1] > intervalB[0]) {
          //
          overlapCounter += (intervalA[1] - intervalB[0]);
        }
        if (intervalA[1] > intervalB[1]) {
          overlapCounter--;
        }
      } else if (intervalA[0] > intervalB[0]) {
        if (intervalB[1] > intervalA[0]) {
          overlapCounter += (intervalB[1] - intervalA[0]);
        }
        if (intervalA[1] < intervalB[1]) {
          overlapCounter--;
        }
      } else if (intervalA[0] === intervalB[0]) {
        overlapCounter += Math.min(intervalA[1], intervalB[1]); // [1, 5], [1, 6]
        if (intervalA[1] === intervalB[1]) overlapCounter--; // [1, 5], [1, 5]
      }
      console.log('overlapCounter: ', overlapCounter);
    }
  }

  const allLengths = intervals.reduce((acc, cur) => acc + cur[1] - cur[0], 0);
  console.log('allLengths: ', allLengths);
  console.log('response: ', allLengths - overlapCounter);
  return allLengths - overlapCounter;
}

// sumIntervals([
//   [1, 2],
//   [6, 10],
//   [11, 15],
// ]); // => 9

sumIntervals([
  [6, 10],
  [1, 2],
  [11, 15],
]); // => 9

// sumIntervals([
//   [1, 4],
//   [7, 10],
//   [3, 5],
// ]); // => 7

// sumIntervals([
//   [1, 5],
//   [10, 20],
//   [1, 6],
//   [16, 19],
//   [5, 11],
// ]); // => 19

// sumIntervals([
//   [1, 5],
//   [1, 5],
// ]); // => 4
