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
  const dp = [];

  return Math.min(minCost(n-1, cost, dp), minCost(n-2, cost, dp));
};
const minCost = function(i, cost, dp){
    if (i < 0) return 0;
    if (i === 0 || i === 1) return cost[i];
    if (dp[i] !== undefined) return dp[i];
    dp[i] = cost[i] + Math.min(minCost(i-1, cost, dp), minCost(i-2, cost, dp));
    return dp[i];
}

console.log(minCostClimbingStairs([20, 15, 30, 5]))
