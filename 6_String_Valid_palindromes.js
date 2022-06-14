// https://leetcode.com/problems/valid-palindrome/
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome1 = function(s) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let left = 0, right = s.length-1;
    while (left<=right){
        while(letters.indexOf(s[left]) < 0){
            left++;
        }
        while (letters.indexOf(s[right]) < 0){
            right--;
        }
        if (s[left].toLowerCase() === s[right].toLowerCase()){
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};
// Function above works, but it exceeeds time limit

var isPalindrome2 = function(s) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    let alphanumericStr = "";
    for (let i = 0; i < s.length; i++){
        if (letters.includes(s[i])){
            alphanumericStr+= s[i].toLowerCase();
        } 
    }
    // console.log(alphanumericStr);
    if (alphanumericStr.length <=1) return true;
    let left = 0, right = alphanumericStr.length-1;
    while (left<=right){
        // console.log(alphanumericStr[left], alphanumericStr[right])
        if (alphanumericStr[left] === alphanumericStr[right]){
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};
// Runtime: 154 ms, faster than 9.55% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 48.4 MB, less than 23.64% of JavaScript online submissions for Valid Palindrome.

var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    if (s.length <=1) return true;
    let left = 0, right = s.length-1;
    while (left < right){
        // console.log(s[left], s[right])
        if (s[left] === s[right]){
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};
// Runtime: 109 ms, faster than 41.25% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 44.2 MB, less than 86.38% of JavaScript online submissions for Valid Palindrome.

const s1 = "A man, a plan, a canal: Panama"; //true
const s2 = "race a car"; //false
const s3 = ""; //true
console.log(isPalindrome(s1));
// console.log(isPalindrome(s2));
// console.log(isPalindrome(s3));
