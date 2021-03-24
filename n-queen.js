const isSafe = (board, row, col) => {
    for (let i = col; i >= 0; i--) {
        if (board[row][i]) return false;
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) return false;
    }

    for (let i = row, j = col; i <= row && j >= 0; i++, j--) {
        if (board[i][j]) return false;
    }

    return true;
}

const solveNQUtil = (board, col) => {
    console.table(board);
    if (col >= board.length) return true;

    for (let i = 0; i < board.length; i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = 1;
            
            if (solveNQUtil(board, col + 1)) return true;

            board[i][col] = 0;
        }
    }

    return false;
}

const solveNQueenProblem = board => {
    solveNQUtil(board, 0);
    return board;
}

const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

console.table(solveNQueenProblem(board));