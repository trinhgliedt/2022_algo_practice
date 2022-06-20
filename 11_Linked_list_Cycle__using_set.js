// https://leetcode.com/problems/linked-list-cycle-ii/
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

 

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  // ---- Generate our linked list ----
  const linkedList = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null);
  
  let curr = linkedList, cycleNode;
  while(curr.next !== null) {
    if(curr.val === 3) {
      cycleNode = curr;
    }
  
    curr = curr.next;
  }
  
  curr.next = cycleNode;
  // ---- Generate our linked list ----
  
  // --------- Our solution -----------
  const findCycle = function(head) {
    const seenNodes = new Set();
    let currentNode = head;
    
    while(!seenNodes.has(currentNode)) {
      if(currentNode.next === null) {
        return false;
      }
  
      seenNodes.add(currentNode);
  
      currentNode = currentNode.next;
    }
  
    return currentNode;
  }
  
  console.log(findCycle(linkedList));