 // Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

/**
 * Returns true if the tree is a symetric.
 * @param {TreeNode} root 
 * @return {boolean} 
 */
let isSymmetric = function(root) {
    // Apparently a table that is null is symetric because it has no values? I had to change this for this to pass the leetcode test. 
    if(root === null)
        return true;

    // Hey hey, otherwise, let's go ahead and dive into our branch...
    return nodesAreMirrored(root.left, root.right);
};

/**
 * Return true if we have two nodes that are mirror images of each other.
 * @param {TreeNode} node1 
 * @param {TreeNode} node2
 * @return {boolean} both nodes are mirrors.
 */
let nodesAreMirrored = function(node1, node2) {
    // Base case 
    // Both nodes are null ergo they are mirrored.
    if(node1 === null && node2 === null) {
        return true;
    }

    // Test recursively.
    if( (node1 !== null) &&
        (node2 !== null) &&
        (node1.val === node2.val) ) {
            return( nodesAreMirrored(node1.left, node2.right) && nodesAreMirrored(node1.right, node2.left) )
        }

    // If we've made it this far we are not a mirror.
    return false;
}

/**
 * Create a binary tree w/ data given in an array. 
 * @param {*} treeArray 
 * @param {*} rootNode 
 * @param {*} i 
 */
let generateTree = function(treeArray, rootNode, i) {
    if(i < treeArray.length) {
        console.log(`Creating New tree w/ Current value of i: ${i} of array length ${treeArray.length}`);
        // debugger;
        rootNode = new TreeNode(treeArray[i]); 
        rootNode.left = generateTree(treeArray, rootNode.left, 2*i + 1);
        rootNode.right = generateTree(treeArray, rootNode.right, 2*i+2);
    }

    return rootNode;
}

// Test driver code.
/* 
let non_symetric_tree = new TreeNode();
non_symetric_tree = generateTree([1, 2, 3, 4, 5, 6, 7], non_symetric_tree, 0);

let symetric_tree = new TreeNode();
symetric_tree = generateTree([1,2,2,3,4,4,3], symetric_tree, 0);
*/

let non_symetric_tree_2 = new TreeNode();
non_symetric_tree_2 = generateTree([1,2,2,null,3,null,3], non_symetric_tree_2, 0);

console.log(non_symetric_tree_2);
console.log(`\n\n\tThe above tree is symetric: ${isSymmetric(non_symetric_tree_2)}.`);