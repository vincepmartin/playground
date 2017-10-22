/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

 /**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    // Base case. 
    
    // Place holders.
    let lNode = new TreeNode(null);
    let rNode = new TreeNode(null);

    // 
    


    console.log(`root value: ${root}`); 
    if(root.left !== null) {
        console.log(`\t left: ${root.left.val}`);
    }
    else {
        console.log(`\t left: null`);
    }

    if(root.right !== null) {
        console.log(`\t right: ${root.right.val}`);
    }
    else {
        console.log(`\t right: null`);
    }
   
};

// Worker function.



// Test.

let testNode = new TreeNode(10);
testNode.left = new TreeNode(5);
testNode.right = new TreeNode(8);


averageOfLevels(testNode);