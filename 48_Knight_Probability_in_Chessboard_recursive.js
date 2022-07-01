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
  if (r < 0 || c < 0 || r >= N || c >= N) {
    return 0;
  }

  if (K === 0) {
    return 1;
  }

  let res = 0;

  for (let dir of DIRECTIONS) {
    // remember, if the knight is in, function will return 1
    res += knightProbability(N, K - 1, r + dir[0], c + dir[1]) / 8;
  }

  return res;
};

console.log(knightProbability(6, 2, 2, 2));
// Time: O(8^k)
// Space: O(8^k)