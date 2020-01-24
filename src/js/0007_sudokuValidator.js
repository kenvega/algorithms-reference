// level : 4kyu
// https://www.codewars.com/kata/551f23362ff852e2ab000037

// Write a function that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.
// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.


/**
 * my solution:
 * verify there is no 0 in the board
 * check rows
 * generate vertical arrays, and check them
 * generate 3x3 boxes, and check them
 * generate 2 crossed arrays, and check them (seems it is not necessary)
 * return true if all checks passed
 *
 * returning as early as I can (as soon I find something not valid)
 */

function validSolution(board) {
  for (let i = 0; i < board.length; i++) {
    // verifying zeros
    const hasZero = board[i].includes(0);
    if (hasZero) return false;

    // verifying rows
    const currentRow = [...board[i]];
    const isRowCorrect = verifyArray(currentRow);
    if (!isRowCorrect) return false;

    // verifying columns
    let currentColumn = [];
    for (let j = 0; j < board[i].length; j++) {
      currentColumn = currentColumn.concat(board[j][i]);

      // verifying boxes
      let currentBox = [];
      if (
        (i === 0 || i === 3 || i === 6)
        && (j === 0 || j === 3 || j === 6)
      ) {
        currentBox = currentBox
          .concat(board[i].slice(j, j + 3))
          .concat(board[i + 1].slice(j, j + 3))
          .concat(board[i + 2].slice(j, j + 3));

        const isBoxCorrect = verifyArray(currentBox);
        if (!isBoxCorrect) return false;
      }
    }

    const isColumnCorrect = verifyArray(currentColumn);
    if (!isColumnCorrect) return false;
  }

  return true;
}

const SUM_LINE_SUDOKU = 45;

function verifyArray(array) {
  return array.reduce((acc, cur) => acc + cur) === SUM_LINE_SUDOKU;
}

console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
])); // true

console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
])); // => false

/**
 * solution from a friend:
 * constructed the blocks(boxes) another way
 */

function validSolution2(board) {
  const size = board.length;
  const blockSum = size * (size + 1) / 2;
  const rows = [];
  const columns = Array(size);
  const blocks = {};

  board.forEach((row, i) => {
    rows.push(row);

    row.forEach((item, j) => {
      if (!columns[j]) columns[j] = [];
      columns[j].push(item);

      const x = Math.trunc(i / 3);
      const y = Math.trunc(j / 3);
      const blockKey = `${x},${y}`;

      if (!blocks[blockKey]) blocks[blockKey] = [];
      blocks[blockKey].push(item);
    });
  });

  const flattenedBlocks = Object.values(blocks);
  const sumFunc = (acc, cur) => acc + cur;

  for (let i = 0; i < size; i++) {
    if (rows[i].reduce(sumFunc) !== blockSum) return false;
    if (columns[i].reduce(sumFunc) !== blockSum) return false;
    if (flattenedBlocks[i].reduce(sumFunc) !== blockSum) return false;
  }
  return true;
}

/**
 * solution from codewars using sets
 */

function validSolution3(board) {
  const rowSet = i => board[i].reduce((s, v) => s.add(v), new Set());
  const columnSet = i => board.reduce((s, v) => s.add(v[i]), new Set());
  const boxSet = ([r, c]) => board
    .slice(r, r + 3)
    .reduce(
      (s, v) => v.slice(c, c + 3).reduce((s, v) => s.add(v), s),
      new Set(),
    );
  const boxCorner = i => [Math.floor(i / 3) * 3, (i % 3) * 3];

  const validSet = s => s.size === 9 && !s.has(0);
  for (let i = 0; i < 9; i++) {
    if (!validSet(rowSet(i))
      || !validSet(columnSet(i))
      || !validSet(boxSet(boxCorner(i)))
    ) {
      return false;
    }
  }
  return true;
}


/**
 * first old solution without refactoring
 * - don't need breaks inside a for, you can just return
 * - you can verify by sum instead of sorting and checking the order
 */
function validSolutionOld(board) {
  let hasZero = false;
  let isRowCorrect = true;
  let isColumnCorrect = true;
  let isBoxCorrect = true;
  for (let i = 0; i < board.length; i++) {
    // verifying zeros
    hasZero = board[i].includes(0);
    if (hasZero) break;

    // verifying rows
    const currentRow = [...board[i]];
    isRowCorrect = verifyArrayOld(currentRow.sort((a, b) => a - b));
    if (!isRowCorrect) break;

    // verifying columns
    let currentColumn = [];
    for (let j = 0; j < board[i].length; j++) {
      currentColumn = currentColumn.concat(board[j][i]);

      // verifying boxes
      let currentBox = [];
      if (
        (i === 0 || i === 3 || i === 6)
        && (j === 0 || j === 3 || j === 6)
      ) {
        currentBox = currentBox
          .concat(board[i].slice(j, j + 3))
          .concat(board[i + 1].slice(j, j + 3))
          .concat(board[i + 2].slice(j, j + 3));

        isBoxCorrect = verifyArrayOld(currentBox.sort((a, b) => a - b));
        if (!isBoxCorrect) break;
      }
    }

    isColumnCorrect = verifyArrayOld(currentColumn.sort((a, b) => a - b));

    if (!isColumnCorrect) break;
    if (!isBoxCorrect) break;
  }
  if (hasZero) return false;
  if (!isRowCorrect) return false;
  if (!isColumnCorrect) return false;
  if (!isBoxCorrect) return false;

  return true;
}

function verifyArrayOld(array) {
  return !array.find((element, index) => element !== index + 1);
}
