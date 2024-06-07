let data = [12, 395, 124, 35, 98];

let temp = [];

data.sort((a, b) => a - b);
console.log("Sorted Array", data);

function customReverse(data, start, end) {
  console.log(data);
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverse(data, start + 1, end - 1);
  }
}

customReverse(data, 0, data.length - 1);
