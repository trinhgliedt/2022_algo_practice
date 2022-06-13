// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string s, find the length of the longest substring without repeating characters.
// var lengthOfLongestSubstring = function(s) {
//     if (s.length <=1) return s.length;
//     let maxChars = 0;
    
//     for (let i = 0; i < s.length; i++){
//         let p1 = i;
//         let seen = [];
//         let currentCharLength = 0;
//         for (p1 = i; p1<s.length; p1++){
//             if (seen.indexOf(s[p1]) == -1){
//                 currentCharLength+=1;
//                 seen.push(s[p1]);
//                 maxChars = Math.max(maxChars,currentCharLength);
//             } 
//             else {
//                 break;
//             }
            
//         }
//     }
    
//     return maxChars;
// };
// Runtime: 1153 ms, faster than 5.01% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 49.2 MB, less than 25.48% of JavaScript online submissions for Longest Substring Without Repeating Characters.

// instructor's solution
// const lengthOfLongestSubstring = function(s) {
//     if(s.length <= 1) return s.length;
    
//     let longest = 0;
    
//     for(let left = 0; left < s.length; left++) {
//       let seenChars = {}, currentLength = 0;

//       for(let right = left; right < s.length; right++) {
//         const currentChar = s[right];

//         if(!seenChars[currentChar]) {
//           currentLength++;
//           seenChars[currentChar] = true;
//           longest = Math.max(longest, currentLength);
//         } else {
//           break;
//         }
//       }
//     }
    
//     return longest;
// };

// optimizing solution
const lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    
    const seen = {};
    let left = 0, longest = 0;

    for(let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const previouslySeenChar = seen[currentChar];
        if (previouslySeenChar >= left){
            left = previouslySeenChar + 1;
        } 
        seen[currentChar] = right;
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
};
// Runtime: 187 ms, faster than 33.23% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 48.7 MB, less than 40.13% of JavaScript online submissions for Longest Substring Without Repeating Characters.

let s0 = "abcbdaac";
// let s1 = "abcabcbb";
// let s2 = "cccc";
// let s3 = "";
// let s4 = "abcbda";
// let s5 = "au";
// let s6="jbpnbwwd";

console.log(lengthOfLongestSubstring(s0));
// console.log(lengthOfLongestSubstring(s1));
// console.log(lengthOfLongestSubstring(s2));
// console.log(lengthOfLongestSubstring(s3));
// console.log(lengthOfLongestSubstring(s4));
// console.log(lengthOfLongestSubstring(s5));
// console.log(lengthOfLongestSubstring(s6));