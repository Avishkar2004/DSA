let items = [76, 45, 124, 63, 83, 12];

function SelectionSort(data) {
  let minId;
  for (let i = 0; i < data.length; i++) {
    minId = i;
    for (let j = i; j < data.length; j++) {
      if (data[j] > data[minId]) {
        minId = j;
      }
    }
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}

SelectionSort(items);
console.log(items);
