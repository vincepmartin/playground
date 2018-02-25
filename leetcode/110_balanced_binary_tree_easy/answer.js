 // Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

/**
 * 
 * @param {node} recursive 
 */
let getDepth = function(node) {
    if(node == null)
        // return {left: 0, right: 0};
        return null 

    let depth = {
        /*
        left: getDepth(node.left).left + 1,
        right: getDepth(node.right).right + 1
        */

        left: (getDepth(node.left) === null) ? 0 : getDepth(node.left).left + 1,
        right: (getDepth(node.right) === null) ? 0 : getDepth(node.right).right + 1
    }

    return depth
}

/**
 * Test depth.
 */
let isBalanced = function(node) {
    let depth = getDepth(node)
    console.log(`Depth is: ${depth.left} by ${depth.right}`) 
    if(Math.abs(depth.left - depth.right) > 1) {
        console.log('unbalanced')
        return false 
    }
    else {
        console.log('balanced')
        return true 
    }
}

// Test
let test1 = new TreeNode(1)
test1.left = new TreeNode(2)
test1.right = new TreeNode(3)

let test2 = new TreeNode(3)
test2.left = new TreeNode(9)
test2.right = new TreeNode(20)
test2.right.right = new TreeNode(7)
test2.right.left = new TreeNode(15)

let test3 = new TreeNode(1)
test3.left = new TreeNode(2)
test3.left.left = new TreeNode(3)
test3.left.right = new TreeNode(3)
test3.left.left.left = new TreeNode(4)
test3.left.left.right = new TreeNode(5)

let test4 = new TreeNode(1)
test4.left = null 
test4.right = new TreeNode(3)
test4.right.left = new TreeNode(2)

console.log(test1)
isBalanced(test1)

console.log(test4)
isBalanced(test4)
