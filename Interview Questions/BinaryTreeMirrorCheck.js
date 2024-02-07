// Google coding interview question

/*
Given a root of the binary tree check whether it's a mirror of itself

Example:
     
     1
   /   \
  2     2
 / \   / \
3   4 4   3

Output: true
*/

const isSymmetric = function(root) {
  function recurse(l, r) {
    if (!l && !r) return true;
    if (!l || !r || l.val !== r.val) return false;

    return recurse(l.left, r.right) && 
      recurse(l.right, r.left);
  }
  return recurse(root.left, root.right);
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(2);
tree.left.left = new TreeNode(3);          
tree.left.right = new TreeNode(3);          
tree.right.left = new TreeNode(4); 
tree.right.right = new TreeNode(4); 

console.log(isSymmetric(tree));
// Output: true
