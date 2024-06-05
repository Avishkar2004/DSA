// let data = [40, 30, 12, 25];
let data = [34, 3, 1, 25];

for (let i = 0; i < data.length; i++) {
  for (j = 0; j < data.length; j++) {// 0,1,2,3 * 4
    console.log(data);
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}

console.log(data);