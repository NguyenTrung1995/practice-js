var orangesRotting = function(grid) {
  let flagChange;
  let n = grid.length;
  let m = grid[0].length;
  let time = 0;
  const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const isAnyFresh = (grid) => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 1) return true;
      }
    }
    return false;
  }
  do {
      for (let i = 0; i < n; i++) {
          for (let j = 0; j < m; j++) {
              if (grid[i][j] === 2) {
                  for (const d of direction) {
                    if (grid[i + d[0]] && grid[i + d[0]][j + d[1]] === 1) {
                      grid[i + d[0]][j + d[1]] = 2;
                    }
                  }
              }
              if (flagChange) time++;
          }
      }
      console.log(grid);
      if (!time && !flagChange && isAnyFresh(grid)) return -1;
  } while (flagChange);
  return time;
};

const grid = [[1,1,2,0,2,0]];

console.log(orangesRotting(grid))

