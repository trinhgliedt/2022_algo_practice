// https://leetcode.com/problems/container-with-most-water/

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

// real question: find the maximum difference between x position multiplied by the height
var maxArea = function(height) {
    let maxA = 0, p1 = 0;
    while (p1 <= height.length-2) {
        let p2 = p1+1;
        while (p2 <= height.length-1){
            const area = Math.min(height[p1], height[p2])*(p2-p1);
            if (area > maxA) maxA = area;
            // console.log("height[p1]:", height[p1], ", height[p2]:", height[p2], ", maxA:", maxA);
            p2++;
        }
        p1++;
    }
    return maxA;
};
// The function above works, but it's too slow and exceeded time limit on leetcode

var maxArea = function(height) {
    let maxWater = 0;
    for (let p1 = 0; p1 < height.length; p1++) {
        for (let p2 = p1 + 1; p2 < height.length; p2++){
            const minHeight = Math.min(height[p1], height[p2]);
            const water = minHeight*(p2-p1);
            maxWater = Math.max(water, maxWater);
        }
    }
    return maxWater;
};
// The function above works, but it's too slow and exceeded time limit on leetcode

var maxArea = function(height) {
    let maxWater = 0, i = 0, j = height.length-1;
    while (i < j){
        let minHeight = Math.min(height[i],height[j]);
        let water = minHeight*(j-i);
        maxWater = Math.max(water,maxWater);
        if (height[i] < height[j]) i++;
        else j--;
    }
    return maxWater;
};
// if value at i is smaller than j, move the smaller pointer forward, cos we want to keep the larger value to compare with the new value of the other pointer. Because if it’s the small edge of the 2, the only way for it to get bigger is to find a bigger edge
// Runtime: 87 ms, faster than 76.08% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 48.9 MB, less than 97.37% of JavaScript online submissions for Container With Most Water.

let h1 = [7, 1, 2, 3, 9]; 
//        0  1  2  3  4
// length = 5
let h2 = [];
let h3 = [5];
let h4= [1,8,6,2,5,4,8,3,7];
console.log(maxArea(h1));
// console.log(maxArea(h2));
// console.log(maxArea(h3));
console.log(maxArea(h4));
