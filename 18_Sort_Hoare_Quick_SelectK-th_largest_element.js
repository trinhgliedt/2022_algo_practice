// https://leetcode.com/problems/kth-largest-element-in-an-array/
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k =4
// Output: 4

const array = [5,3,1,6,4,2];
const kToFind = 4;
// [1,2,3,4,5,6]

const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const getPartition = function (nums, left, right) {
  const pivotElement = nums[right];
  let partitionIdx = left;

  for (let j = left; j < right; j++) {
    if (nums[j] <= pivotElement) {
      swap(nums, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(nums, partitionIdx, right)

  return partitionIdx;
    //   partitionIdx is the postion where the item is placed correctly. Meaning all the items on the left of it is smaller than, and on the right are larger.
};

const quickSelect = function (nums, left, right, kToFind) {
  if(left < right) {
    const partitionIndex = getPartition(nums, left, right);
    if ((partitionIndex + 1) < kToFind) {
      quickSelect(nums, partitionIndex + 1, right);
    } else if ((partitionIndex + 1) > kToFind) {
      quickSelect(nums, left, partitionIndex - 1);
    }
  }
};

var findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k;
  quickSelect(nums, 0, nums.length - 1, k);
  return nums[indexToFind]
};

console.log(findKthLargest(array, kToFind))
