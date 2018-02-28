function ListNode(val) {
  this.val = val;
  this.next = null;
}


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(headA === null || headB === null) 
    return null

  // Start with the first ListNode on headA.
  let a = headA 
  let b = headB

  // A Loop.
  do {
    console.log(a.val)

    // B Loop.
    do {
      console.log(`\t ${b.val}`)
      // Check for a match.
      if(a.val === b.val)
        return(a)

      b = b.next
    } while (b !== null)
   
    // Reset the b pointer.
    b = headB
    a = a.next
  } while (a !== null)
};


// Test the code.
x = new ListNode(1)
x.next = new ListNode(2)
x.next.next = new ListNode(3)
x.next.next.next = new ListNode(4)
x.next.next.next.next = new ListNode(5)

y = new ListNode(3)
y.next = new ListNode(4)
y.next.next = new ListNode(5)

console.log(`Match is: ${getIntersectionNode(x,y).val}`)