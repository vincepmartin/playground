/**
 * Create a binary tree w/ data given in an array. 
 * @param {*} treeArray 
 * @param {*} rootNode 
 * @param {*} i 
 */
let generateTree = function(treeArray, rootNode, i) {
  if(i < treeArray.length && treeArray[i] !== null) {
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

let getDepthRecursive = function(root) {
    // Base case.
    if(root === null) {
        console.log(`Base case...`);
        return 0;
    }
    
    // When we are on a leaf node, we know we are at the bottom.
    if(root.left === null && root.right === null) {
        console.log(`Hit left and right as null`); 
        return 1;
    }

    // Go down the left side.
    if(root.left !== null) {
        console.log(`left not null`);
        return getDepthRecursive(root.left) + 1;
    }

    // Go down the left side.
    if(root.right !== null) {
        console.log(`right not null`);
        return getDepthRecursive(root.right) + 1;
    }

    // Return
    console.log(`left is: ${getDepthRecursive(root.left)} right is: ${getDepthRecursive(root.right)}`)
}


// Test driver code...
// let root = new TreeNode();
let root;
root = generateTree([1, 2, 3], root, 0); 
console.log(root);
console.log(getDepthRecursive(root));