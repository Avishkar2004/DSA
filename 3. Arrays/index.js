let data2 = [1, 23, 435, 532, 324];

for(let i = 0; i< data2.length ;i++) {
  console.log(i)
  for(let j=0; j  < data2.length; j++) {
    if(data2[j] > data2[j + 1]) {
      let temp = data2[ j];
      data2[j] = data2[ j + 1]
      data2[ j + 1] = temp
    }
  }
} 

console.log(data2)