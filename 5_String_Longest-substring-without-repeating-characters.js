// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string s, find the length of the longest substring without repeating characters.
var lengthOfLongestSubstring = function(s) {
    if (s.length <=1) return s.length;
    let maxChars = 0;
    
    for (let i = 0; i < s.length; i++){
        let p1 = i;
        let seen = [], subStr = "";
        let currentCharLength = 0;
        for (p1 = i; p1<s.length; p1++){
            if (seen.indexOf(s[p1]) == -1){
                subStr += s[p1];
                currentCharLength+=1;
                seen.push(s[p1]);
                maxChars = Math.max(maxChars,currentCharLength);
            } 
            else {
                break;
            }
            
        }
    }
    
    return maxChars;
};
// Runtime: 1153 ms, faster than 5.01% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 49.2 MB, less than 25.48% of JavaScript online submissions for Longest Substring Without Repeating Characters.
let s1 = "abcabcbb";
let s2 = "cccc";
let s3 = "";
let s4 = "abcbda";
let s5 = "au";
let s6="jbpnbwwd";

console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));
console.log(lengthOfLongestSubstring(s4));
console.log(lengthOfLongestSubstring(s5));
console.log(lengthOfLongestSubstring(s6));