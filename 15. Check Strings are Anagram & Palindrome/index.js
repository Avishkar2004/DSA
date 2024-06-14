function palindrome(data) {
  let start = 0;
  let end = data.lenght - 1;
  let res = true;

  while (end > start) {
    if (data[start] !== data[end]) {
      res = false;
      break;
    }
    start++;
    end--;
  }
  return res;
}

let str = "level";
console.log(palindrome(str));
