//! Queue
let Queue = [];
let currentSize = Queue.length;
let maxSize = 4;
function enqueue(newVal) {
  if (currentSize >= maxSize) {
    console.log("Queue is already full");
  } else {
    Queue[currentSize] = newVal;
    currentSize++;
  }
}

function display() {
  console.log(Queue);
}

function dequeue() {
  if(currentSize > 0) {

    for (let i = 0; i < Queue.length; i++) {
      Queue[i] = Queue[i + 1];
      // console.log(Queue);
    }
    currentSize--;
    Queue.length = currentSize;
  } else {
    console.log("Queue is already empty");
  }
}

enqueue(10);
enqueue(20);
enqueue(30);
enqueue(30);
display(Queue); // (3) [10, 20, 30]
dequeue();
dequeue();
dequeue(); // []
// dequeue(); // after this you will get an alert

display(Queue); // []
