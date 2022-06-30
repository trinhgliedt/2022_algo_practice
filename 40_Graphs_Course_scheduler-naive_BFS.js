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

const canFinish = function(n, prerequisites) {
    // generate an array with n size, fill it with 0. Then, map over the number of element, place an empty array in their spots
    // we can't call .fill on an empty array cos new Array only allocate space for the array. Section 29. 153
  const adjList = new Array(n).fill(0).map(() => []);

  // Create an adjacency list: loop over the prerequisites array, at the position of the prerequisite class, push in the main class
  // time: at least p
  // space: n
  for(let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0])
  }

  // n is number of courses. Time: If each node connects to every other node except the node it came from, then this can go up to n time.
  for(let v = 0; v < n; v++) {
    const queue = [];
    const seen = {};
    // fill in our queue with initial values
    for(let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }
    
    // time: n
    while(queue.length) {
      const current = queue.shift();
      seen[current] = true;

      // If this vertex is the same as current node, this means we have a loop. That means we can't finish all the courses
      if(current === v) return false;
      const adjacent = adjList[current];
      // time: n
      for(let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if(!seen[next]) {
          queue.push(next);
        }
      }
    }
    // time: n x n
  }

  return true;
};

console.log(canFinish(6, p));

// Time: O(p+n3)
// Space: O(n2)