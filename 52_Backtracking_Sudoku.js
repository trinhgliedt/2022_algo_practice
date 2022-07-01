// https://leetcode.com/problems/sudoku-solver/
// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// 1.	Each of the digits 1-9 must occur exactly once in each row.
// 2.	Each of the digits 1-9 must occur exactly once in each column.
// 3.	Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.
const getBoxId = function (row, col) {
    const rowVal = Math.floor(row / 3) * 3;
    const colVal = Math.floor(col / 3);
  
    return rowVal + colVal;
  };
  
  const isValid = function (box, row, col, num) {
    if (box[num] || row[num] || col[num]) {
      return false;
    } else {
      return true;
    }
  };
  
  const solveBacktrack = function (board, boxes, rows, cols, r, c) {
    // check if the current spot is out of bound
    if (r === board.length || c === board[0].length) {
        // set up a boolean to see if we should continue
      return true;
    } else {
      if (board[r][c] === '.') {
        for (let num = 1; num <= 9; num++) {
            // convert to string, if the question ask for string
          const numVal = num.toString();
          board[r][c] = numVal;
  
          const boxId = getBoxId(r, c);
          const box = boxes[boxId];
          const row = rows[r];
          const col = cols[c];
  
          if (isValid(box, row, col, numVal)) {
            box[numVal] = true;
            row[numVal] = true;
            col[numVal] = true;
            
            // check to see if we're at the last column. 
            if (c === board[0].length - 1) {
              if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
                return true;
              }
            } else {
                // if not last column, then the row stays the same, then move by a column
              if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
                return true;
              }
            }
            
            delete box[numVal];
            delete row[numVal];
            delete col[numVal];
          }
  
          board[r][c] = '.';
        }
      } else {
        // if we reach the end of the for loop, meaning, what if the value already exists (that it's not a '.')
        // then, we'll just move on and solve the next cell
        if (c === board[0].length - 1) {
          if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
            return true;
          }
        } else {
          if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
            return true;
          }
        }
      }
    }
  
    return false;
  };
  
  var solveSudoku = function(board) {
    const n = board.length;
    // boxes, rows and cols are arrays holding values for number already in there, so when we solving the problem we'll know if we violate the contraints
    const boxes = new Array(n), 
          rows = new Array(n), 
          cols = new Array(n);
    
    for(let i = 0; i < n; i++) {
      boxes[i] = {};
      rows[i] = {};
      cols[i] = {};
    }
    
    for(let r = 0; r < n; r++) {
      for(let c = 0; c < n; c++) {
        if(board[r][c] !== '.') {
          const boxId = getBoxId(r, c);
          const val = board[r][c];
          boxes[boxId][val] = true;
          rows[r][val] = true;
          cols[c][val] = true;
        }
      }
    }
    
    solveBacktrack(board, boxes, rows, cols, 0, 0);
  };
  
  const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];
  
  solveSudoku(board);
  board.forEach((row)=>console.log(row));
//   console.log(board);
// Time: for regular Brute force we'll have 9^81. FOr backtracking we got 9 factorical to the power of 9
// Space: O(1)