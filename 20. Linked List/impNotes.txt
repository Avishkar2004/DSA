- A linked list is a data structure that consists of a sequence of elements, each of which contains a reference (or "link") to the next element in the sequence. The first element is called the head and the last element is called the tail.

- Linked lists have many advantages over other data structures. Now we shall look at how to implement Linked list using JavaScript.

- Defining the Node Class and the LinkedList class
This is basically the prerequisite in order to implement a linked list in JavaScript. In this step, 2 classes namely one for the nodes and the other for the linked list need to be created.

The Node class represents a single node in the linked list. It has two properties which are data and next. The data property is used to store the actual data of the node, whereas the next property is a reference to the next node in the list. The Node class consists of a constructor that initializes the data and next property when creating a new Node.

class Node {
   constructor(data) {
      this.data = data;
      this.next = null;
   }
}


The LinkedList class is a representation of the linked list itself. It has a head property that refers to the first node in the list. The LinkedList class also has a constructor that initializes the head property when creating a new LinkedList.


class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
}


The LinkedList class also consists of a method that allows you to insert, delete, and search for nodes in the list while simultaneously allowing other operations like printing the list, counting the elements, reversing the list and so on.

Printing the linked list

You can print the elements of a linked list by traversing through the list and printing the data of each node.

printAll() {
   let current = this.head;
   while (current) {
      console.log(current.data);
      current = current.next;
   }
}


* Adding Node to the Linked List :-

There are multiple methods to add data to a linked list depending on where the new node has to be inserted, and are as follows −

Adding node to the beginning of the linked list
To add node/ element at the start of a linked list, once a new node is created with the data, simply set its next property to the current head of the list. Then you can update the head of the list to the new node. This is also known as Insertion at the head of the linked list and is the most basic type of addition of data. It is simply done by calling the add function defined below.

add(data) {
   const newNode = new Node(data);
   if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
   } else {
      this.tail.next = newNode;
      this.tail = newNode;
   }
   this.length++;
   return this;
}


* Adding node to the end of the linked list
To add node/ element at the end of a linked list, we need to traverse the list and find the last node. After which a new node with data is created and we set the next property of the last node to the new node. This is also known as Insertion at the tail of the linked list and is the second most basic type of addition of data. It is simply done by calling the addToTail function defined below.

addToTail(data) {
   let newNode = new Node(data);
   if (this.head === null) {
      this.head = newNode;
      return;
   }
   let current = this.head;
   while (current.next !== null) {
      current = current.next;
   }
   current.next = newNode;
}


*Adding node at a specific position

To add node/ element at a specific position in a linked list, you can traverse the list to find the node at the position before the insertion point, create a new node with the data, set the next property of the new node to the current node at the position, and set the next property of the previous node to the new node.

addAtPosition(data, position) {
   let newNode = new Node(data);
   if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
   }
   let current = this.head;
   let i = 1;
   while (i < position - 1 && current) {
      current = current.next;
      i++;
   }
   if (current) {
      newNode.next = current.next;
      current.next = newNode;
   }
}

Example (Adding Nodes to the Linked List)

In the below example, we implement adding nodes at beginning, at end and at a specific position.

class Node {
   constructor(data) {
      this.data = data;
      this.next = null;
   }
}
class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   
   // function to add data to linked list
   add(data) {
      const newNode = new Node(data);
      if (!this.head) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }
   
   //function to add data to tail
   addToTail(data) {
      let newNode = new Node(data);
      if (this.head === null) {
         this.head = newNode;
         return;
      }
      let current = this.head;
      while (current.next !== null) {
         current = current.next;
      }
      current.next = newNode;
   }
   
   // function to insert data to linked list at a particular index
   addAtPosition(data, position) {
      let newNode = new Node(data);
      if (position === 1) {
         newNode.next = this.head;
         this.head = newNode;
         return;
      }
      let current = this.head;
      let i = 1;
      while (i < position - 1 && current) {
         current = current.next;
         i++;
      }
      if (current) {
         newNode.next = current.next;
         current.next = newNode;
      }
   }
   
   // this function is used to iterate over the entire linkedlist and print
   it
   printAll() {
      let current = this.head;
      while (current) {
         console.log(current.data);
         current = current.next;
      }
   }
}
const list = new LinkedList();

// add elements to the linkedlist
list.add("node1");
list.add("node2");
list.add("node3");
list.add("node4");
console.log("Initial List:");
list.printAll();
console.log("List after adding nodex at position 2");
list.addAtPosition("nodex",2);
list.printAll();
console.log("List after adding nodey to tail");
list.addToTail("nodey");
list.printAll();


Output
Initial List:
node1
node2
node3
node4

List after adding nodex at position 2
node1
nodex
node2
node3
node4
List after adding nodey to tail
node1
nodex
node2
node3
node4
nodey


Removing Node
Removal of data too, can be done via several methods depending upon the requirement.

* Removing a specific node

To remove a specific node from a linked list, we need to traverse the list and find the node before the one you want to remove, update its next property to skip over the node you want to remove, and update the reference to the next node. This removes the node based upon the value.

remove(data) {
   if (!this.head) {
      return null;
   }
   if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;
      return this;
   }
   let current = this.head;
   while (current.next) {
      if (current.next.data === data) {
         current.next = current.next.next;
         this.length--;
         return this;
      }
      current = current.next;
   }
   return null;
}


Removing a node at a Specific Position

To remove a node at a specific position in a linked list, we need to traverse the list and find the node before the one you want to remove, update its next property to skip over the node you want to remove, and update the reference to the next node. This is basically removing the node based upon the index value of it.

removeAt(index) {
   if (index < 0 || index >= this.length) return null;
   if (index === 0) return this.remove();
   let current = this.head;
   for (let i = 0; i < index - 1; i++) {
      current = current.next;
   }
   current.next = current.next.next;
   this.length--;
   return this;
}

Example (Removing Nodes from the Lined List)

In the below example, we implement removing a specific node and a node at a specific position.


class Node {
   constructor(data) {
      this.data = data;
      this.next = null;
   }
}
class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   
   // function to add data to linked list
   add(data) {
      const newNode = new Node(data);
      if (!this.head) {
         this.head = newNode;
         this.tail = newNode;
      } 
      else {
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }
   
   // function to remove data from linked list
   remove(data) {
      if (!this.head) {
         return null;
      }
      if (this.head.data === data) {
         this.head = this.head.next;
         this.length--;
         return this;
      }
      let current = this.head;
      while (current.next) {
         if (current.next.data === data) {
            current.next = current.next.next;
            this.length--;
            return this;
         }
         current = current.next;
      }
      return null;
   }
   
   // function to remove from a particular index 
      removeAt(index) {
      if (index < 0 || index >= this.length) return null;
      if (index === 0) return this.remove();
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
         current = current.next;
      }
      current.next = current.next.next;
      this.length--;
      return this;
   }
   
   // this function is used to iterate over the entire linkedlist and print it
   printAll() {
      let current = this.head;
      while (current) {
         console.log(current.data);
         current = current.next;
      }
   }
}
const list = new LinkedList();
// add elements to the linkedlist
list.add("node1");
list.add("node2");
list.add("node3");
list.add("node4");
console.log("Initial List:");
list.printAll();
console.log("List after removing node2");
list.remove("node2");
list.printAll();
console.log("List after removing node at index 2");
list.removeAt(2);
list.printAll();


Output
Initial List:
node1
node2
node3
node4
List after removing node2
node1
node3
node4

List after removing node at index 2
node1
node3

