// Given a linked list, return it in reverse.
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

const printList = (head) => {
    if (!head) {
        return;
    }

    console.log(head.val);
    printList(head.next);
}

// --------- Our solution -----------

var reverseList = function (head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
};

printList(linkedList);
console.log('after reverse')
printList(reverseList(linkedList))

// 1 -> 2 -> 3 -> 4 -> 5 -> null 
// null <- 1 <- 2 -> 3 -> 4 -> 5