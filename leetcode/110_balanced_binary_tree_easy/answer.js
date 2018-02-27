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
    // Base case returns 0. 
    if(node == null)
        return 0;

    // Return the maximum height of either left or right.
    return 1 + Math.max(getDepth(node.left), getDepth(node.right))
}

/**
 * Test depth.
 */
let isBalanced = function(node) {
    // Error checking for an empty set.
    if(node === null || node === [])
        return true 
    
    // Check the height of both sides and then compare them.
    let lh = getDepth(node.left)
    let rh = getDepth(node.right) 
    
    console.log(`Height (l,r): (${lh}, ${rh})`)

    if(Math.abs(lh-rh) > 1)
        return false;
    else
        return true
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

let tests = new Array;
// tests.push(test1)
// tests.push(test2)
// tests.push(test3)
tests.push(test4)

// console.log(test1)
tests.forEach( t => {
    console.log(`***** Testing ${t}`)
    console.log(isBalanced(t))
})