 // Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    let mergeViaMap = function(smaller, larger) {
        // Create return tree.
        return larger.map( (x, i) => {
            if(x === null)
                return smaller[i]

            if(smaller[i] === null || isNaN(smaller[i]))
                return x

            
            return x + smaller[i]
        })
    }

    // Determine which tree is smaller and larger.
    if(t1.lenth >= t2.length) {
        console.log(`t1 is larger.`)
        return mergeViaMap(t2, t1)
    } 

    else {
        console.log(`t2 is larger.`)
        return mergeViaMap(t1,t2)
    }



};

// Test driver code.
let a = [1,3,2,5]
let b = [2,1,3,null,4,null,7]


let c = mergeTrees(a,b)



console.log(`a ${a} and b ${b} merged is ${c}`)