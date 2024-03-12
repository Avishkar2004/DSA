BFS algorithm (Breadth-first search)

Breadth-first search is a graph traversal algorithm that starts traversing the graph from the root node and explores all the neighboring nodes. Then, it selects the nearest node and explores all the unexplored nodes. While using BFS for traversal, any node in the graph can be considered as the root node.

There are many ways to traverse the graph, but among them, BFS is the most commonly used approach. It is a recursive algorithm to search all the vertices of a tree or graph data structure. BFS puts every vertex of the graph into two categories - visited and non-visited. It selects a single node in a graph and, after that, visits all the nodes adjacent to the selected node.

1 photo


Applications of BFS algorithm
The applications of breadth-first-algorithm are given as follows -

- BFS can be used to find the neighboring locations from a given source location.
- In a peer-to-peer network, BFS algorithm can be used as a traversal method to find all the neighboring nodes. Most torrent clients, such as BitTorrent, uTorrent, etc. employ this process to find "seeds" and "peers" in the network.
- BFS can be used in web crawlers to create web page indexes. It is one of the main algorithms that can be used to index web pages. It starts traversing from the source page and follows the links associated with the page. Here, every web page is considered as a node in the graph.
- BFS is used to determine the shortest path and minimum spanning tree.
- BFS is also used in Cheney's technique to duplicate the garbage collection.
- It can be used in ford-Fulkerson method to compute the maximum flow in a flow network.


Algorithm :-
The steps involved in the BFS algorithm to explore a graph are given as follows -

Step 1: SET STATUS = 1 (ready state) for each node in G
Step 2: Enqueue the starting node A and set its STATUS = 2 (waiting state)
Step 3: Repeat Steps 4 and 5 until QUEUE is empty
Step 4: Dequeue a node N. Process it and set its STATUS = 3 (processed state).
Step 5: Enqueue all the neighbours of N that are in the ready state (whose STATUS = 1) and set
their STATUS = 2

(waiting state)

[END OF LOOP]

Step 6: EXIT

What is Breadth First Search?
Breadth first search is an algorithm for searching a tree or graph data structure. It begins at the root node then explores all nodes left to right, level by level. Breadth first search follows the FIFO (first in, first out) principle and can be implemented with a queue.

For this walkthrough we’ll be writing a function breadthFirstSearch, which will take in a root node, traverse the entire tree and return an array with all the node values in breadth first search order.

The nodes will be defined with the class, Node.

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  
  addChild(value) {
    this.children.push(new Node(value));
    return this;
  }
}

So, given the below tree breadthFirstSearch should return [6, 9, 12, 5, 7, 8, 11, 18, 10, 4, 3].

2 photo

To Begin, Create a Queue

First, we need to create a queue. The queue will keep track of what nodes need to be searched. We can create a queue with a standard array. We’ll set the first element in the array to root, since we want to begin our search with the root node, node 6.


function depthFirstSearch(root) {
  // Empty array to store node values
  const result = []; 
  // Define queue
  const queue = [root]; 
  // Return final array
  return result; 
}

Create a While Loop


Now, we need to create a while loop. This loop will run as long as the queue is not empty. In other words, it will run as long we still have nodes to traverse.

function depthFirstSearch(root) {
  const result = [];  
  const queue = [root];
  // Create while loop
  while (queue.length > 0) {
     
  }
return result; 
}

While Loop Logic

While inside of the while loop, we need to remove the first node in the queue and set it to the variable current. We can achieve this by setting current to queue.shift().

while (queue.length > 0) {
  const current = queue.shift();
}

Next, we need to make sure the current node is not null (a leaf node).

while (queue.length > 0) {
  const current = queue.shift();
  // If the node is null, we know we've reached the end of a branch
  if (current === null) continue;
}

With our current variable set, we can push current.value to our final result array.

while (queue.length > 0) {
  const current = queue.shift();
  if (current === null) continue;
  // Push node value to final array
  result.push(current.value)
}

Lastly, we can add the current node’s children to the queue.

while (queue.length > 0) {
  const current = queue.shift();
  if (current === null) continue;
  result.push(current.value)
  // Add child nodes to queue
  for (const child of current.children) {
    queue.push(child);
  }
}

The final function looks like this.

function breadthFirstSearch(root) { 
  const result = []
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === null) continue;
    result.push(current.value);
    for (const child of current.children) {
      queue.push(child);
    }
  }
  return result;
};

Time Complexity :-

Graphs are made up of vertices and edges. Vertices are the nodes. Edges are what connects the nodes (the lines in between). The time complexity of this algorithm is O(V + E), where V is the number of vertices in the graph and E is the number of edges.

Let’s break this down a bit.

The O(V) time complexity comes from the fact that we are visiting every single node in the tree.

However!

While at each node, we are also iterating through all the child nodes. The amount of edges coming out of a node is equal to the amount of child nodes it has. For example, node 6 has three edges and three child nodes. Node 7 on the other hand has two edges coming out of it and two child nodes accordingly. This results in an additional O(E) time complexity, bringing the grand total time complexity to O(V + E).


Space Complexity :-

The time complexity for this algorithm is O(V). This is a worst case scenario. Imagine if we had a tree that looked like this.

3 photo

In this scenario, there would be a point where we had to store V - 1 nodes inside of the queue all at once bringing the space complexity to O(V).

For our depthFirstSearch() function, because we are storing the value of each node inside of an array anyways, it will always be O(V) space complexity.

Conclusion :-
In summary, the steps necessary to implement breadth first search are as follows:

1.Create a queue. This is where we’ll store nodes that need to be searched. To begin, it will have the root node only.

4 photo

1.Remove the first node from the queue. It will now be the current node.
2.With the current node value set, we can then apply any necessary logic (e.g. push value to array, check for specific value, etc).
3.Next, add all of the current node’s children into the queue (left to right order).

5 photo

4. Now we repeat. We remove the first node, node 9, from the queue and set it to current.

5. Apply any necessary logic then push all of node 9’s children into the queue (node 7 and node 8).

6 photo

6. Continue repeating this process until the queue is empty and all nodes have been visited.

