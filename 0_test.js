function two_sums(nums, target) {
    let numToFindHmap = {};
    for (let i = 0; i < nums.length; i++) {
        let currentNumToFind = target - nums[i];
        // console.log(numToFindHmap, currentNumToFind);
        
        if (!numToFindHmap[currentNumToFind]) {
            numToFindHmap[currentNumToFind] = [i];
        } 
        else if (numToFindHmap[currentNumToFind] && numToFindHmap[currentNumToFind][numToFindHmap[currentNumToFind].length-1] !== i){
            numToFindHmap[currentNumToFind].push(i);
        }
        // console.log(numToFindHmap[nums[i]], nums[i]);
        if (numToFindHmap[nums[i]] !== undefined && numToFindHmap[nums[i]][0] !== i) {
            return [numToFindHmap[nums[i]][0], i];
        } 
    }
    return [];
}

// console.log(two_sums([2, 7, 11, 15], 9));
console.log(two_sums([3,3], 6));

Runtime: 96 ms, faster than 72.12% of JavaScript online submissions for Two Sum.
Memory Usage: 44.5 MB, less than 14.21% of JavaScript online submissions for Two Sum.