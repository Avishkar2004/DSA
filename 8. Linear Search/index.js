let data = [30, 13, 45, 78, 2, 9, 5, 50];

let find = 50;
let pos = undefined;

for (let i = 0; i < data.length; i++) {
  if (data[i] === find) {
    pos = i;
    break;
  }
}

if (!pos) {
  console.log("Element Not Found");
}

console.log(pos);
