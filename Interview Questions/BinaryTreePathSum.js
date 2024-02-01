// Tik Tok interview question

/*
Given a root of a binary tree and a integer target sum
return True if the has a root to the path such that adding
all the values along the path equals target sum 

          5
        /  \
      4     8
    /      / \
  11     13   4
  / \          \
7    2          1

Target: 22  => 5 + 4 + 11 + 2
Return: True
*/

const hasPathSum = function(root, targetSum) {
  if (!root) return false;

  targetSum -= root.val;

  if (!root.left && !root.right) {
    return targetSumm === 0;

  return hasPathSum(root.left, targetSum) ||
  hasPathSum(root.right, targetSum);
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


const tree = new TreeNode(5);
tree.left = new TreeNode(4);
tree.right = new TreeNode(8);
tree.left.left = new TreeNode(11);          
tree.left.left.left = new TreeNode(7);          
tree.left.left.right = new TreeNode(2);   
tree.right.left = new TreeNode(13); 
tree.right.right = new TreeNode(4); 
tree.right.right.right = new TreeNode(1); 

console.log(hasPathSum(tree, 22));
// Output: true
          
          


  
