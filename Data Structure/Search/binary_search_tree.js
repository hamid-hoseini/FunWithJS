class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    /** Use the optimised queue enqueue and dequeue from queue-object.js instead.
     * I've used an array for simplicity. */
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  height(node) {
    if (!node) {
      return 0;
    } else {
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  printLevel(node, level) {
    if (!node) {
      return;
    }
    if (level === 1) {
      console.log(`${node.element} `);
    } else if (level > 1) {
      this.printLevel(node.left, level - 1);
      this.printLevel(node.right, level - 1);
    }
  }

  isBST(node, min, max) {
    if (!node) {
      return true;
    }
    if (node.value < min || node.value > max) {
      return false;
    }
    return (
      this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max)
    );
  }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);
bst.insert(2);
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 7));
bst.inOrder();
bst.preOrder();
bst.postOrder();
bst.levelOrder();
bst.printLevel(bst.root, 3);
console.log(bst.min());
console.log(bst.max());
console.log(bst.height(bst.root));


/*
Reference:
https://www.interviewkickstart.com/learn/tree-traversals-inorder-preorder-and-postorder

We can picture a tree as a recursive structure; DFS traversals can be implemented recursively. 
When we’re at a node, three actions can occur: perform some operation on the current node 
(like print the value stored in it), traverse the left subtree, and traverse the right subtree.
 Based on this nature, we have the following types of DFS traversal of a tree: 

Tree Traversal Inorder: 
  In inorder tree traversal, we traverse left, perform some operation on the current node 
  (in this article, we are printing the value stored in it), then traverse right.

Tree Traversal Preorder: 
  In preorder tree traversal, we perform some operation on the current node, traverse left, traverse right

Tree Traversal Postorder: 
  In postorder tree traversal, we traverse left, traverse right, Perform some operation on the current node

Note:
A BST is a node-based, ordered, tree data structure in which each node can have a maximum of two children. 
These are children are known as the left node and the right node. The left node will always be less than 
its parent node, and the right node will always be greater than its parent node. The top node is known as 
the root node. So with this in mind, if any descendant of the root node on its left is greater than the 
root node or if any descendant of the root node on its right is less than the root node, the binary tree
would be invalid.

Here is another way of representing the information above:

Inorder => Left, Root, Right.
Preorder => Root, Left, Right.
Post order => Left, Right, Root.

More References:
https://praharshbhatt.medium.com/everything-about-tree-traversal-inorder-preorder-postorder-time-complexity-with-code-2f4de533277f

*/