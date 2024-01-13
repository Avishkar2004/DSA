let data = [40, 30, 12, 25];
for (let i = 0; i < data.length; i++) {
  console.log(i);
  for (let j = 0; j < data.length; j++) {
    console.log(data); //loop iterate 4 times  0 1 2 3 * 4
    if(data[j] > data[j + 1]){
      let temp = data[j]
      data[j] = data[ j + 1]
      data[j + 1] = temp;
    }
  }
}


console.log(data);