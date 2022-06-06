// Given an array of integers, return the indices of the two numbers that add up to a given target.
// function two_sums(nums, t) {
//     // two pointers
//     let p1 = 0, p2 = 1;
//     for (let p1=0; p1<nums.length; p1++){
//         let target = t-nums[p1];
//         // console.log(p1, "target", target);
//         for (let p2=p1+1; p2<nums.length; p2++){
//             if (nums[p2] === target){
//                 return [p1,p2];
//             }
//         }
//     }
//     return null;
// }
// Leetcode submission result
// Runtime: 153 ms, faster than 30.71% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.5 MB, less than 68.31% of JavaScript online submissions for Two Sum.


const two_sums = function(nums, target) {
    for(let p1 = 0; p1 < nums.length; p1++) {
      
      const numberToFind = target - nums[p1];
  
      for(let p2 = p1 + 1; p2 < nums.length; p2++) {
        if(numberToFind === nums[p2]) {
          return [p1, p2];
        }
      }
    }
  
    return null;
  };
  // Leetcode submission result
  // Runtime: 139 ms, faster than 35.74% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.5 MB, less than 68.31% of JavaScript online submissions for Two Sum.

let nums1 = [1, 3, 7, 9, 2], t1 = 11;
let nums2 = [1, 3, 7, 9, 2], t2 = 25;
let nums3 = [], t3 = 25;
let nums4 = [5], t4 = 5;
let nums5 = [1,6], t5 = 7;
console.log(two_sums(nums1, t1));
console.log(two_sums(nums2, t2));
console.log(two_sums(nums3, t3));
console.log(two_sums(nums4, t4));
console.log(two_sums(nums5, t5));
