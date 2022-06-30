// https://leetcode.com/problems/time-needed-to-inform-all-employees/
// A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.
// Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure.
// The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.
// The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).
// Return the number of minutes needed to inform all the employees about the urgent news.

// https://replit.com/@ZhangMYihua/Time-taken-to-inform-employees-DFS-solution#index.js
const managersArray = [2, 2, 4, 6, -1, 4, 4, 5];
const informTimeArray = [0, 0, 4, 0, 7, 3, 6, 0];

const numOfMinutes = function(n, headID, managers, informTime) {
  const adjList = managers.map(() => []);
  
  for(let employee = 0; employee < n; employee++) {
    const manager = managers[employee];
    if(manager === -1) continue;
    
    adjList[manager].push(employee);
  }
  
  return dfs(headID, adjList, informTime);
};

const dfs = function(currentId, adjList, informTime) {
    // if employee got no subordinate, then there's nothing to do
  if(adjList[currentId].length === 0) {
    return 0;
  }
  
  let max = 0;
  const subordinates = adjList[currentId];
  for(let i = 0; i < subordinates.length; i++) {
    max = Math.max(max, dfs(subordinates[i], adjList, informTime));
  }
  
  return max + informTime[currentId];
}

console.log(numOfMinutes(8, 4, managersArray, informTimeArray));

// Time: O(3n), or O(n)
// Space: stack, worst case is a long string, O(n). Adjacency list: at most is n arrays. And in each subordinates array, since each employee only got a managers, all the values shown up only once. So O(2n) for the adjacency list. 