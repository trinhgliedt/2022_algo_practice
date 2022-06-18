// https://leetcode.com/problems/reverse-linked-list-ii/
// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]
 
class ListNode {
    constructor(val, next=null){
        this.val = val;
        this.next = next;
    }

}

// Creating our linked list.
// const linkedList = [5,4,3,2,1].reduce((node, val)=> new ListNode(val, node), null);
const linkedList = function(arr){
    return arr.reduce((node, val)=> new ListNode(val, node), null);
}

const printList = function(head){
    if (!head) return;
    console.log(head.val);
    printList(head.next);
}

// --------- Our solution -----------

var reverseBetween = function(head, left, right){
    let current = head, prev = null;
    let firstHead = current, firstTail = current, thirdHead = current, secondHead = current, secondTail = current;
    
    if (left > 1){
        for (let L = 0; L < left-1; L++){
            if (L==left-2) firstTail = current;
            current = current.next;
        }
        firstTail.next = null;
        secondHead = current;
    }
        for (let M = left-1; M <= right-1; M++){
            let nextTemp = current.next;
            if (M == right -1){
                thirdHead = current.next;}
            current.next = prev;
            prev = current;
            if (M < right -1) {
                current = nextTemp;}
        }
    secondTail = current;
    firstTail.next = secondTail;
    secondHead.next = thirdHead;
    if (left == 1){
        return prev;
    } else {
        return firstHead;
    }
};
// Yay, my own solution!!!
// Runtime: 82 ms, faster than 49.95% of JavaScript online submissions for Reverse Linked List II.
// Memory Usage: 42.4 MB, less than 22.88% of JavaScript online submissions for Reverse Linked List II.

// Instructor's solution
var reverseBetween = function(head, m, n) {
    let currentPos = 1, currentNode = head;
    let start = head;
    
    while(currentPos < m) {
      start = currentNode;
      currentNode = currentNode.next;
      currentPos++;
    }
    
    let newList = null, tail = currentNode;
    
    while(currentPos >= m && currentPos <= n) {
      const next = currentNode.next;
      currentNode.next = newList;
      newList = currentNode;
      currentNode = next;
      currentPos++;
    }
    
    start.next = newList;
    tail.next = currentNode;
    
    if(m > 1) {
      return head
    } else {
      return newList;
    }
  };
//   Runtime: 59 ms, faster than 95.20% of JavaScript online submissions for Reverse Linked List II.
// Memory Usage: 42.2 MB, less than 43.96% of JavaScript online submissions for Reverse Linked List II.
function processReverse(arr, m, n){
    printList(linkedList(arr));
    console.log('after reverse')
    printList(reverseBetween(linkedList(arr), m, n))
}
let arr1 = [5,4,3,2,1];
// let arr1 = [5,4,3,2,1];
// processReverse(arr1, 2, 4);
processReverse(arr1, 2, 5);


// 1 -> 2 -> 3 -> 4 -> 5 , left = 2, right = 4 
// Output: 1 -> 4 -> 3 -> 2 -> 5