// This is decending order
// 1 tarika ho gaya ye sort krne ka
// let items = [20, 12, 53, 3, 8, 760];
// function SelectionSort_Method1(data) {
//   //! console.log(data); [ 20, 12, 53, 3 ]
//   let minId;
//   for (let i = data.length - 1; i >= 0; i--) {
//     console.log(i)

//     minId = i;
//     for (let j = i - 1; j >= 0; j--) {
//       if (data[j] < data[minId]) {
//         minId = j;
//       }
//     }
//     //! isko hame swap karna padega
//     let temp = data[minId];
//     data[minId] = data[i];
//     data[i] = temp;
//   }
// }

// SelectionSort_Method1(items);
// console.log(items);
//Output :- [ 760, 53, 20, 12, 8, 3 ]



// 2 tarika
let item = [20, 12, 53, 3, 8, 760];
function SelectionSort_Method2(data) {
  //! console.log(data); [ 20, 12, 53, 3 ]
  let minId;
  for (let i = 0; i < data.length; i++) {
    minId = i;
    for (let j = i; j < data.length; j++) {
      if (data[j] > data[minId]) {
        minId = j;
      }
    }
    //! isko hame swap karna padega
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}

SelectionSort_Method2(item);
console.log(item);

//Output :- [ 760, 53, 20, 12, 8, 3 ]
