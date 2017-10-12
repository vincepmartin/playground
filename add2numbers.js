// Definition for list node.
let ListNode = function ListNode(val) {
     this.val = val;
     this.next = null;
 }

// Make some test objects.
let makeListNode = function(values) {
    let ln = new ListNode(0); 
    values.forEach( (v, i) => {
        if(i === 0) {
            ln.val = v;
        }
        else {
            ln.next = new ListNode(v);
        }
    });

    console.log(ln);
    return ln;
}

// Output for debug.
var outputListNode = function(n) {
    t = n;

    while(true){
        console.log(`Current value ${t.val} next ${t.next}`);
        if(t.next !== null)
            t = t.next;
    
        else{
            break;
        }
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    // define some temporary ListNodes to store the current node.
    let t1 = l1;
    let t2 = l2;
    let l3 = new ListNode(0);
    let t3 = l3;
    let tempSum = 0;
        
    while(true) {        
      tempSum = t1.val + t2.val + t3.val;
      console.log(`${t1.val} + ${t2.val} + ${t3.val} = ${tempSum}`);
        
      // Value greater than 10, handle the carry-over.
      if(tempSum >= 10) {
          t3.val = tempSum % 10;
          t3.next = new ListNode(1);
      }

      // Value less than 10, plop a 0 into the next value.
      else {
          t3.val = tempSum;
          if(t1.next != null || t2.next != null)
            t3.next = new ListNode(0);
      }

      // Should we continue doing stuff?
      // No, end the loop.
      if(t1.next == null && t2.next == null) {
        console.log(`Both are null`); 
        break;
      }
      
      // We have more math to do, iterate our temp nodes.
      else {
        console.log(`incrementing values.`);
        // Iterate to the next node.
        t1 = t1.next || new ListNode(0);
        t2 = t2.next || new ListNode(0);
        t3 = t3.next || new ListNode(0);
      }
    }
    
    return l3;
};

// Test!
console.log(addTwoNumbers(makeListNode([1,8]), makeListNode([0])));
function newFunction(ln) {
    return ln;
}
