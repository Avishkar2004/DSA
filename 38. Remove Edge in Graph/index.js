class Graph {
  constructor() {
    this.data = [];
  }
  //! for inserting
  addVertext(vertex) {
    if (!this.data[vertex]) {
      this.data[vertex] = [];
    }
  }
  //! Add edge
  addEdge(v1, v2) {
    if (!this.data[v1]) {
      this.addVertext(v1);
    }
    if (!this.data[v2]) {
      this.addVertext(v2);
    }
    this.data[v1].push(v2);
    this.data[v2].push(v1);
  }
  //! remove edge
  removeEdge(v1, v2) {
    this.data[v1] = this.data[v1].filter((item) => {
      // console.log(item) // B C
      return item != v2;
    });
    // console.log(data); // [ 'C' ]
    this.data[v2] = this.data[v2].filter((item) => {
      //   console.log(item); // A, C, D
      return item != v1;
    });
  }
}

const Graph1 = new Graph();
Graph1.addVertext("A");
Graph1.addVertext("B");
Graph1.addVertext("C");
Graph1.addVertext("D");
Graph1.addEdge("A", "B");
Graph1.addEdge("A", "C");
Graph1.addEdge("B", "C");
Graph1.addEdge("B", "D");

Graph1.removeEdge("A", "B");
Graph1.removeEdge("B", "D");

console.log(Graph1.data);
