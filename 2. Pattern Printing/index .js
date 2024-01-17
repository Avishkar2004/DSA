let data = [3, 7, 12, 34, 56, 90];
let data2 = [4, 9, 29, 45];
let data3 = [];

// pointer for interation throught array

let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < data.length && d2 < data2.length) {
  if (data[d1] < data2[d2]) {
    data3[d3] = data[d1];
    d1++;
  } else {
    data3[d3] = data2[d2];
    d2++;
  }
  d3++;
}

console.log(d1);

while (d1 < data.length) {
  data3[d3] = data[d1];
  d1++;
  d3++;
}

console.log(d1);
console.log(data3);
