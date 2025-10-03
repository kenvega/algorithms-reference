// 5kyu
// https://www.codewars.com/kata/525caa5c1bf619d28c000335/javascript

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

// my original solution
function isSolved(board) {
  // check if won horizontal
  if (board[0].every((number) => number === 1)) {return 1}
  if (board[1].every((number) => number === 1)) {return 1}
  if (board[2].every((number) => number === 1)) {return 1}
  if (board[0].every((number) => number === 2)) {return 2}
  if (board[1].every((number) => number === 2)) {return 2}
  if (board[2].every((number) => number === 2)) {return 2}
  // check if won vertical
  if ([board[0][0], board[1][0], board[2][0]].every((number) => number === 1)) {return 1}
  if ([board[0][1], board[1][1], board[2][1]].every((number) => number === 1)) {return 1}
  if ([board[0][2], board[1][2], board[2][2]].every((number) => number === 1)) {return 1}
  if ([board[0][0], board[1][0], board[2][0]].every((number) => number === 2)) {return 2}
  if ([board[0][1], board[1][1], board[2][1]].every((number) => number === 2)) {return 2}
  if ([board[0][2], board[1][2], board[2][2]].every((number) => number === 2)) {return 2}
  // check if won diagonal
  if ([board[0][0], board[1][1], board[2][2]].every((number) => number === 1)) {return 1}
  if ([board[0][0], board[1][1], board[2][2]].every((number) => number === 2)) {return 2}
  if ([board[0][2], board[1][1], board[2][0]].every((number) => number === 1)) {return 1}
  if ([board[0][2], board[1][1], board[2][0]].every((number) => number === 2)) {return 2}
  // check if not finished yet
  if (board[0].includes(0) || board[1].includes(0) || board[2].includes(0)) {return -1}
  // else draw
  return 0
}

// to remember
//  remember there are methods for arrays that directly return booleans like '.every' or '.some'

// other solution
const horizontal = (player) => (board) => 
  board.some(row => row.every(spot => spot == player))

const vertical = (player) => (board) => 
  board.some((row, i) => board.every(row => row[i] == player))

const diagonals = (player) => (board) => 
  board.every((row, i) => row[i] == player) || board.every((row, i) => row[3-1-i] == player)

const player = (number) => ({
  wins: (board) => [horizontal, vertical, diagonals].some(full => full(number)(board))
})

const unfinished = (board) =>
  board.some(row => row.some(spot => !spot))

const DRAW = 0


const isSolved = (board) => {switch (true) {
  case player(1).wins (board):
    return 1

  case player(2).wins (board):
    return 2

  case unfinished (board):
    return -1

  default:
    return DRAW
}}


// other solution
const isSolved = board => {
  const rows = [
    board[0],
    board[1],
    board[2],
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    [board[0][0], board[0][1], board[0][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[2][0], board[1][1], board[0][2]],
  ];
  if (rows.some(row => row.every(e => e === 1))) return 1;
  if (rows.some(row => row.every(e => e === 2))) return 2;
  if (board.some(row => row.includes(0))) return -1;
  return 0;
}