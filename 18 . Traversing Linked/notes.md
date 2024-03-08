Traversing using loops 

Next :- add of Next noted
val :- value


Counter  :-

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
    let counter = 0
    while(counter < this.size) {
      counter++
      console.log(counter)
    }
  }
}

let list = new List(200);
list.appendNode(300);
list.appendNode(400);
list.traversing();
console.log(list);



OutPut :-
1
2
3
List {
  head: { value: 200, next: { value: 300, next: [Object] } },
  tail: { value: 400, next: null },
  size: 3
}







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
      console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }
}

let list = new List(200);
list.appendNode(300);
list.appendNode(400);
list.traversing();
console.log(list);

OutPut :-
{ value: 200, next: { value: 300, next: { value: 400, next: null } } }
{ value: 300, next: { value: 400, next: null } }
{ value: 400, next: null }
List {
  head: { value: 200, next: { value: 300, next: [Object] } },
  tail: { value: 400, next: null },
  size: 3
}