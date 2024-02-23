// Google coding interview question

/*
Given the roots of two binary trees p and q write a function to check if they are structurally identical
and the nodes have the same values in javascript

Tree p:
    1
   / \
  2   3

Tree q:
    1
   / \
  2   3

Output: true
*/

function isSameTree(p, q) {
  // Base case: if both nodes are null, they are structurally identical
  if (!p && !q) {
    return true;
  }

  // If either node is null or their values are different, they are not identical
  if (!p || !q || p.val !== q.val) {
    return false;
  }

  // Recursively check the left and right subtrees
  return isSameTree(p.left, q.left) && 
    isSameTree(p.right, q.right);
}


/*

In this function, p and q represent the root nodes of the two binary trees. The function checks the following conditions:

If both nodes are null, they are structurally identical, so it returns true.
If either node is null or their values are different, they are not identical, so it returns false.
Otherwise, it recursively checks the left and right subtrees by calling isSameTree on the left child 
nodes (p.left and q.left) and the right child nodes (p.right and q.right).
*/

const tree1 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
};

const tree2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
};

console.log(isSameTree(tree1, tree2)); // Output: true


