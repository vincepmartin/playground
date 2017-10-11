/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    // define a list for results with a first default value of 0.
    let t1 = l1;
    let t2 = l2;
    let l3 = ListNode(0);
    let tempSum = 0;

    while(t1.val !== null || t2.val !== null) {
        console.log(`t1 ${t1.val} + t2 ${t2.val} + l3 ${l3.val}`);
        
        tempSum = t1.val + t2.val + l3.val;

        // Value greater than 10, handle the carry-over.
        if(tempSum >= 10) {
            l3.val = tempSum % 10;
            l3.next(ListNode(1));
        }

        // Value less than 10, plop a 0 into the next value.
        else {
            l3.val = tempSum;
            l3.next(ListNode(0));
        }

        // Iterate to the next item.
        t1 = t1.next;
        t2 = t2.next;
    }
};