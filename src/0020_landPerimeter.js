function landPerimeter(arr) {
  let response = 0;
  arr.forEach((line, hIndex) => {
    line.split('').forEach((e, vIndex) => {
      if (e === 'X') response += (4 - countNeighbors(hIndex, vIndex, arr));
    });
  });
  return response;
}

function countNeighbors(i, j, arr) {
  let count = 0;
  // up
  if (arr[i - 1] && arr[i - 1][j] && arr[i - 1][j] === 'X') count++;
  // left
  if (arr[i][j - 1] && arr[i][j - 1] === 'X') count++;
  // right
  if (arr[i][j + 1] && arr[i][j + 1] === 'X') count++;
  // below
  if (arr[i + 1] && arr[i + 1][j] && arr[i + 1][j] === 'X') count++;
  return count;
}

console.log(landPerimeter(
  ['XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'],
)); // 24
