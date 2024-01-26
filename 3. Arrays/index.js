function factorial(number) {
  if (number === 1) {
    return number;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));

5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1
5 * 4 * 3 * 2
5 * 4 * 6
5 * 24
120
