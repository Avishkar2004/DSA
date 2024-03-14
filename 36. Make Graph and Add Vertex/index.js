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
}

const Graph1 = new Graph();
Graph1.addVertext("A");
Graph1.addVertext("B");
Graph1.addVertext("C");
Graph1.addVertext("D");
console.log(Graph1.data);
