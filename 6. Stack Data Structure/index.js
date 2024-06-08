//! This is our stack
let data = [];

let currentSize = data.length;

let maxValue = 5;

function push(newVal) {
  data[currentSize] = newVal;
  currentSize++;
}

function pop() {
  lastremovedItem = data[currentSize - 1];
  currentSize--;
  data.length = currentSize;
  return lastremovedItem;
}

function reverseStr(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
}

let str = "Vicky";
str = str.split("");
reverseStr(str);
console.log(str);
