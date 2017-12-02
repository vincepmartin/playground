 // Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    let mergedTree = []

    if(t1.length > t2.length) {
        t1.foreach( (element => {

        })
    } 
};

// Test driver code.
let non_symetric_tree = new TreeNode();
non_symetric_tree = generateTree([1, 2, 3, 4, 5, 6, 7], non_symetric_tree, 0);
console.log(non_symetric_tree);
