function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const ans = summation(4);

console.log(ans);
