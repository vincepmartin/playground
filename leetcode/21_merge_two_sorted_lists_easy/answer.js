/**
 * ListNode and makeListNode are just for debugging purposes.
 */

// Definition for list node.
let ListNode = function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Make some test objects.
let makeListNode = function(values) {
   let ln = new ListNode(0);
   let p = ln;

   values.forEach( (v, i) => {
       if(i === 0) {
           p.val = v;
       }
       else {
           console.log(`Trying to add ${v}`);
           p.next = new ListNode(v);
           p = p.next;
       }
   });
   console.log(ln);
   return ln;
}

// Print ListNode for debug purposes.
let printListNode = function(listNode) {
    while(listNode !== null) {
        console.log('DERP:' + listNode.val);
        listNode = listNode.next;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // If we have 2 nulls return a null...
    if(l1 === null && l2 === null)
        return null; 
    
    let p = l1; // Pointer for l1.
    let q = l2; // Pointer for l2.
    
    let l3 = new ListNode(0); // Results. 
    let r = l3; // Pointer for l3.

    do {
        // This is probably a dumb way to do this... But check for a null.
        if(p === null && q !== null) {
            console.log(`p is null adding q: ${q.val}`); 
            r.val = q.val;
            if(q.next !== null) {
                r.next = new ListNode(0);
                r = r.next;
            }

            q = q.next;
            continue;
        }
        
        else if(q === null && p !== null) {
            console.log(`q is null, adding p: ${p.val}`); 
            r.val = p.val;
            
            if(p.next !== null) {
                r.next = new ListNode(0);
                r = r.next;
            }
            p = p.next;
            continue;
        }
      
        // If both are null, don't continue this loop.
        if(p === null && q === null) {
            console.log(`p and q are null`);
            break;
        }

        // Do some actual comparing here to fill up the results list.
        else if(p.val <= q.val) {
            r.val = p.val;
            console.log(`${r.val} Iterating p.`);
            p = p.next;
            r.next = new ListNode(0);
            r = r.next;
        }

        else if(q.val <= q.val) {
            r.val = q.val;
            console.log(`${r.val} Iterating q.`);
            q = q.next;
            r.next = new ListNode(0);
            r = r.next;
        }

    } while(true)   

    return l3;
};

// Run tests...
printListNode(makeListNode([1,2,3]));
printListNode(mergeTwoLists(makeListNode([1,2,3,7,8]), makeListNode([4,5,6,9,10])));