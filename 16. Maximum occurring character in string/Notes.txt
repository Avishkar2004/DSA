let str = "hello";
let strObj = {};
let maxKey = "";

for (let i = 0; i < str.length; i++) {
  //   console.log(str[i]);
  let key = str[i];
  if (!strObj[key]) {
    strObj[key] = 0;
  }
  strObj[key]++;
  if (maxKey === "" || strObj[key] > strObj[maxKey]) {
    maxKey = key;
  }
}
console.log(maxKey); // l
console.log(strObj); // { h: 1, e: 1, l: 2, o: 1 }
