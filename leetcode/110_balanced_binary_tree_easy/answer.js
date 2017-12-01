/**
 * Create a binary tree w/ data given in an array. 
 * @param {*} treeArray 
 * @param {*} rootNode 
 * @param {*} i 
 */
let generateTree = function(treeArray, rootNode, i) {
  if(i < treeArray.length) {
        rootNode = new TreeNode(treeArray[i]); 
        rootNode.left = generateTree(treeArray, rootNode.left, 2*i+1);
        rootNode.right = generateTree(treeArray, rootNode.right, 2*i+2);
    }

    return rootNode;
}

// Tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Getsthe depth of both the left and right branches of a tree.
 * @param {TreeNode} root 
 */
let getDepthRecursive = function(root) {
    // Base case.
    if(root === null)
        return 0 

    let left = getDepthRecursive(root.left)
    let right = getDepthRecursive(root.right)

    console.log(`left: ${left} right: ${right}`)

    if (left === -1 || right === -1)
        return -1
   
    if (Math.abs(left - right) > 1)
        return -1 
    
    return (Math.max(left, right) + 1)
}

let isBalanced = function(tree) {
    return getDepthRecursive(tree)
} 

// Test driver code...

// Define test cases.
let root;
let testCases = [[1, null, 3, 2], [1, 2], [1, null, 2, null, 3]]
// false, true, false


console.log(generateTree([1,null,3,2], root, 0))
// Run the test cases.
/*
testCases.forEach( i => {
    console.log(`*****`)
    console.log(`Testing: ` + i.toString() + `Balanced: ` + isBalanced(generateTree(i, root, 0)))
})
*/