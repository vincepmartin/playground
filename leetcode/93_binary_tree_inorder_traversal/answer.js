/**
 * Create a binary tree w/ data given in an array. 
 * @param {*} treeArray 
 * @param {*} rootNode 
 * @param {*} i 
 */
let generateTree = function(treeArray, rootNode, i) {
    // base case.
    console.log(`Current i is ${i}`);

    if(rootNode.val === null )
        return null; 

    if(i < treeArray.length) {
        // output for debug...
        console.log(`New root tree: i: ${i} val: ${treeArray[i]}`);
        console.log(`New left tree: i: ${2*i + 1} val: ${treeArray[2*i + 1]}`);
        console.log(`New right tree: i: ${2*i + 2} val: ${treeArray[2*i + 2]}`);

        // debugger;
        rootNode = new TreeNode(treeArray[i]); 
        rootNode.left = generateTree(treeArray, rootNode.left, 2*i + 1);
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // Base case returns a null value.
    if(root === null)
        return null;

    // Recursive shananagans...
    // In order traversal is dive down the left branch, visit this node, dive down the right branch.
    inorderTraversal(root.left);
    console.log(root.val);
    inorderTraversal(root.right);
};

// Test driver code...
let root = new TreeNode();
root = generateTree([1, null, 2, 3], root, 0); 
console.log(root);
inorderTraversal(root);