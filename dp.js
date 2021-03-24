var solve = function(board) {
  const n = board.length;
  const m = board[0].length;
  for (let i = 1; i < n -1; i++) {
    for (let j = 1; j < m - 1; j++) {
      if (board[i][j] === 'O') {
        if (i - 1 === 0 || i + 1 === n - 1 || j - 1 === 0 || j + 1 === m - 1) {
          console.log([i, j]);
          if (i - 1 === 0) {
            if (board[0][j] !== 'O') {
              board[i][j] = 'X';
            }
          }
          if (i + 1 === n - 1) {
            if (board[n - 1][j] !== 'O') {
              board[i][j] = 'X';
            }
          }
          if (j - 1 === 0) {
            if (board[i][0] !== 'O') {
              board[i][j] = 'X';
            }
          }
          if (j + 1 === m - 1) {
            if (board[i][m - 1] !== 'O') {
              board[i][j] = 'X';
            }
          }
        }
      }
    }
  }
  return board;
};

const board = [
  ['X','X','X','X'],
  ['X','O','O','X'],
  ['X','X','O','X'],
  ['X','O','X','X'],
]

console.log(solve(board));