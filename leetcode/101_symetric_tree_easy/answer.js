 // Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

 /**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // Is symetric when.
    // 1. left node of left tree is == right node of right tree.
    // 2. right node of left tree is == left node of right tree.

    let leftTreeNode = root.left;
    let rightTreeNode = root.right;
    
    // Test for symetry in a recursive manner.
    console.log(`Checking leftNode: ${leftTreeNode.left}, ${leftTreeNode.right} and rightNode: ${rightTreeNode.left}, ${rightTreeNode.right}`) 
    if((leftTreeNode.left === rightTreeNode.right) && (leftTreeNode.right === rightTreeNode.left)) {
        isSymetric(leftTreeNode);
        isSymetric(rightTreeNode); 
        return true;
    }

    else
        return false;
};

/**
 * Print out the binary tree in order. 
 * TODO: Fix bug that is causing it to attempt to recurse into a null object.
 * @param {TreeNode} rootNode 
 */
let printTree = function(rootNode) {
    console.log(rootNode); 
    if(rootNode.val !== null) {
        printTree(rootNode.left); 
        console.log(`${rootNode.val} `);
        printTree(rootNode.right);
    }
}


/**
 * Create a binary tree w/ data given in an array. 
 * @param {*} treeArray 
 * @param {*} rootNode 
 * @param {*} i 
 */
let generateTree = function(treeArray, rootNode, i) {
    if(i < treeArray.length) {
        rootNode = new TreeNode(treeArray[i]); 
        rootNode.left = generateTree(treeArray, rootNode.left, 2*i + 1);
        rootNode.right = generateTree(treeArray, rootNode.right, 2*i+2);
    }

    return rootNode;
}

tree = new TreeNode();
values = [1, 2, 3, 4, 5, 6, 7];
tree = generateTree(values, tree, 0);
console.log(tree);
printTree(tree);