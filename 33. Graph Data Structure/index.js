class Ghaph {
  constructor() {
    this.data = {};
  }

  addVertex(Vertex) {
    if (!this.data[Vertex]) {
      this.data[Vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.data[v1]) {
      this.addVertex(v1);
    }
    if (!this.data[v2]) {
      this.addVertex(v2);
    }
    this.data[v1].push(v2);
    this.data[v2].push(v1);
  }

  revomeEdge(v1, v2) {
    this.data[v1] = this.data[v1].filter((item) => {
      return item != v2;
    });
    this.data[v2] = this.data[v2].filter((item) => {
      return item != v1;
    });
  }

  removeVertex(vertex) {
    if (!this.data[vertex]) {
      return;
    }
    for (let item of this.data[vertex]) {
      console.log(item);
      this.revomeEdge(vertex, item);
    }
    delete this.data[vertex];
  }
}

const graph1 = new Ghaph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");

graph1.addEdge("A", "C");
graph1.addEdge("A", "B");
graph1.addEdge("B", "C");
graph1.addEdge("B", "D");

graph1.removeVertex("A");

console.log(graph1);
