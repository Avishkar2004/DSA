class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  //!
  Traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      // console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }

  //! Update Node's specific value
  updateNode(oldValue, newValue) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === oldValue) {
        currentNode.value = newValue;
        return;
      }
      currentNode = currentNode.next;
    }
    console.log("Value not found in the list");
  }

  //! Delete node at specific Position
  deleteNode(index) {
    if (index < 1 || index > this.size) {
      console.log("Index out of range");
      return;
    }

    if (index === 1) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
    } else {
      let counter = 1;
      let lead = this.head;
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      lead.next = lead.next.next;
      if (index === this.size) {
        this.tail = lead;
      }
    }
    this.size--;
  }

  //! Add value at specific position
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
  //! Search Node in Linked List (based on value)
  SearchNode(data) {
    let result = undefined;
    let lead = this.head;
    let loop = true;
    while (loop) {
      lead = lead.next;
      // console.log(lead)
      loop = !!lead;
      if (loop && lead.value === data) {
        loop = false;
        result = lead;
      }
    }
    if (result === undefined) {
      console.log("Value dont exist");
    } else {
      console.log(result);
    }
  }
  //! Search Node By Index
  SearchNodeByIndex(index) {
    if (index < 1 || index > this.size) {
      console.log("Index is out of range");
      return;
    }
    let counter = 1;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    console.log(currentNode);
    return currentNode;
  }
}

let list = new List(200);
list.appendNode(300);
list.appendNode(400);
list.insertNode(2, 5000);
// list.Traversing();

list.SearchNode(400);
list.SearchNodeByIndex(2)
// console.log(list);
