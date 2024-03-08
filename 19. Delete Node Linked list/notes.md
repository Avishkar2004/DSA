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
}

let list = new List(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
list.traversing();
list.deleteNode();
// console.log(list);


out :-
Lead
(2) {value: 200, next: {...}}
just after 200 300 should be delete from node

List {head: {...}, tail: {...}, size: 5}
head : (2) {value: 200, next: {...}}
value : 200
next : (2) {value: 400, next: {...}}
value : 400
next : (2) {value: 500, next: {...}}
value : 500
next : (2) {value: 600, next: null}
value : 600
next : null