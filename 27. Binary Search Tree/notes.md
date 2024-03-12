tree ke max child 2 hi ho sakte hai

left child sabse chota rahega root and right child


Basic Structure :-

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


How to insert Node ?

- should have root Node
- add left Node
- add right Node


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
  makeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    }
  }
}

//! This is how we invoked Tree
let bst = new BSTree();
bst.makeTree(20);
// console.log(bst.isTreeEmpty());
console.log(bst)


BSTree { root: Node { value: 20, left: null, right: null } }


==============
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
  makeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      root.left = newNode;
    }
  }
}

//! This is how we invoked Tree
let bst = new BSTree();
bst.makeTree(20);
bst.makeTree(10);
// console.log(bst.isTreeEmpty());
console.log(bst);


BSTree {
  root: Node {
    value: 20,
    left: Node { value: 10, left: null, right: null },
    right: null
  }
}




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
  makeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    }
  }
}

//! This is how we invoked Tree
let bst = new BSTree();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
// console.log(bst.isTreeEmpty());
console.log(bst);





BSTree {root: Node}
root : Node
left : Node
left : Node
left : null
right : null
value : 5
right :  null
value : 10
right : null 
value :  20



===========
for right node
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
  makeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  //! this is for left node
  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
      //! this is for right node
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}

//! This is how we invoked Tree
let bst = new BSTree();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(30);
bst.makeTree(40);

// console.log(bst.isTreeEmpty());
console.log(bst);


right : Node
left : null
right : null
value : 40
value : 30
value : 20


======

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
  makeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  //! this is for left node
  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
      //! this is for right node
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}

//! This is how we invoked Tree
let bst = new BSTree();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(30);
bst.makeTree(40);
bst.makeTree(23);


// console.log(bst.isTreeEmpty());
console.log(bst);



right : Node
left : Node {value: 23, left: null, right: null}
right : Node {value: 40, left: null, right: null}
value : 30