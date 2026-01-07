// 6kyu
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// my solution
function findUniq(arr) {
  const counterObject = {}

  arr.forEach((element) => {
    if (!counterObject[element]) {
      counterObject[element] = 1
    } else {
      counterObject[element] += 1
    }
  })

  const keyValuePairs = Object.entries(counterObject)

  for (let i = 0; i < keyValuePairs.length; i++) {
    if (keyValuePairs[i][1] === 1) {
      return Number(keyValuePairs[i][0])
    }
  }
}

// to remember
// better solution for this case would have been a Map probably because a Map can have any kind of key I think like numbers
//   that way you wouldn't have to use Number() at the end
// Object.entries return a keyValuePair


// another solution
function findUniq(arr) {
  arr = arr.sort()
  if (arr[0] === arr[1]){
    return arr[arr.length -1]
  } else {
    return arr[0]
  }
}