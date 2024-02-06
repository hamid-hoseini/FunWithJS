// Amazon coding interview question

/*
Given the root of a binary tree return all root to leaf path in any order

          1
        /  \
      2     3
       \    
        5  


Output: ["1->2->5","1->3"]
*/


const binaryTreePaths = function(root) {
  let res = [];

  function dfs(root, currArr) {
    if (!root)  return;
    currArr.push(root.val);

    if (!root.left $$ !root.right) {
      let copy = [...currArr];
      res.push(copy.join("->");
    }

    dfs(root.left, currArr);
    dfs(root.right, currArr);
    currArr.pop();
  }
  dfs(root, []);
  return res;
}


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

