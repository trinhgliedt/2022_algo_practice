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
// console.log(twoSum([2,7,11,15], 9));
// So the function above got a space complexity of O^1, but a time complexity of O(n^2)
// This is because the function contains a nested loop that iterates through the array twice, resulting in an overall time complexity of O(n^2). Specifically, the outer loop iterates through each element of the array, while the inner loop iterates through the remaining elements to find a matching pair that sums to the target value.

// SOLUTION 2:
// While iterating through the array, we'll save the value that's already seen
// then, along the way, every step we take we'll look back into the dictionary to see if there's a match in the past values
// So, the dictionary will need to contain the index and value of the seens
var twoSum2 = function(nums, target){
  // seen: object to store the values we've iterated to. 
  // keys: the number, values:the index
  // if there's more than one number of the same value, then it's ok to replace the old index with the new one
  let seen = {};
   for (let i=0; i<nums.length; i++){
    // in each iteration, find out what the target paired value is
    let targetValue = target - nums[i];
    // then, look up the seen oabject. If the target is in there then return the value. Job is done
    if (seen.hasOwnProperty(targetValue)){
      return [seen[targetValue],i];
    }
    // ok, if we are here, then the seen object didn't have the target value.
    // so now our job is to store the current value in the seen object
    seen[nums[i]] = i;
   }
  //  if we're at the end of the iteration, that means we can't find any match.
  return [-1,-1];
}
console.log(twoSum2([2,7,11,15], 9));
// The time complexity of this function is O(n) because it iterates through the nums array once.

// The space complexity is also O(n) because the seen object can potentially store all the elements in the nums array. In the worst case scenario where there are no two elements that add up to the target, the seen object will store all the elements in the nums array, which is equal to the space complexity of O(n).