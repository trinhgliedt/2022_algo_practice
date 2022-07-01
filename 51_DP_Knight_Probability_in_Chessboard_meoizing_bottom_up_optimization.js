// https://leetcode.com/problems/knight-probability-in-chessboard/
// On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves. The rows and columns are 0-indexed, so the top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1).

// A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.
// Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
// The knight continues moving until it has made exactly k moves or has moved off the chessboard.
// Example 1:

// Input: n = 3, k = 2, row = 0, column = 0
// Output: 0.06250
// Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
// From each of those positions, there are also two moves that will keep the knight on the board.
// The total probability the knight stays on the board is 0.0625.
// Example 2:

// Input: n = 1, k = 0, row = 0, column = 0
// Output: 1.00000

// 0 <= r < N, 0 <= c < N, k > 1
// probability(r, c, k) = Σ(x, y)∈Directions probability(r + x, c + y, k - 1) / 8

// r < 0 || r > N, c < 0 || c > N
// probability(r, c, k) = 0
/*
reccurence relation:
Directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

0 >= r < N, 0 >= c < N, k === 0
probability(r, c, k) = 1

0 >= r < N, 0 >= c < N, k > 1
probability(r, c, k) = Σ(x, y)∈Directions probability(r + x, c + y, k - 1) / 8

r < 0 || r > N, c < 0 || c > N
probability(r, c, k) = 0

 */

const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

var knightProbability = function(N, K, r, c) {
  let prevDp = new Array(N).fill(0).map(() => new Array(N).fill(0));
  let nextDp = new Array(N).fill(0).map(() => new Array(N).fill(0));

  prevDp[r][c] = 1;
  for (let step = 1; step <= K; step++) {
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        for (let i = 0; i < DIRECTIONS.length; i++) {
          const currentDirection = DIRECTIONS[i];
          const prevRow = row + currentDirection[0];
          const prevCol = col + currentDirection[1];
          if (prevRow >= 0 && prevRow < N && prevCol >= 0 && prevCol < N) {
            nextDp[row][col] =
              nextDp[row][col] + prevDp[prevRow][prevCol] / 8;
          }
        }
      }
    }
    prevDp = nextDp;
    nextDp = new Array(N).fill(0).map(() => new Array(N).fill(0));
  }

  let res = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      res += prevDp[i][j];
    }
  }

  return res;
};

console.log(knightProbability(6, 2, 2, 2))
// Time:  O(k.N^2)
// Space: O(n^2 . k)