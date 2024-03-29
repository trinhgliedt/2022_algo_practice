// https://leetcode.com/problems/walls-and-gates/

// https://replit.com/@ZhangMYihua/Walls-and-Gates-Solution#index.js

const INF = 2147483647;

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF]
];

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
// This is the infinity value that the problem gave us. In Javascript we can also use the Infinity keyword for value
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const dfs = (grid, row, col, count) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || count > grid[row][col]) return
  grid[row][col] = count
  for(let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(grid, row + currentDir[0], col + currentDir[1], count + 1);
  }
}


const wallsAndGates = (rooms) => {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === GATE) dfs(rooms, row, col, 0)
    }
  }
};

wallsAndGates(testMatrix)
testMatrix.forEach((row)=>console.log(row));
// console.log(testMatrix);
// Time: O(n). 
// Space: Our stack can be the entirely of the array. O(n)