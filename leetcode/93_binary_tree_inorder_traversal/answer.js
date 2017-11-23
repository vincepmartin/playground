/**
 * Create a binary tree w/ data given in an array. 
 * @param {*} treeArray 
 * @param {*} rootNode 
 * @param {*} i 
 */
let generateTree = function(treeArray, rootNode, i) {
  console.log(`Value of i: ${i}`);
  if(i < treeArray.length && treeArray[i] !== null) {
        console.log(`\tCreating New tree w/ ${treeArray[i]} w/ value of i: ${i} array length ${treeArray.length}`);

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

let inorderTraversal = function(root) {
  let results = new Array();
  inorderTraversalExecute(root, results);
  return results;
};

let inorderTraversalExecute = function(root, results) { 
    // Base case returns a null value.
    if(root === null)
        return null;
    
    // Recursive shananagans...
    // In order traversal is dive down the left branch, visit this node, dive down the right branch.
    inorderTraversalExecute(root.left, results);
    results.push(root.val); 
    inorderTraversalExecute(root.right, results);
};


// Test driver code...
// let root = new TreeNode();
let root;
root = generateTree([1, 2, 3, 4, 5, 6, 6, 6, 6, 6], root, 0); 
console.log(root);
console.log(`In order traversal of the binary tree.`);
console.log(inorderTraversal(root));
