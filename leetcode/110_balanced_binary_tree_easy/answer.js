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
        return {left: -1, right: -1}

    // Calculate the left and right depth.
    let depth = {
        left: (getDepthRecursive(root.left) === null ? 0 : getDepthRecursive(root.left).left) + 1,
        right: (getDepthRecursive(root.right) === null ? 0 : getDepthRecursive(root.right).right) + 1
    };

    return depth;
}

let isBalanced = function(tree) {
    let depth = getDepthRecursive(tree);
    console.log(`L: ${depth.left} R: ${depth.right}`);

    if(Math.abs(depth.left - depth.right) >= 1) {
        return false;
    }

    else {
        return true;
    }
} 

// Test driver code...
// let root = new TreeNode();
let root;
let rootfalse;

root = generateTree([1, 2], root, 0); 
rootfalse = generateTree([1,null,2,null,3], rootfalse, 0);
console.log(root);
console.log(`Balanced: ${isBalanced(root)}`);
console.log(`******`);
console.log(rootfalse);
console.log(`Balanced: ${isBalanced(rootfalse)}`);
