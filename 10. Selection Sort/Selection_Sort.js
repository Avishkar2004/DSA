let items = [20, 12, 53, 3,8,760];
function SelectionSort(data) {
  //! console.log(data); [ 20, 12, 53, 3 ]
  for (let i = 0; i < data.length; i++) {
    minId = i;
    for (let j = i; j < data.length; j++) {
      if (data[j] < data[minId]) {
        minId = j;
      }
    }
    //! isko mahe swap karna padega
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}

SelectionSort(items);
console.log(items);

// Complexity when we use 2 loops(loops pure chal rahe honge) O(n^^2)
//One time loop = N
//Two time loop = (n^2)