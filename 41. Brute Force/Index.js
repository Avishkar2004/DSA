function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  //Brute force
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(15));


//Space Complexity :- O(1)
// Time Complexity :- O(sqrt(n))