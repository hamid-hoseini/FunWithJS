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


  
