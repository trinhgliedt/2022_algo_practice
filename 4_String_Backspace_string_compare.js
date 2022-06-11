// https://leetcode.com/problems/backspace-string-compare/

var backspaceCompare = function(s, t) {
    let finals = finalt = "";
    for (let i=0; i<s.length; i++){
        if (s[i] !== "#") {
            finals += s[i];
        } else {
            finals = finals.substring(0,finals.length-1);
        }
    }
    for (let i=0; i<t.length; i++){
        if (t[i] !== "#") {
            finalt += t[i];
        } else {
            finalt = finalt.substring(0,finalt.length-1);
        }
    }
    return finals === finalt;
};
// Runtime: 106 ms, faster than 21.33% of Javascript online submissions for Backspace string Compare.
// Memory Usage: 42.7 MB, less than 58.00% of Javascript online submissions for Backspace string Compare.


const arrayForm = function(str){
    builtArr = [];
    for (let i=0; i<str.length; i++){
        if(str[i] !== "#"){
            builtArr.push(str[i]);
        } else {
            builtArr.pop(str[i]);
        }
    }
    return builtArr;
}
var backspaceCompare = function(s, t) {
    const finals = arrayForm(s);
    const finalt = arrayForm(t);
    if (finals.length !== finalt.length) {
        return false;
    } else {
        for (let i = 0; i<finals.length; i++){
            if (finals[i] !== finalt[i]) {
                return false;
            }
        }
    }
    
    return true;
}
// Runtime: 117 ms, faster than 11.88% of Javascript online submissions for Backspace string Compare.
// Memory Usage: 42.5 MB, less than 69.96% of Javascript online submissions for Backspace string Compare.


var backspaceCompare = function(s, t) {
    let p1 = s.length - 1, p2 = t.length - 1;
    
    while(p1 >= 0 || p2 >= 0) {
        if(s[p1] === "#" || t[p2] === "#") {
            if(s[p1] === "#") {
                let backCount = 2;
                
                while(backCount > 0) {
                    p1--;
                    backCount--;
                    
                    if(s[p1] === "#") {
                        backCount += 2;
                    }
                }
            }
            
            if(t[p2] === "#") {
                let backCount = 2;
                
                while(backCount > 0) {
                    p2--;
                    backCount--;
                    
                    if(t[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {
            if(s[p1] !== t[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    
    return true;
}

let s1='ab#z', t1='az#z'; //true
let s2='abc#d', t2='acc#c'; //false
let s3='x#y#z#', t3='a#'; //true
let s4='a###b', t4='b'; //true
let s5='Ab#z', t5='ab#z'; //false
let s6='Ab#z', t6='ab#z#'; //false
console.log(backspaceCompare(s1,t1)); //true
// console.log(backspaceCompare(s2,t2)); //false
// console.log(backspaceCompare(s3,t3)); //true
// console.log(backspaceCompare(s4,t4)); //true
// console.log(backspaceCompare(s5,t5)); //false