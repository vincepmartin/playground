
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null)
        return null
    return rl(head)
};

let rl = function(head) {
    // The base case is a node with no next value.
    if(head.next === null) {
        return head 
    }

    // Split into first node and then the rest. 
    let f = new ListNode(head.val)
    let r = rl(head.next)
    
    // Move pointer and swap. 
    let p = r
    while(true) {
        // Move to the last node in the list node.
        if(p.next !== null) {
            console.log(`val of p: ${p.val}`) 
            p = p.next
        }
        // Once there add the first value to the end of it.
        else{
            p.next = new ListNode(f.val)
            break
        }
    }

    return r
}

let plist = function(node) {
    let pointer = node
    
    while(pointer !== null) {
        console.log(pointer.val)
        pointer = pointer.next
    }
}

let t1 = new ListNode(1)
t1.next = new ListNode(2)
t1.next.next = new ListNode(3)
t1.next.next.next = new ListNode(4)

console.log(reverseList(t1))
plist(reverseList(t1))
