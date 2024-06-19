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

  bfsTraversing() {
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
      console.log(current.value); // 20,10,30,5
    }
  }

  //! Find a Min Value
  minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }

  //! Find a Max Value
  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.minValue(root.right);
    }
  }

  //! Delete Node in BST

  removeData(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.root = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.minValue(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
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

// console.log(bst.minValue(bst.root))
// console.log(bst.maxValue(bst.root))
// console.log(bst)

bst.removeData(20);

// bst.bfsTraversing(bst.root);
console.log(bst);
