class Stack {
  item = [];
  currentSize;
  maxSize;
  constructor(size) {
    this.maxSize = size;
    this.currentSize = this.item.length;
  }

  push(newVal) {
    if (this.currentSize >= this.maxSize) {
      console.log("Stack is full");
    } else {
      this.item[this.currentSize] = newVal;
      this.currentSize++;
    }
  }
  pop() {
    if (this.currentSize > 0) {
      this.currentSize--;
      this.item.length = this.currentSize;
    } else {
      console.log("Stack is already empty");
    }
  }
  display() {
    console.log(this.item);
  }
}

st1 = new Stack(5);
st1.push(40);
st1.push(34);
st1.push(78);
st1.push(2);
st1.push(28);
st1.pop();
st1.display();
