// 6kyu
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// And a tower with 6 floors looks like this:
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]


// my solution
function towerBuilder(numberFloors) {
  let response = []
  let auxString = ''

  for (let currentFloor = 1; currentFloor <= numberFloors; currentFloor++) {
    for (let currentChar = 1; currentChar <= 2 * numberFloors - 1; currentChar++) {
      if (currentChar <= numberFloors - currentFloor) {
        auxString = auxString + ' '
      } else if (currentChar > numberFloors - currentFloor && currentChar <= numberFloors + currentFloor - 1) {
        auxString = auxString + '*'
      } else {
        auxString = auxString + ' '
      }
    }

    response = response.concat(auxString)
    auxString = ''
  }

  return response
}

// to remember
// you can always form your string by parts and them adding them together with +
// concat destructure arrays: [1].concat(2) results in [1,2] --- [1].concat([2]) results also in [1,2]
// arrays have the method .repeat which could be useful in these scenarios
// you can create arrays with Array.from({length: n}) where n is the length of the array
//   then you can pass a function where you can fill the array
// you can also create arrays with [...Array(n)] where n is the length of the array
//   if you do Array(n) it will return an array of 5 empty items which doesn't work well with methods like .map

// solution from someone else
function towerBuilder(nFloors) {
  var result = [];
  var starNumber = 1;
  for (let i = 1; i <= nFloors; i++) {
    result[i - 1] = " ".repeat(nFloors - i) + "*".repeat(starNumber) + " ".repeat(nFloors - i);
    starNumber += 2;
  }
  return result;
}

// solution from someone else
function towerBuilder(nFloors) {
  // build here
  let space,star, tower = [];
  for(let i = 1; i <= nFloors; i++){
    space = " ".repeat(nFloors - i);
    star  = "*".repeat((2*i) - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower
}

// solution from someone else
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

// solution from someone else
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

// solution from someone else
function towerBuilder(n) {
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i) + "*".repeat(i*2+1) + " ".repeat(n-1-i))
}
