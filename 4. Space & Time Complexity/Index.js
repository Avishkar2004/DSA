const funnyNumber = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const score = [12, 3234, 54, 23, 45]; //3368
console.log(funnyNumber(score));

const funnyNumberArray = (n) => {
  // const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i * 69);
  }
  return array;
};

console.log(funnyNumberArray(5));

// 3368
// [ 0, 69, 138, 207, 276 ]

// Primite Data type :-
// Boolean , num, undefined, null => Always have space comp.
// String, arrays, obkects ; => might change with respect to input size

// O(n^2) Space Comp.
function createMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}

// example usage
const matrix = createMatrix(10);
console.log(matrix);
