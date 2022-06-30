// https://leetcode.com/problems/course-schedule/
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.
// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
const p = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

const canFinishWithAdj = function(n, prerequisites) {
  const inDegree = new Array(n).fill(0);
  const adjList = inDegree.map(() => []);
  
  // time: P
  for(let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    inDegree[pair[0]]++;
    adjList[pair[1]].push(pair[0])
  }
  
  const stack = [];
  // get all the nodes with indegree of 0 and add them the list
  // Time: n
  for(let i = 0; i < inDegree.length; i++) {
    if(inDegree[i] === 0) {
      stack.push(i);
    }
  }
  
  // keep a count of what we process. If at the end, what we process is less than n, then there are some nodes we didn't touch, which means there's a cycle
  let count = 0;
  
  // Time: n
  while(stack.length) {
    const current = stack.pop();
    count++;
    
    const adjacent = adjList[current];
    // loop through the adjacency list of this node and reduce their indegree value by 1
    // time: n
    for(let i = 0; i < adjacent.length; i++) {
      const next = adjacent[i];
      inDegree[next]--;
      // if the reduction leads to 0 indegree, then push it in to the 0 indegree list
      if(inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }
  
  return count === n;
};

canFinishWithAdj(6, p)
// Time: O(p + n2)
// Space: O(n2)