it can measure the efficiency and the performance of your algo using time and space complexcity


<!-- 4 Operation -->
const funnyNumber = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i === 3) {
      return array[i];
    }
  }
};

const score = [12, 3234, 54, 23, 45];

console.time("");
console.log(funnyNumber(score));
console.timeEnd("");

output:-

23
: 2.294ms


<!-- 1 operation -->
const funnyNumber = (array) => {
  return array[3]
};

const score = [12, 3234, 54, 23, 45];

console.time("");
console.log(funnyNumber(score));
console.timeEnd("");

Output :-
23
: 2.158ms


we can use operation to measure the efficienty the program

what is task ?

 if (i === 3) {
      return array[i];
      }



function someOperation(n) {
  // 3 operation performing
  return (n * (n + 5)) / 2; 
}

const ans = someOperation(30)

console.log(ans)


function printBoth(n) {
  // n^2 Operation => O(n^2) Bad complextity
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}


console.log(printBoth(3))

<!-- SPACE COMPLEXITY -->

input size increases space increases

O(1) space comp
const funnyNumber = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
};

const score = [12, 3234, 54, 23, 45]; //3368
console.log(funnyNumber(score));

O(n) space comp
const funnyNumberArray = (n) =>{
  const array = [];
  for(let i = 0; i<n; i++) {
    array.push(i * 69);
  }
  return array;
}

console.log(funnyNumberArray(5))

// 3368
// [ 0, 69, 138, 207, 276 ]

// Primite Data type :-
// Boolean , num, undefined, null => Always have space comp.
// String, arrays, obkects ; => might change with respect to input size


// O(n^2) Space Comp.
function createMatrix (n) {
  let matrix = [];
  for(let i = 0; i <n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j
    }
  }
  return matrix
}


// example usage
const matrix = createMatrix(10)
console.log(matrix)