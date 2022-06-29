// https://leetcode.com/problems/number-of-islands/
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
const testMatrix = [
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1]
  ];
  
  const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
  ]
  
  const numberOfIslands = function(matrix) {
    if(matrix.length === 0) return 0;
    let islandCount = 0;
  
    for(let row = 0; row < matrix.length; row++) {
      for(let col = 0; col < matrix[0].length; col++) {
        if(matrix[row][col] === 1) {
          islandCount++;
          matrix[row][col] = 0;
        //   using an array for queue because Javascript doesn't have a native queue implementation. Understand that the shift method is O(n) because it needs to shift all the remaining values over
          const queue = [];
          queue.push([row, col]);
  
          while(queue.length) {
            const currentPos = queue.shift();
            const currentRow = currentPos[0];
            const currentCol = currentPos[1];
  
            for(let i = 0; i < directions.length; i++) {
              const currentDir = directions[i];
              const nextRow = currentRow + currentDir[0];
              const nextCol = currentCol + currentDir[1];
  
              if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) continue;
            //   "continue" in a while loop means to break out of the current iteration of the while loop, and go to the next iteration
  
              if(matrix[nextRow][nextCol] === 1) {
                queue.push([nextRow, nextCol]);
                matrix[nextRow][nextCol] = 0;
              }
            }
          }
        }
      }
    }
  
    return islandCount;
  }
  
  console.log(numberOfIslands(testMatrix));
// Time: O(2n), or O(n). All the BFS combined only touch all the elements once, since we flip them to 0 after we're encountered them. Or O(mxn), while m is the size of inside arrays, and n is the outside arrays. Or we can say O(n) where n is the number of all the nodes
// Space: BFS only happens when we encountered a 1.  Worst case scenario is when we have an array with all 1s. The max number of node that's held in the queue is the diagonal, which is O(max(m.n))