// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Find start and end of target - O(logN)
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
const array = [1,3,3,5,5,5,8,9];
const targetToFind = 5;

const binarySearch = (nums, left, right, target) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = nums[mid];
    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const searchRange = function (nums, target) {
  if (nums.length < 1) return [-1, -1];
  const firstPos = binarySearch(nums, 0, nums.length - 1, target);

  if (firstPos === -1) return [-1, -1];

  let endPos = firstPos,
    startPos = firstPos,
    temp1,
    temp2;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = temp1;

  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = temp2;

  return [startPos, endPos];
};

console.log(searchRange(array, targetToFind))
// space: O(1)
// time: O(logN) 