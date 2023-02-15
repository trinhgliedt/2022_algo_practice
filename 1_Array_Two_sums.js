// https://leetcode.com/problems/two-sum/submissions/

// Given an array of integers, return the indices of the two numbers that add up to a given target.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// SOLUTION 1
var twoSum = function(nums, target) {
    // strategry:
    // when we're at an index, we know that index value and the sum, which means the number to look for is sum - value
    // --> iterate through the array, at each spot, know what the target is. 
    // Then, do another loop from that index to the end to find a matching target value.
    // If matched, return the 2 indexes
    // note that, the question asks for the indexes, not value
    for (let i=0; i < nums.length; i++){
      let searchingValue = target - nums[i];
      for (let j=i+1; j < nums.length; j++){
        if (nums[j] === searchingValue){
          return [i,j];
        }
      }
    }
    return [-1,-1];
};
console.log(twoSum([2,7,11,15], 9));
// So the function above got a space complexity of O^1, but a time complexity of O(n^2)
// This is because the function contains a nested loop that iterates through the array twice, resulting in an overall time complexity of O(n^2). Specifically, the outer loop iterates through each element of the array, while the inner loop iterates through the remaining elements to find a matching pair that sums to the target value.

// SOLUTION 2:
// While iterating through the array, we'll save the value that's already seen
// then, along the way, every step we take we'll look back into the dictionary to see if there's a match in the past values
// So, the dictionary will need to contain the index and value of the seens