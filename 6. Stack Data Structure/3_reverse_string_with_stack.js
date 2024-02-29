let data = [];
let currentSize = data.length;

function push(newVal) {
  data[currentSize] = newVal;
  currentSize += 1;
}

function pop() {
  lastRemovedItem = data[currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemovedItem;
}

function reverseStr(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
}

let str = "Avishkar";
//! this function will convert our string into array
str = str.split(""); //[ 'J', 'y', 'o', 't', 'i' ]
// str = str.split(); // [ 'Jyoti' ]
reverseStr(str);
//! array to string
// console.log(str.join()) :- r,a,k,h,s,i,v,A
console.log(str.join("")); //! rakhsivA

// this will work only in array and object
