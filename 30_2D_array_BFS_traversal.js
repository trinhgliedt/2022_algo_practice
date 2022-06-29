const testMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const traversalBFS = function (matrix) {
  const seen =
    new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));
  //   matrix.length).fill(0) is to build the outside array.
  // new Array(matrix[0].length).fill(false) is to build the inside array
  //   The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

  // values is an array to hold the values as we explore
  const values = [];

  const queue = [[0, 0]];

  while (queue.length) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];

    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) {
      continue;
    }

    seen[row][col] = true;
    values.push(matrix[row][col]);

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      queue.push([row + currentDir[0], col + currentDir[1]]);
    }
  }

  return values;
}

console.log(traversalBFS(testMatrix));

// Space: O(n)
// Time: O(n)