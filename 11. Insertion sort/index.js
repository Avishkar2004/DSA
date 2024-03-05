//! do loop chalenge ek descendign order mai or ek ascending order mai

let arr = [12, 11, 13, 5, 6];

function insertionSort(data) {
  let i, current, j;
  for (i = 1; i < data.length; i++) {
    current = data[i];
    j = i - 1;
    while (j >= 0 && data[j] > current) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = current;
  }
}

insertionSort(arr);
console.log(arr);
