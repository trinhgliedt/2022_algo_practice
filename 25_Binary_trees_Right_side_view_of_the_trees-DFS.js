// https://leetcode.com/problems/binary-tree-right-side-view/
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// DFS approach:
// ------- Code to generate our binary tree -------
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(values) {
      const queue = [this];
      let i = 0;
      while (queue.length > 0) {
        let current = queue.shift();
        for (let side of ["left", "right"]) {
          if (!current[side]) {
            if (values[i] !== null) {
              current[side] = new TreeNode(values[i]);
            }
            i++;
            if (i >= values.length) return this;
          }
          if (current[side]) queue.push(current[side]);
        }
      }
      return this;
    }
  }
  
  const tree = new TreeNode(1);
  tree.insert([2,3,4,5,null,6,null,7,null,null,null,null,8,null,null,null]);
  // ------- Code to generate our binary tree -------
  
  // ------- Our Solution -------
  const dfs = (node, currentLevel, result) => {
    if(!node) return;
    if(currentLevel >= result.length) {
      result.push(node.value);
    }
  
    if(node.right) {
      dfs(node.right, currentLevel + 1, result);
    }
    
    if(node.left) {
      dfs(node.left, currentLevel + 1, result);
    }
  }
  
  const rightSideViewDFS = function(root) {
    const result = [];
    
    dfs(root, 0, result);
    return result;
  };
  
  console.log(rightSideViewDFS(tree))

// Time: worst case is when all the children are on the left of the tree. In this case we'll have O(n) time complexity
// Space: O(n)