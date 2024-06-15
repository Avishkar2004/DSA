let data = new Map([
  ["name", "test"],
  [true, "bool key"],
  [100, "number"],
]);

data.set("color", "red");
// console.log(data.size);
// console.log(data);
// console.log(data.get(true));

// data.clear()

// for(x of data){
//   console.log(x)
// }

// data.forEach((val, key) => {
//   console.log(key);
// });

data.delete("name");
console.log(data);
