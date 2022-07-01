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

const recurse = (N, K, r, c, dp) => {
  if (r < 0 || c < 0 || r >= N || c >= N) {
    return 0;
  }

  if (K === 0) {
    return 1;
  }

  if (dp[K][r][c] !== undefined) return dp[K][r][c];

  let res = 0;
  for (let dir of DIRECTIONS) {
    res += recurse(N, K - 1, r + dir[0], c + dir[1], dp) / 8;
  }

  dp[K][r][c] = res;

  return dp[K][r][c];
};

var knightProbability = function(N, K, r, c) {
  // initialize an array of 2D arrays. This array holds the 2D array states at every given step of k. 
  // and we're builing from the top-down. We're building from k is at its maximum steps
  // the crux of the calculation is dependent on k. K is what dictates that there are overlapping steps. Because if you fall on the same place on the board but you're at different k then you can't guaranty that the problability will be the same.
  // K + 1 to convert index 0 
  // initilize an empty array of size k+1. Use the value of the step as the actual index value, so we're skipping index 0.
  // we're filling this array with 0 so we can map over this array. And, for every place in the array we're placing a 2D array. In every single value in these 2D arrays we'll putting undefined, and these are the values representing the different positions we can have on this board at certain step k. 
  const dp = new Array(K + 1).fill(0).map(() => new Array(N).fill(0).map(() => new Array(N).fill(undefined)));
  // Now that we have our dp, we'll pass it into our recursive function call.
  return recurse(N, K, r, c, dp);
};

console.log(knightProbability(6, 2, 2, 2))
// Time: O(n^2 x k)
// Space: O(n^2 x k)