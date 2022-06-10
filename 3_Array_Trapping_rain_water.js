
// https://leetcode.com/problems/trapping-rain-water/ 
var trap = function (height) {
  let totalWater = 0;

  for (let p = 0; p < height.length; p++) {
    let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, height[leftP]);
      leftP--;
    }

    while (rightP < height.length) {
      maxRight = Math.max(maxRight, height[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - height[p];

    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};
// LeetcodeL Time exceeded limit


// Optimize solution: Cut down time from the while loop 


const getTrappedRainwater = function(height) {

  let left = 0, right = height.length - 1, totalWater = 0, maxLeft = 0, maxRight = 0;
  
  while(left < right) {
    if(height[left] <= height[right]) {
      if(height[left] >= maxLeft) { 
        maxLeft = height[left]
      } else { 
        totalWater += maxLeft - height[left];
      }
      left++;
    } else {
      if(height[right] >= maxRight) {
          maxRight = height[right];
      } else {
          totalWater += maxRight - height[right];
      }
        
      right--;
    }
  }

  return totalWater;
}
// Runtime: 78 ms, faster than 75.97% of JavaScript online submissions for Trapping Rain Water.
// Memory Usage: 42.7 MB, less than 82.54% of JavaScript online submissions for Trapping Rain Water.

let h1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// --> output: 6
console.log(trap(h1));