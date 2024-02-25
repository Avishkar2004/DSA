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
