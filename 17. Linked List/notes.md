linked list  depends on nodes, har ek node ke andar 2 part hote hai 1.value 2.next (address of next node)  ye jab tak chalega tab tak meri data khatam nhi hota tab tak ye chalata rahega aur jab hamara last ke adr value to hogi but vaha pe null hoga
-last part jo hota hai link list ka usko hum bolte hai "tail"
-first part jo hota hai link list ka usko hum bolte hai "head"
- head, tail, node , value, next ke ird gird ghumati hai hamari linked list
- js ke adr ye dikhange object ke form mai


This ia linked list hai

class List {
  constructor(data) {
    //! This is a head
    this.head = {
      value: data,
      next: null,
    };
    //!  This is a tail
    this.tail = this.head;
  }
}

let list = new List(200);
console.log(list);


out :-

List {
  head: { value: 200, next: null },
  tail: { value: 200, next: null }
}



This is linked list with add Function

class List {
  constructor(data) {
    //! This is a head
    this.head = {
      value: data,
      next: null,
    };
    //!  This is a tail
    this.tail = this.head;
  }
  //! Function bana deta hu value ko insert krne ke liye
  appendNode(nodeData) {
    let newNode = {
        value: nodeData,
        next : null
    };
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

let list = new List(200);
list.appendNode(300);
list.appendNode(400);
console.log(list);

out :-

List {head: {...}, tail: {...}}
head :(2) {value: 200, next: {...}}
value : 200
next: (2) {value: 300, next: {...}}
value:300
next: (2) {value: 400, next: null}
value : 400 next : null
tail: (2) {value: 400, next: null}



With Size :-

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

out :-

List {
  head: { value: 200, next: { value: 300, next: [Object] } },
  tail: { value: 400, next: null },
  size: 3
}