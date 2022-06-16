// https://leetcode.com/problems/valid-palindrome-ii/
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

var validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return validSubPalindrome(s, start + 1, end) || validSubPalindrome(s, start, end - 1);
        }
        start++;
        end--;
    }
    return true;
  };
  
  var validSubPalindrome = function(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
  };
//   Runtime: 88 ms, faster than 83.15% of JavaScript online submissions for Valid Palindrome II.
//   Memory Usage: 48.1 MB, less than 63.75% of JavaScript online submissions for Valid Palindrome II.

const s1 = "aba"; //true
const s2 = "abca"; //true
// Explanation: You could delete the character 'c'.
const s3 = "abc"; //false
const s4 = "ab"; //true
//          0123456789

// console.log(validPalindrome(s1));
// console.log(validPalindrome(s2));
// console.log(validPalindrome(s3));
console.log(validPalindrome(s4));
