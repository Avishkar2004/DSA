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
}

//! This is how we invoked Tree
let bst = new BSTree();
console.log(bst.isTreeEmpty());
