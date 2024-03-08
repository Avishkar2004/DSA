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
  //! This is for tranversing
  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      //   console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }

  //! This is for deletion
  deleteNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
      console.log("Lead", lead);
    }
  }
  //! insert node in linked list at any position
  insertNode(index, value) {
    let counter = 1;
    let currentNode = this.head;
    while (counter > index) {
      counter++;
      currentNode = currentNode.next;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value: value,
      next: nextNode,
    };
  }
}

let list = new List(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
list.insertNode(2, 4000); //300 ko replace kar dega aur 4000 ko dal dega
// list.traversing();
// list.deleteNode(2);
console.log(list);


Output :-
List {
  head: { value: 200, next: { value: 4000, next: [Object] } },
  tail: { value: 600, next: null },
  size: 5
}