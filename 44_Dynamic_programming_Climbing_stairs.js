// https://leetcode.com/problems/min-cost-climbing-stairs/
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.
/*
Recurrence relation:

minCost(i) = cost[i] + min(minCost(i - 1), minCost(i - 2));
minCost(0) = cost[0];
minCost(1) = cost[1];

*/


const minCostClimbingStairs = function(cost) {
    const n = cost.length;
    return Math.min(minCost(n - 1, cost), minCost(n - 2, cost));
  };
  
  const minCost = function(i, cost) {
    if(i < 0) return 0;
    if(i === 0 || i === 1) return cost[i];
    return cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));
  }
  
  console.log(minCostClimbingStairs([20, 15, 30, 5]))
//   time: 2(^n)
// s: One quick correction, our recursive solution has a space complexity of O(N) not O(2^N) as I mention in the video! The call stack only contains calls of a single branch down to the bottom of our binary tree at worst so while there are still 2^N calls being made, the callstack will only ever be as large as N in size (which is the path that walks the maximum height of the tree when we take every single step available to the top)!