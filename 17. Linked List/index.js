class List {
  constructor(data) {
    //! This is a head
    this.head = {
      value: data,
      next: null,
    };
    //!  This is a tail
    this.tail = this.head;
    this.size = 1;
  }
  //! Function bana deta hu value ko insert krne ke liye
  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }
}

let list = new List(200);
list.appendNode(300);
list.appendNode(400);
console.log(list);
