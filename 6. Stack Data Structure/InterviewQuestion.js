class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "stack is empty. Can't perform pop";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "stack is empty. Can't perform peek";
    }
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }

  printStack() {
    return this.stack.slice(); // Return a copy of the stack array
  }
}

// Create new object
const stack = new Stack();

stack.push(10);
stack.push(12);
stack.push(14);

console.log(stack.size());
console.log(stack.pop());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.printStack());
