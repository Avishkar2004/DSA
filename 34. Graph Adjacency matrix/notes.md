
//! aagr aapko multidimenstion array banana hai to aapko usko array ke andr array banane honge

let data = [
 A [0, 1, 1, 0],
 B [1, 0, 1, 1],
 C [1, 1, 0, 0],
 D [0, 1, 0, 0],
];



let data = [
  [0, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
];

console.log(data) // [ [ 0, 1, 1, 0 ], [ 1, 0, 1, 1 ], [ 1, 1, 0, 0 ], [ 0, 1, 0, 0 ] ]


=============
What is an adjacency matrix?
Adjacency matrix definition :-
In graph theory, an adjacency matrix is a dense way of describing the finite graph structure. It is the 2D matrix that is used to map the association between the graph nodes.

If a graph has n number of vertices, then the adjacency matrix of that graph is n x n, and each entry of the matrix represents the number of edges from one vertex to another.

An adjacency matrix is also called as connection matrix. Sometimes it is also called a Vertex matrix.

Adjacency Matrix Representation :-
If an Undirected Graph G consists of n vertices then the adjacency matrix of a graph is n x n matrix A = [aij] and defined by -

aij = 1 {if there is a path exists from Vi to Vj}

aij = 0 {Otherwise}

Let's see some of the important points with respect to the adjacency matrix.

1. If there exists an edge between vertex Vi and Vj, where i is a row, and j is a column, then the value of aij = 1.
2. If there is no edge between vertex Vi and Vj, then the value of aij = 0.
3. If there are no self loops in the simple graph, then the vertex matrix (or adjacency matrix) should have 0s in the diagonal.
4. An adjacency matrix is symmetric for an undirected graph. It specifies that the value in the ith row and jth column is equal to the value in jth row ith
5. If the adjacency matrix is multiplied by itself, and if there is a non-zero value is present at the ith row and jth column, then there is the route from Vi­ to Vj­­ with a length equivalent to 2. The non-zero value in the adjacency matrix represents that the number of distinct paths is present.

Note: In an adjacency matrix, 0 represents that there is no association is exists between two nodes, whereas 1 represents that there is an association is exists between two nodes.

How to create an adjacency matrix?
Suppose there is a Graph g with n number of vertices, then the vertex matrix (or adjacency matrix) is given by -

A =    a11 a12 . . . . . a1n
       a21 a22 . . . . . a2n
       .     .          .
       .     .          .
       .     .          .
       an1 an2 . . . . . ann


Where the aij equals the number of edges from the vertex i to j. As mentioned above, the Adjacency matrix is symmetric for an undirected graph, so for an undirected graph, aij = aji­.

When the graphs are simple and there are no weights on the edges or multiple edges, then the entries of the adjacency matrix will be 0 and 1. If there are no self-loops, then the diagonal entries of the adjacency matrix will be 0.

Now, let's see the adjacency matrix for an undirected graph and for directed graphs.

Adjacency matrix for an undirected graph :-

In an undirected graph, edges are not associated with the directions with them. In an undirected graph, if there is an edge exists between Vertex A and Vertex B, then the vertices can be transferred from A to B as well as B to A.

Let us consider the below-undirected graph and try to construct the adjacency matrix of it.

1 photo

In the graph, we can see there is no self-loop, so the diagonal entries of the adjacent matrix will be 0. The adjacency matrix of the above graph will be -

2 photo


Adjacency matrix for a directed graph :-

In a directed graph, edges form an ordered pair. Edges represent a specific path from some vertex A to another vertex B. Node A is called the initial node, while node B is called the terminal node.

Let us consider the below directed graph and try to construct the adjacency matrix of it.

3 photo

In the above graph, we can see there is no self-loop, so the diagonal entries of the adjacent matrix will be 0. The adjacency matrix of the above graph will be -

4 photo

Properties of the adjacency matrix
Some of the properties of the adjacency matrix are listed as follows:

- An adjacency matrix is a matrix that contains rows and columns used to represent a simple labeled graph with the numbers 0 and 1 in the position of (V­I, Vj), according to the condition of whether or not the two Vi ­and Vj are adjacent.

- For a directed graph, if there is an edge exists between vertex i or Vi to Vertex j or Vj, then the value of A[Vi][Vj] = 1, otherwise the value will be 0.
- For an undirected graph, if there is an edge that exists between vertex i or Vi to Vertex j or Vj, then the value of A[Vi][Vj] = 1 and A[Vj][Vi] = 1, otherwise the value will be 0.

Let's see some questions of the adjacency matrix. Below questions are on the weighted undirected, and directed graphs.

NOTE: A graph is said to be the weighted graph if each edge is assigned a positive number, which is called the weight of the edge.

Question 1 - What will be the adjacency matrix for the below undirected weighted graph?

5 photo

Solution - In the given question, there is no self-loop, so it is clear that the diagonal entries of the adjacent matrix for the above graph will be 0. The above graph is a weighted undirected graph. The weights on the graph edges will be represented as the entries of the adjacency matrix.

The adjacency matrix of the above graph will be -

6 photo


Question 2 - What will be the adjacency matrix for the below directed weighted graph?

7 photo

Solution - In the given question, there is no self-loop, so it is clear that the diagonal entries of the adjacent matrix for the above graph will be 0. The above graph is a weighted directed graph. The weights on the graph edges will be represented as the entries of the adjacency matrix.

The adjacency matrix of the above graph will be -

8 photo
