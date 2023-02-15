const testMatrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
  ];
  
  const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
  ]
  
  const traversalDFS = function(matrix) {
    const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));
    //   matrix.length).fill(0) is to build the outside array.
    // new Array(matrix[0].length).fill(false) is to build the inside array
    //   The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
  
    // values is an array to hold the values as we explore
    const values = [];
  
    dfs(matrix, 0, 0, seen, values);
    // 0, 0 are the row, col to begin dfs
  
    return values;
  }
  
  const dfs = function(matrix, row, col, seen, values) {
    if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return;
    
    seen[row][col] = true;
    values.push(matrix[row][col]);
  
    for(let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
    }
  }
  
  console.log(traversalDFS(testMatrix));
//  Time: O(N) due to the call stack from recursion
// Space: O(n)