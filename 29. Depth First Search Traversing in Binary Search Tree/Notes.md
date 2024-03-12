DFS (Depth First Search) algorithm
In this article, we will discuss the DFS algorithm in the data structure. It is a recursive algorithm to search all the vertices of a tree data structure or a graph. The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until we find the goal node or the node with no children.

Because of the recursive nature, stack data structure can be used to implement the DFS algorithm. The process of implementing the DFS is similar to the BFS algorithm.

The step by step process to implement the DFS traversal is given as follows -

1 .First, create a stack with the total number of vertices in the graph.
2. Now, choose any vertex as the starting point of traversal, and push that vertex into the stack.
3. After that, push a non-visited vertex (adjacent to the vertex on the top of the stack) to the top of the stack.
4. Now, repeat steps 3 and 4 until no vertices are left to visit from the vertex on the stack's top.
5. If no vertex is left, go back and pop a vertex from the stack.
6. Repeat steps 2, 3, and 4 until the stack is empty.


Applications of DFS algorithm
- The applications of using the DFS algorithm are given as follows -

1.DFS algorithm can be used to implement the topological sorting.
2.It can be used to find the paths between two vertices.
3.It can also be used to detect cycles in the graph.
4.DFS algorithm is also used for one solution puzzles.
5.DFS is used to determine if a graph is bipartite or not.


Algorithm

Step 1: SET STATUS = 1 (ready state) for each node in G
Step 2: Push the starting node A on the stack and set its STATUS = 2 (waiting state)

Step 3: Repeat Steps 4 and 5 until STACK is empty

Step 4: Pop the top node N. Process it and set its STATUS = 3 (processed state)

Step 5: Push on the stack all the neighbors of N that are in the ready state (whose STATUS = 1) and set their STATUS = 2 (waiting state)
[END OF LOOP]

Step 6: EXIT

Example of DFS algorithm
Now, let's understand the working of the DFS algorithm by using an example. In the example given below, there is a directed graph having 7 vertices.

1 photo
Now, let's start examining the graph starting from Node H.

Step 1 - First, push H onto the stack.

STACK: H  

Step 2 - POP the top element from the stack, i.e., H, and print it. Now, PUSH all the neighbors of H onto the stack that are in ready state.

Print: H]STACK: A  

Step 3 - POP the top element from the stack, i.e., A, and print it. Now, PUSH all the neighbors of A onto the stack that are in ready state.

Print: A  
STACK: B, D  

Step 4 - POP the top element from the stack, i.e., D, and print it. Now, PUSH all the neighbors of D onto the stack that are in ready state.

Print: D  
STACK: B, F  

Step 5 - POP the top element from the stack, i.e., F, and print it. Now, PUSH all the neighbors of F onto the stack that are in ready state.

Print: F  
STACK: B

Step 6 - POP the top element from the stack, i.e., B, and print it. Now, PUSH all the neighbors of B onto the stack that are in ready state.

Print: B  
STACK: C  

Step 7 - POP the top element from the stack, i.e., C, and print it. Now, PUSH all the neighbors of C onto the stack that are in ready state.

Print: C  
STACK: E, G  

Step 8 - POP the top element from the stack, i.e., G and PUSH all the neighbors of G onto the stack that are in ready state.

Print: G  
STACK: E  

Step 9 - POP the top element from the stack, i.e., E and PUSH all the neighbors of E onto the stack that are in ready state.

Print: E  
STACK:  

Now, all the graph nodes have been traversed, and the stack is empty.

Complexity of Depth-first search algorithm

The time complexity of the DFS algorithm is O(V+E), where V is the number of vertices and E is the number of edges in the graph.

The space complexity of the DFS algorithm is O(V).




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
  //! for searching
  search(root, val) {
    if (root === null) {
      return false;
    } else if (root.value === val) {
      return true;
    } else if (root.value > val) {
      return this.search(root.left, val);
    } else {
      return this.search(root.right, val);
    }
  }

  //! BST In Binary Search (preOrder)
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  //! BST In Binary Search (Inorder)
  InOrder(root) {
    if (root) {
      this.InOrder(root.left);
      //   console.log(root.value);
      this.InOrder(root.right);
    }
  }
  //! BST In Binary Search (postorder)
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
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

bst.preOrder(bst.root); // 20,10,5,30,23,40
bst.InOrder(bst.root); // 5,10,20,23,30,40
bst.postOrder(bst.root); //5,10,23,40,30,20
