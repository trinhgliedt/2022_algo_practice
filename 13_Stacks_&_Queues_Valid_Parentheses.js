// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
                                                                                                                                                
const string = "{()[]}"
// use a hashmap to store the matching brackets
const parens = {
    '(': ')',
    '{' : '}',
    '[': ']'
}

var isValid = function(s) {
  if(s.length === 0) return true;
  
//   store left brackets in stack
  const stack = [];
  
  for(let i = 0; i < s.length; i++)  {
    if(parens[s[i]]) {
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];
      if(s[i] !== correctBracket) return false
    }
  }
  
  return stack.length === 0;
};
// Runtime: 92 ms, faster than 42.04% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 42 MB, less than 73.32% of JavaScript online submissions for Valid Parentheses.

console.log(isValid(string));


let s1="{([])}" //true
let s2="{[[]" //false
let s3="{[[])}" //false
let s4="{[]()}" //true