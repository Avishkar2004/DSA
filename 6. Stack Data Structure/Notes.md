//Stack In Java Script

let myStack = new Stack();

myStack.push("Apple");
myStack.push("Banana");
myStack.push("Cherry");

console.log(myStack.peek()); // Output: Cherry
console.log(myStack.pop()); // Output: Cherry
console.log(myStack.size()); // Output: 2

Stack :- linear data str(ek sequence ke andr data laga hota hai use hum linear data str kahte ----------
Eg:- stack, queue, array)

Non linear data type :- tree, graph


Stack :- we can add or remove element from top
- it follows LIFO principle (last in first out)
- A stack follows a LIFO (Last In First Out) order, whereas a queue follows a FIFO (First In First Out) order for storing the elements. A stack uses one end known as a top for insertion and deletion whereas a queue uses two ends front and rear for insertion and deletion.
- operation only happens only on top

operation : push(), pop(), peek(), isempty(), print(),
push :-  adds an element to the top of the stack
pop :-  removes an element from the top of the stack 
peek :-  returns the element at the top of the stack
isempty :- 
print :- 


 push method :-

const data = [];
let currentSize = data.length;
let maxValue = 5;

function push(newVal) {
  data[currentSize] = newVal;
}

push(20);
console.log(data);

Output:- [ 20 ]

//array :-

const data = [];
let currentSize = data.length;
let maxValue = 5;

function push(newVal) {
  data[currentSize] = newVal;
  currentSize += 1
}

push(20);
push(20);
push(20);
push(20);
push(20);
push(20);
console.log(data);

Output :- [ 20, 20, 20, 20, 20, 20 ]

//array :-

const data = [];
let currentSize = data.length;
let maxValue = 5;

function push(newVal) {
  if (currentSize >= maxValue) {
    alert("stack is full, you can't add" + newVal);
  }

  data[currentSize] = newVal;
  currentSize += 1;
}

push(20);
push(20);
push(20);
push(20);
push(20);
push(20);
console.log(data);

Output :- [20, 20, 20, 20, 20]
Alert : stack is full, you can't add 20




//array :-

const data = [];
let currentSize = data.length;
let maxValue = 5;

function push(newVal) {
  if (currentSize >= maxValue) {
    alert("stack is full, you can't add" + newVal);
  }

  data[currentSize] = newVal;
  currentSize += 1;
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    alert("stack is already empty");
  }
}

push(20);
push(21);
push(20);
push(2);
pop();
pop();
pop();
pop();
pop();
console.log(data);

Output :- (1) [20]



//array :-

const data = [];
let currentSize = data.length;
let maxValue = 5;

function push(newVal) {
  if (currentSize >= maxValue) {
    alert("stack is full, you can't add" + newVal);
  }

  data[currentSize] = newVal;
  currentSize += 1;
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    alert("stack is already empty");
  }
}

push(20);
push(1);
push(21);
push(20);
push(2);
pop();
pop();
pop();
pop();
pop();
pop()
console.log(data);

Alert : stack is already empty

Notes :-

- Stack in JavaScript is a data structure that follows the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. The stack is a linear data structure that stores elements in a linear array.

Here are the basic operations that can be performed on a stack:

1. push(element): This operation adds an element to the top of the stack. If the stack is full, it will not add the element and will show an alert message.

2. pop(): This operation removes an element from the top of the stack. If the stack is empty, it will not remove any element and will show an alert message.

3. peek(): This operation returns the element at the top of the stack without removing it. If the stack is empty, it will return null.

4. isempty(): This operation checks if the stack is empty or not. It will return true if the stack is empty and false if it is not.

5. print(): This operation prints all the elements in the stack.

Here is an example of how to implement a stack in JavaScript:

const data = [];
let currentSize = data.length;
let maxValue = 5;

function push(newVal) {
  if (currentSize >= maxValue) {
    alert("stack is full, you can't add" + newVal);
  } else {
    data[currentSize] = newVal;
    currentSize += 1;
  }
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    alert("stack is already empty");
  }
}

function peek() {
  if (currentSize > 0) {
    return data[currentSize - 1];
  } else {
    return null;
  }
}

function isempty() {
  if (currentSize === 0) {
    return true;
  } else {
    return false;
  }
}

function print() {
  console.log(data);
}

push(20);
push(21);
push(20);
push(2);
pop();
pop();
pop();
pop();
pop();
console.log(data);

in this example,  we have a stack with a maximum size of 5. The push operation adds elements to the stack. If the stack is full, it will not add any more elements and will show an alert message. The pop operation removes elements from the stack. If the stack is empty, it will not remove any elements and will show an alert message. The peek operation returns the element at the top of the stack without removing it. If the stack is empty, it will return null. The isempty operation checks if the stack is empty or not. It will return true if the stack is empty and false if it is not. The print operation prints all the elements in the stack.

In this example, we have pushed 5 elements to the stack and then popped 4 elements from it. The remaining elements in the stack are [20].

You can use these operations to perform various operations on the stack. For example, you can use the push operation to add elements to the stack, the pop operation to remove elements from the stack, the peek operation to get the top element of the stack without removing it, the isempty operation to check if the stack is empty or not, and the print operation to print all the elements in the stack.



