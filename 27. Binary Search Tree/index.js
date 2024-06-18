class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  isTreeEmpty() {
    return this.root === null;
  }

  //! Make Tree
  //! 1. We have to make a left and right as well using Node
  makeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  //! This function will decide where u wanna add value left/right
  insertNode(root, newNode) {
    if (root.value > newNode.value) {
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

  //! Serach Node in BST
  Serach(root, val) {
    if (root === null) {
      return false;
    } else if (root.value === val) {
      return true;
    } else if (root.value > val) {
      return this.Serach(root.left, val);
    } else {
      return this.Serach(root.right, val);
    }
  }

  PreOrder(root) {
    if (root) {
      //   console.log(root.value); 20,10,5,30
      this.PreOrder(root.left);
      this.PreOrder(root.right);
    }
  }

  InOrder(root) {
    if (root) {
      this.InOrder(root.left);
      //   console.log(root.value); //5,10,20,30
      this.InOrder(root.right);
    }
  }

  PostOrder(root) {
    if (root) {
      this.PostOrder(root.left);
      this.PostOrder(root.right);
    //   console.log(root.value); //5,10,30,20
    }
  }

  bfsTraversing(root) {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      console.log(current.value);
    }
  }
}

let bst = new BSTree();

bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(30);
// console.log(bst.Serach(bst.root, 30));
// bst.PreOrder(bst.root);
// bst.InOrder(bst.root);
// bst.PostOrder(bst.root);
// console.log(bst);

bst.bfsTraversing(bst.root);
