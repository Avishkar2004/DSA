let data = [10, 15, 18, 34, 67, 70, 89];

let start = 0;
let end = data.length - 1;
let find = 70;
let position = undefined;

function RecursiveBinary(data, start, end) {
  midd = Math.floor((start + end) / 2);
  //   console.log(midd); // 2
  if (data[midd] === find) {
    position = midd;
    return true;
  } else if (data[midd] < find) {
    RecursiveBinary(data, midd + 1, end);
  } else {
    RecursiveBinary(data, start, midd - 1);
  }
}

RecursiveBinary(data, start, end);

console.log(position);
