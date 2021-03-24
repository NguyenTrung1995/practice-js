// 1. Count Square Submatrices with All Ones

const matrix = [
  [1,0,1],
  [1,1,0],
  [1,1,0]
];

var countSquares = function (matrix) {
  let ans = 0;
  const n = matrix.length;
  const m = matrix[0].length;
  for (let i = 0; i < m; i++) {
    ans += matrix[n - 1][i];
  }
  for (let i = 0; i < n; i++) {
    ans += matrix[i][m - 1];
  }
  ans -= matrix[n - 1][m - 1];
  for (let i = n - 2; i >= 0; i--) {
    for (let j = m - 2; j >= 0; j--) {
      matrix[i][j] = matrix[i][j] === 1 ? 1 + Math.min(matrix[i + 1][j + 1], matrix[i][j + 1], matrix[i + 1][j]) : 0;
      ans += matrix[i][j];
    }
  }
  return ans;
};

// 2. Check If It Is a Straight Line

var checkStraightLine = function(coordinates) {
  for (let i = 1; i < coordinates.length - 1; i++) {
    const x1 = coordinates[i - 1][0];
    const y1 = coordinates[i - 1][1];
    const x2 = coordinates[i][0];
    const y2 = coordinates[i][1];
    const x3 = coordinates[i + 1][0];
    const y3 = coordinates[i + 1][1];
    if (((x2 - x1 !== 0) && (x3 - x2 !== 0)) && (y2 - y1)/(x2 - x1) !== (y3 - y2)/(x3 - x2)) {
      return false;
    }
  }
  return true;
};

console.log(checkStraightLine([[0,0],[0,1],[0,-1]]));