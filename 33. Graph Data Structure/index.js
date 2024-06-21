class Ghaph {
  constructor() {
    this.data = {};
  }

  addVertex(Vertex) {
    if (!this.data[Vertex]) {
      this.data[Vertex] = [];
    }
  }
}

const graph1 = new Ghaph();
graph1.addVertex("A")
graph1.addVertex("B")
graph1.addVertex("C")
graph1.addVertex("D")

console.log(graph1);
