
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  return rl(head)
};

let rl = function(pointer) {
  console.log(pointer.val)
  if(pointer.next === null)
    return pointer
  else {
    return rl(pointer.next)
  }
}

let t1 = new ListNode(1)
t1.next = new ListNode(2)
t1.next.next = new ListNode(3)

console.log(reverseList(t1))